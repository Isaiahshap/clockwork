import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* Header */}
      <div className="bg-black text-white pt-48 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wider mb-6">TERMS OF SERVICE</h1>
          <p className="text-white/80 text-xl">Please read these terms carefully before using our services</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none prose-invert">
          <p className="text-white/60 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p className="mb-4">
              By accessing or using Clockwork Jiu Jitsu&apos;s website, facilities, or services, you agree to be bound 
              by these Terms of Service and all applicable laws and regulations. If you do not agree with any 
              of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">2. SERVICES DESCRIPTION</h2>
            <p className="mb-4">Clockwork Jiu Jitsu provides:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Brazilian Jiu-Jitsu instruction for adults and children</li>
              <li>Private training sessions</li>
              <li>Bootcamp and fitness classes</li>
              <li>Facility access and equipment use</li>
              <li>Online scheduling and payment services</li>
              <li>Retail merchandise through our online shop</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">3. ASSUMPTION OF RISK AND LIABILITY WAIVER</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <p className="font-semibold text-red-800 mb-2">IMPORTANT LEGAL NOTICE:</p>
              <p className="text-red-700">
                Martial arts training involves inherent risks of injury. By participating, you acknowledge 
                these risks and assume full responsibility.
              </p>
            </div>
            
            <h3 className="font-semibold text-lg mb-3">Acknowledgment of Risk</h3>
            <p className="mb-4">You understand and acknowledge that:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Brazilian Jiu-Jitsu and martial arts training involve physical contact and potential injury</li>
              <li>Injuries may include but are not limited to: bruises, cuts, strains, sprains, broken bones, concussions</li>
              <li>Some injuries may be permanent or result in disability or death</li>
              <li>Equipment failure or improper use may cause injury</li>
              <li>Other participants&apos; actions may cause injury</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3">Release of Claims</h3>
            <p className="mb-4">
              You voluntarily assume all risks and release Clockwork Jiu Jitsu, its owners, instructors, 
              employees, and affiliates from any and all claims, demands, or causes of action arising from 
              your participation in our programs or use of our facilities.
            </p>

            <h3 className="font-semibold text-lg mb-3">Medical Clearance</h3>
            <p className="mb-4">
              You affirm that you are physically fit and have no medical conditions that would prevent 
              safe participation. You agree to immediately inform instructors of any injuries or medical conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">4. MEMBERSHIP AND PAYMENT TERMS</h2>
            
            <h3 className="font-semibold text-lg mb-3">Membership Fees</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>All fees are due in advance and non-refundable unless specified otherwise</li>
              <li>Monthly memberships automatically renew unless cancelled with 30 days notice</li>
              <li>Price changes require 30 days advance notice</li>
              <li>Late payment may result in suspension of privileges</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3">Cancellation Policy</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>30 days written notice required for membership cancellation</li>
              <li>No refunds for partial months or unused sessions</li>
              <li>Frozen accounts available for extended absences (additional fees may apply)</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3">Class Attendance</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>24-hour notice required for private session cancellations</li>
              <li>No-shows may be charged the full session fee</li>
              <li>Class schedules subject to change with notice</li>
              <li>Makeup classes may be available at instructor discretion</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">5. FACILITY RULES AND CODE OF CONDUCT</h2>
            
            <h3 className="font-semibold text-lg mb-3">General Rules</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Follow all instructor directions and safety guidelines</li>
              <li>Maintain proper hygiene and wear appropriate training attire</li>
              <li>No shoes on training mats</li>
              <li>Clean and disinfect equipment after use</li>
              <li>No photography or recording without permission</li>
              <li>Children under 16 must be supervised by a parent or guardian</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3">Prohibited Conduct</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Aggressive, disrespectful, or inappropriate behavior</li>
              <li>Training under the influence of drugs or alcohol</li>
              <li>Solicitation or commercial activity without permission</li>
              <li>Damage to property or equipment</li>
              <li>Violation of health and safety protocols</li>
            </ul>

            <p className="mb-4">
              Violation of these rules may result in immediate termination of membership without refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">6. MINORS</h2>
            <p className="mb-4">
              Parents or guardians of participants under 18 must sign all waivers and agreements on behalf 
              of the minor. Parents are responsible for their child&apos;s conduct and safety during all programs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">7. INTELLECTUAL PROPERTY</h2>
            <p className="mb-4">
              All content on our website, including techniques taught, logos, and training materials, 
              are protected by intellectual property laws. You may not reproduce, distribute, or create 
              derivative works without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">8. PRIVACY AND MEDIA RELEASE</h2>
            <p className="mb-4">
              By participating in our programs, you consent to being photographed or recorded for 
              promotional purposes. You grant Clockwork Jiu Jitsu the right to use your likeness 
              in marketing materials, social media, and website content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">9. WEBSITE TERMS</h2>
            
            <h3 className="font-semibold text-lg mb-3">Acceptable Use</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use our website only for lawful purposes</li>
              <li>Do not interfere with website functionality</li>
              <li>Respect other users&apos; privacy and rights</li>
              <li>Provide accurate information when required</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3">Account Security</h3>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account credentials 
              and all activities under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">10. DISCLAIMERS</h2>
            <p className="mb-4">
              Our services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee 
              specific results from training programs. Individual progress varies based on many factors 
              including effort, attendance, and physical condition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">11. LIMITATION OF LIABILITY</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Clockwork Jiu Jitsu&apos;s liability is limited to 
              the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">12. GOVERNING LAW</h2>
            <p className="mb-4">
              These terms are governed by New York State law. Any disputes will be resolved in 
              New York courts with jurisdiction over New York County.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">13. MODIFICATIONS</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes will be posted on 
              our website with an updated effective date. Continued use constitutes acceptance of changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">14. SEVERABILITY</h2>
            <p className="mb-4">
              If any provision of these terms is found unenforceable, the remaining provisions 
              will remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">15. CONTACT INFORMATION</h2>
            <p className="mb-4">
              For questions about these terms, please contact us:
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <p><strong>Clockwork Jiu Jitsu</strong></p>
              <p>650 Broadway, 2nd Floor</p>
              <p>New York, NY 10012</p>
              <p>Phone: (212) 675-0300</p>
              <p>Email: <a href="mailto:info@clockworkbjj.com" className="text-blue-600 hover:underline">info@clockworkbjj.com</a></p>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold tracking-wide hover:bg-white/90 transition-colors"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

