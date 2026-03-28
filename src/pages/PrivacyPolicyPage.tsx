import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ userSelect: "none" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-background/95 border-b border-border">
        <div className="max-w-[900px] mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-[900px] mx-auto px-6 py-12 md:py-20">
        <header className="mb-12 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-[0.05em] mb-2">
            PRIVACY POLICY
          </h1>
          <p className="font-display text-lg text-foreground/80">Youth as Nations' Front (YANF)</p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-muted-foreground font-body">
            <span>Effective Date: April 1, 2026</span>
            <span>Last Updated: March 28, 2026</span>
          </div>
        </header>

        <div className="bg-accent/30 border border-border rounded-md p-5 mb-10">
          <p className="text-sm text-foreground/90 font-body leading-relaxed">
            <strong>Important Notice:</strong> By registering for our events, visiting our website, or engaging with our services, you agree to the terms outlined in this Privacy Policy. Please read it carefully before proceeding.
          </p>
        </div>

        <div className="space-y-10 font-body text-[0.95rem] leading-[1.85] text-foreground/85">
          {/* Section 1 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">1. Introduction</h2>
            <p>
              Welcome to Youth as Nations' Front (YANF). We are committed to protecting the privacy and personal information of every individual who interacts with us — including students, parents, teachers, school administrators, and visitors to our website and events. This Privacy Policy explains what information we collect, how we use it, how we protect it, and what rights you have regarding your personal data. We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy — including maintaining event records, issuing certificates, and meeting any legal requirements.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">2. Who We Are</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <tbody>
                  {[
                    ["Organization", "Youth as Nations' Front (YANF)"],
                    ["Email", "hello@yanfglobal.com"],
                    ["Website", "yanfglobal.com"],
                    ["Address", "GS44, Malibu Town, Sector 47, Gurugram"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border">
                      <td className="px-4 py-2.5 font-semibold text-foreground/90 bg-accent/20 w-[140px]">{k}</td>
                      <td className="px-4 py-2.5">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              YANF reserves the right to update this Privacy Policy at any time. Any changes will be posted on our official website with a revised effective date. We encourage participants, parents, and schools to review this policy periodically. Continued use of our services following any update constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">3. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>

            <h3 className="font-display text-base font-semibold text-foreground/90 mb-2">3.1 Personal Information</h3>
            <ul className="list-disc pl-6 space-y-1 mb-5">
              <li>Full name, age, date of birth, and gender</li>
              <li>Grade and school name</li>
              <li>Contact number and email address of student and/or parent or guardian</li>
              <li>City and state of residence</li>
            </ul>

            <h3 className="font-display text-base font-semibold text-foreground/90 mb-2">3.2 Event-Related Information</h3>
            <ul className="list-disc pl-6 space-y-1 mb-5">
              <li>Committee and role preferences</li>
              <li>Position papers and written submissions</li>
              <li>Performance records and awards received</li>
              <li>Photographs and videos taken during events</li>
            </ul>

            <h3 className="font-display text-base font-semibold text-foreground/90 mb-2">3.3 Technical Information (Website)</h3>
            <ul className="list-disc pl-6 space-y-1 mb-5">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on site</li>
              <li>Device type and operating system</li>
              <li>Cookies and usage data</li>
            </ul>

            <h3 className="font-display text-base font-semibold text-foreground/90 mb-2">3.4 Payment Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Registration fee transaction details and payment confirmation records</li>
              <li>We do not store full card or banking details — payments are processed through secure third-party gateways</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">4. How We Use Your Information</h2>
            <p className="mb-3">YANF uses the information collected solely for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>To process event registrations and confirm participation</li>
              <li>To communicate event schedules, updates, and important notices</li>
              <li>To issue certificates, awards, and recognition letters</li>
              <li>To maintain attendance and performance records</li>
              <li>To send newsletters and upcoming event information, with your consent</li>
              <li>To improve our website, events, and overall participant experience</li>
              <li>To comply with legal obligations if required</li>
            </ul>
            <p>We do not use your information for commercial advertising and we do not sell it to third parties under any circumstances.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">5. Sharing of Information</h2>
            <p className="mb-3">YANF does not sell, trade, or rent your personal information to any third party. We may share your information only in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Partner Schools & Institutions:</strong> Solely for coordination of events and participants</li>
              <li><strong>Event Staff & EB Members:</strong> On a need-to-know basis for event management only</li>
              <li><strong>Payment Processors:</strong> To facilitate secure fee transactions</li>
              <li><strong>Legal Authorities:</strong> If required by applicable law or court order</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">6. Photography & Media Consent</h2>
            <p className="mb-3">
              By registering for a YANF event, participants and their parents or guardians consent to the possibility of being photographed or filmed during the event. Such media may be used for:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>YANF's official website and social media platforms</li>
              <li>Promotional brochures, event highlights, and marketing materials</li>
              <li>Internal records and archives</li>
            </ul>
            <p>
              If you do not consent to being photographed or filmed, you must inform us in writing before the event at hello@yanfglobal.com. We will make every reasonable effort to accommodate your request.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">7. Data of Minors</h2>
            <p className="mb-3">YANF primarily works with students under the age of 18. We take the privacy of minors extremely seriously.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Registration for participants under 18 requires consent from a parent or legal guardian</li>
              <li>We do not knowingly collect sensitive personal data from minors beyond what is necessary for event participation</li>
              <li>Parents and guardians may request access to, correction of, or deletion of their child's data at any time by contacting us</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">8. Data Security</h2>
            <p className="mb-3">We take reasonable and appropriate measures to protect your personal information from unauthorized access, loss, misuse, or disclosure. These include:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Secure storage of all digital records</li>
              <li>Restricted access — only authorized YANF personnel may access personal data</li>
              <li>Regular review of our data handling and storage practices</li>
            </ul>
            <p>While we strive to protect your information, no method of transmission or storage is completely secure. Please contact us immediately if you believe your information has been compromised.</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">9. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how visitors use our site. You may disable cookies through your browser settings, though this may affect certain features of our website.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">10. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites, including official government bodies, UN organizations, and partner institutions. YANF is not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">11. Your Rights</h2>
            <p className="mb-3">You have the following rights regarding your personal data:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <tbody>
                  {[
                    ["Access", "View the personal information we hold about you"],
                    ["Correct", "Fix any inaccurate or incomplete information in our records"],
                    ["Delete", "Request deletion of your personal data, subject to legal obligations"],
                    ["Withdraw", "Opt out of receiving communications from YANF at any time"],
                    ["Raise Concerns", "Flag any issues about how your data is being handled"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border">
                      <td className="px-4 py-2.5 font-semibold text-foreground/90 bg-accent/20 w-[160px]">{k}</td>
                      <td className="px-4 py-2.5">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">To exercise any of these rights, please contact us at hello@yanfglobal.com.</p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">12. Retention of Data</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy — including maintaining event records, issuing certificates, and meeting any legal requirements. When data is no longer required, it is securely deleted or anonymized.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">13. Changes to This Policy</h2>
            <p>
              YANF reserves the right to update this Privacy Policy at any time. Any changes will be posted on our official website with a revised effective date. We encourage participants, parents, and schools to review this policy periodically. Continued use of our services following any update constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="font-display text-xl font-bold text-primary mb-3">14. Contact Us</h2>
            <p className="mb-3">If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please reach out to us:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <tbody>
                  {[
                    ["Organization", "Youth as Nations' Front (YANF)"],
                    ["Email", "hello@yanfglobal.com"],
                    ["Website", "yanfglobal.com"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-border">
                      <td className="px-4 py-2.5 font-semibold text-foreground/90 bg-accent/20 w-[140px]">{k}</td>
                      <td className="px-4 py-2.5">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground font-body">
          © 2026 YANF. All rights reserved.
        </div>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
