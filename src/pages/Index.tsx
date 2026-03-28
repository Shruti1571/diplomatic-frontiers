import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import WhyUsSection from "@/components/WhyUsSection";
import EventsSection from "@/components/EventsSection";
import FeedbackSection from "@/components/FeedbackSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import JoinUsForm from "@/components/JoinUsForm";
import SectionReveal from "@/components/SectionReveal";

const Index = () => {
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onJoinClick={() => setJoinOpen(true)} />
      <HeroSection onJoinClick={() => setJoinOpen(true)} />
      <SectionReveal><AboutSection /></SectionReveal>
      <SectionReveal><MissionVisionSection /></SectionReveal>
      <SectionReveal><WhyUsSection /></SectionReveal>
      <SectionReveal><EventsSection /></SectionReveal>
      <SectionReveal><FeedbackSection /></SectionReveal>
      <SectionReveal><CommunitySection onJoinClick={() => setJoinOpen(true)} /></SectionReveal>
      <SectionReveal><Footer /></SectionReveal>
      <JoinUsForm isOpen={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  );
};

export default Index;
