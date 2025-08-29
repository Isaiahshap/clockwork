import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* Header */}
      <div className="bg-black text-white pt-48 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wider mb-6">PRIVACY POLICY</h1>
          <p className="text-white/80 text-xl">Your privacy is important to us</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none prose-invert">
          <p className="text-white/60 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">1. INFORMATION WE COLLECT</h2>
            
            <h3 className="font-semibold text-lg mb-3">Personal Information</h3>
            <p className="mb-4">When you use our website or services, we may collect the following information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Emergency contact information</li>
              <li>Health and medical information relevant to safe participation in classes</li>
              <li>Payment and billing information</li>
              <li>Class preferences, scheduling information, and attendance records</li>
              <li>Photos and videos taken during classes or events (with consent)</li>
              <li>Communications between you and Clockwork Jiu Jitsu</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>IP address, browser type, and device information</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Location data (if you enable location services)</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3">Information About Minors</h3>
            <p className="mb-4">
              For participants under 18, we collect information with parental consent including emergency contacts, 
              health information, and participation waivers signed by parents or guardians.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">2. HOW WE USE YOUR INFORMATION</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To provide martial arts instruction and related services</li>
              <li>To process payments and manage your membership</li>
              <li>To schedule classes and manage attendance</li>
              <li>To communicate about classes, events, and gym updates</li>
              <li>To ensure safety and emergency preparedness</li>
              <li>To improve our website and services</li>
              <li>To comply with legal requirements and safety regulations</li>
              <li>For marketing purposes (with your consent)</li>
              <li>To create promotional content (photos/videos) with your permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">3. INFORMATION SHARING</h2>
            <p className="mb-4">We do not sell, trade, or rent your personal information. We may share your information only in these circumstances:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> Payment processors, scheduling software, email services</li>
              <li><strong>Emergency Situations:</strong> Medical personnel or emergency responders when necessary</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with business sale or merger</li>
              <li><strong>With Consent:</strong> When you explicitly authorize sharing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">4. COOKIES AND TRACKING</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience, analyze website usage, 
              and provide personalized content. You can control cookie preferences through your browser settings.
            </p>
            <p className="mb-4">
              We may use Google Analytics and social media tracking pixels to understand website usage and 
              improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">5. DATA SECURITY</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">6. YOUR RIGHTS</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Access your personal information we hold</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to certain uses of your information</li>
              <li>Request data portability where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">7. THIRD-PARTY LINKS</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">8. DATA RETENTION</h2>
            <p className="mb-4">
              We retain your information for as long as necessary to provide services, comply with legal 
              obligations, resolve disputes, and enforce agreements. Specific retention periods vary by 
              information type and legal requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">9. CHANGES TO THIS POLICY</h2>
            <p className="mb-4">
              We may update this privacy policy periodically. We will notify you of significant changes 
              by posting the new policy on our website and updating the effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">10. CONTACT US</h2>
            <p className="mb-4">
              If you have questions about this privacy policy or our data practices, please contact us:
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
