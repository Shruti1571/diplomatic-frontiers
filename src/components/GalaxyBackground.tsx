import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 6000;
const ARMS = 5;
const ARM_SPREAD = 0.6;

function GalaxyParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, colors, sizes, angles } = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);
    const colors = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);
    const angles = new Float32Array(STAR_COUNT);

    const coreColor = new THREE.Color("hsl(40, 70%, 75%)");
    const midColor = new THREE.Color("hsl(220, 60%, 70%)");
    const outerColor = new THREE.Color("hsl(260, 50%, 60%)");
    const goldColor = new THREE.Color("hsl(43, 74%, 49%)");

    for (let i = 0; i < STAR_COUNT; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 5 + 0.1;
      const armIndex = Math.floor(Math.random() * ARMS);
      const armAngle = (armIndex / ARMS) * Math.PI * 2;
      const spiralAngle = radius * 0.8;
      const angle = armAngle + spiralAngle;

      const spreadX = (Math.random() - 0.5) * ARM_SPREAD * (radius / 5);
      const spreadY = (Math.random() - 0.5) * 0.3 * Math.exp(-radius * 0.3);
      const spreadZ = (Math.random() - 0.5) * ARM_SPREAD * (radius / 5);

      positions[i3] = Math.cos(angle) * radius + spreadX;
      positions[i3 + 1] = spreadY;
      positions[i3 + 2] = Math.sin(angle) * radius + spreadZ;

      angles[i] = angle;

      const t = radius / 5;
      const color = new THREE.Color();
      if (t < 0.3) {
        color.lerpColors(coreColor, goldColor, t / 0.3);
      } else if (t < 0.6) {
        color.lerpColors(goldColor, midColor, (t - 0.3) / 0.3);
      } else {
        color.lerpColors(midColor, outerColor, (t - 0.6) / 0.4);
      }

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 0.5;
    }

    return { positions, colors, sizes, angles };
  }, []);

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        },
        vertexShader: `
          attribute float aSize;
          uniform float uTime;
          uniform float uPixelRatio;
          varying vec3 vColor;
          varying float vOpacity;
          
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            float dist = length(mvPosition.xyz);
            vOpacity = smoothstep(12.0, 2.0, dist) * (0.6 + 0.4 * sin(uTime * 2.0 + position.x * 10.0));
            gl_PointSize = aSize * uPixelRatio * (4.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vOpacity;
          
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float alpha = smoothstep(0.5, 0.1, d) * vOpacity;
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
      }),
    []
  );

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x = -0.5;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>
      <primitive ref={materialRef} object={shaderMaterial} attach="material" />
    </points>
  );
}

function BackgroundStars() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 15 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.005;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function NebulaClouds() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.01;
  });

  return (
    <mesh ref={ref} position={[0, 0, -2]} rotation={[-0.5, 0, 0]}>
      <planeGeometry args={[14, 14]} />
      <meshBasicMaterial transparent opacity={0.06} color="#7c3aed" blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

const GalaxyBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <GalaxyParticles />
        <BackgroundStars />
        <NebulaClouds />
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;
