import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* Header */}
      <div className="bg-black text-white pt-48 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wider mb-6">ACCESSIBILITY STATEMENT</h1>
          <p className="text-white/80 text-xl">We are committed to ensuring digital accessibility for all users</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none prose-invert">
          <p className="text-white/60 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">OUR COMMITMENT</h2>
            <p className="mb-4">
              Clockwork Jiu Jitsu is committed to making our website accessible to all users, including 
              those with disabilities. We recognize that web accessibility is an ongoing process, and we 
              are actively working to improve the accessibility of our digital presence.
            </p>
            <p className="mb-4">
              We believe that everyone should be able to access information about our martial arts programs 
              and services, regardless of their abilities or the technologies they use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">CURRENT ACCESSIBILITY STATUS</h2>
            <p className="mb-4">
              We are working toward conformance with the Web Content Accessibility Guidelines (WCAG) 2.1 
              Level AA standards. While we have made progress in several areas, we acknowledge that our 
              website may not yet be fully compliant in all areas.
            </p>
            
            <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-6 mb-6 rounded-lg">
              <p className="font-semibold text-yellow-200 mb-2">Current Status:</p>
              <p className="text-yellow-100">
                Our website is currently under review for accessibility compliance. We are working 
                systematically to identify and address accessibility barriers.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">WHAT WE&apos;VE IMPLEMENTED</h2>
            <p className="mb-4">Current accessibility features include:</p>
            
            <h3 className="font-semibold text-lg mb-3">Basic Structure</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Consistent navigation structure across pages</li>
              <li>Descriptive page titles</li>
              <li>Responsive design that works on mobile devices</li>
              <li>Readable fonts and text sizing</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3">Visual Design</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>High contrast text on dark backgrounds</li>
              <li>Text that scales with browser zoom</li>
              <li>Consistent visual design patterns</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3">Content</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Clear, straightforward language</li>
              <li>Structured content with headings</li>
              <li>Contact information clearly displayed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">AREAS FOR IMPROVEMENT</h2>
            <p className="mb-4">We are actively working to improve the following areas:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Adding comprehensive alt text for all images</li>
              <li>Implementing proper ARIA labels and descriptions</li>
              <li>Improving keyboard navigation throughout the site</li>
              <li>Adding skip links for easier navigation</li>
              <li>Ensuring all interactive elements are properly labeled</li>
              <li>Testing with screen readers and other assistive technologies</li>
              <li>Adding captions to video content</li>
              <li>Improving form accessibility with better labels and error handling</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">OUR IMPROVEMENT PLAN</h2>
            <p className="mb-4">
              We have established a timeline for accessibility improvements:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Short-term (1-3 months):</strong> Add alt text, improve heading structure, enhance keyboard navigation</li>
              <li><strong>Medium-term (3-6 months):</strong> Implement ARIA labels, add skip links, improve form accessibility</li>
              <li><strong>Long-term (6-12 months):</strong> Conduct professional accessibility audit, implement advanced features</li>
            </ul>
            <p className="mb-4">
              We will update this accessibility statement as we make progress on these improvements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">PHYSICAL FACILITY ACCESSIBILITY</h2>
            <p className="mb-4">
              Our martial arts facility is located on the 2nd floor at 650 Broadway in New York City. 
              We are committed to accommodating students with accessibility needs to the best of our ability.
            </p>
            
            <h3 className="font-semibold text-lg mb-3">Current Facility Features</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Building has elevator access to reach our 2nd floor location</li>
              <li>Located in Manhattan with access to multiple subway lines (6, N, Q, R, W at Union Square area)</li>
              <li>Street-level building entrance</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3">Important Considerations</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Our training space involves floor work and physical contact inherent to Brazilian Jiu-Jitsu</li>
              <li>Facility accommodations may vary depending on specific accessibility needs</li>
              <li>Parking in Manhattan is limited; public transportation is typically the best option</li>
            </ul>

            <div className="bg-blue-500/10 border-l-4 border-blue-400 p-6 rounded-lg mb-6">
              <p className="font-semibold mb-2 text-blue-200">Planning Your Visit</p>
              <p className="text-blue-100">
                We strongly encourage anyone with accessibility needs to contact us before their first visit. 
                We&apos;ll discuss your specific requirements and work together to ensure you can participate 
                safely and comfortably in our programs.
              </p>
            </div>

            <p className="mb-4">
              <strong>Please contact us in advance</strong> at (212) 675-0300 or info@clockworkbjj.com 
              to discuss your accessibility needs. We&apos;re happy to answer questions about our facility 
              layout, program modifications, and how we can best accommodate your participation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">TESTING AND VALIDATION</h2>
            <p className="mb-4">
              We are in the process of implementing regular accessibility testing, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Automated accessibility scanning tools</li>
              <li>Manual testing with keyboard navigation</li>
              <li>Testing with screen readers when possible</li>
              <li>User feedback collection</li>
              <li>Professional accessibility audits (planned)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">THIRD-PARTY SERVICES</h2>
            <p className="mb-4">
              Our website may include third-party services (such as social media embeds, maps, or 
              scheduling systems) that may not be fully accessible. We are working to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Evaluate the accessibility of third-party services</li>
              <li>Provide alternative ways to access the same information</li>
              <li>Choose more accessible alternatives when possible</li>
              <li>Advocate with vendors for accessibility improvements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">KNOWN LIMITATIONS</h2>
            <p className="mb-4">
              We are aware of the following accessibility limitations that we are working to address:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Some images may not have adequate alternative text</li>
              <li>Color contrast may not meet standards in all areas</li>
              <li>Not all interactive elements may be keyboard accessible</li>
              <li>Some content may not be properly structured for screen readers</li>
              <li>Video content may lack captions or transcripts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">FEEDBACK AND SUPPORT</h2>
            <p className="mb-4">
              We welcome feedback on the accessibility of our website and services. If you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Experience difficulty accessing any part of our website</li>
              <li>Have suggestions for improving accessibility</li>
              <li>Need assistance with any of our services</li>
              <li>Require information in an alternative format</li>
            </ul>
            <p className="mb-4">
              Please don&apos;t hesitate to contact us. We are committed to providing equal access 
              and will work with you to ensure you can access our information and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">ALTERNATIVE ACCESS METHODS</h2>
            <p className="mb-4">
              If you encounter barriers while using our website, we offer alternative ways to access our services:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Phone support for class scheduling and inquiries</li>
              <li>In-person assistance at our facility</li>
              <li>Email communication for detailed information</li>
              <li>Alternative format documents upon request</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">CONTACT US</h2>
            <p className="mb-4">
              For accessibility-related questions, concerns, or to request accommodation, please contact us:
            </p>
            <div className="bg-blue-500/10 border-l-4 border-blue-400 p-6 rounded-lg">
              <p className="font-semibold mb-2 text-white">Accessibility Coordinator</p>
              <p><strong>Clockwork Jiu Jitsu</strong></p>
              <p>650 Broadway, 2nd Floor</p>
              <p>New York, NY 10012</p>
              <p>Phone: <a href="tel:+12126750300" className="text-blue-600 hover:underline">(212) 675-0300</a></p>
              <p>Email: <a href="mailto:accessibility@clockworkbjj.com" className="text-blue-600 hover:underline">accessibility@clockworkbjj.com</a></p>
              <p className="text-sm text-white/60 mt-2">
                We aim to respond to accessibility feedback within 2 business days.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">FORMAL COMPLAINT PROCESS</h2>
            <p className="mb-4">
              If you believe that content on our website or any of our services are not accessible, 
              you may file a complaint by:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Contacting us using the information above</li>
              <li>Filing a complaint with the U.S. Department of Justice</li>
              <li>Contacting the New York State Division of Human Rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bebas text-2xl tracking-wide text-white mb-4">UPDATES TO THIS STATEMENT</h2>
            <p className="mb-4">
              This accessibility statement will be updated as we continue to improve the accessibility 
              of our website and services. We review and update this statement annually or when 
              significant changes are made to our website.
            </p>
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

