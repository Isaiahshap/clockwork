'use client';

import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// FAQ data structure with categories
const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is Brazilian Jiu-Jitsu?",
        answer: "Brazilian Jiu-Jitsu (BJJ) is a martial art focused on grappling and ground fighting. It teaches that a smaller, weaker person can successfully defend against a bigger, stronger, heavier opponent by using leverage, proper technique, and taking the fight to the ground. At Clockwork BJJ in NYC, we emphasize technical proficiency and strategic thinking over brute strength."
      },
      {
        question: "Do I need to be in shape to start training?",
        answer: "Absolutely not! One of the best things about training at Clockwork Jiu Jitsu in New York City is that you'll get in shape BY training. Many of our students were not in great shape when they started, but quickly developed strength, flexibility, and cardio through regular practice. We welcome all fitness levels and will help you progress at your own pace."
      },
      {
        question: "What should I bring to my first class?",
        answer: "For your first class at Clockwork BJJ, just bring workout clothes (t-shirt and shorts/sweatpants), water, and an open mind! No special equipment is needed for your trial class. If you decide to continue training, you'll eventually need a gi (the traditional uniform), but we can help you with recommendations after you've had your first experience."
      },
      {
        question: "How much does training cost?",
        answer: "We offer various membership options to fit different training frequencies and budgets. Our pricing is competitive for Manhattan BJJ schools. Please contact us directly for current rates and any promotional offers. We believe in transparency and no hidden fees."
      },
      {
        question: "Is BJJ safe to learn?",
        answer: "Safety is a top priority at Clockwork BJJ. While any physical activity carries some risk, we maintain a controlled training environment with proper instruction and supervision. Our instructors emphasize technique over force, and we have a tap-out system that allows practitioners to signal when to stop a submission hold, preventing injury. Our NYC academy has an excellent safety record."
      },
      {
        question: "How long does it take to learn BJJ?",
        answer: "Learning BJJ is a lifelong journey. You'll start developing useful skills from your very first class, but mastery takes years of dedicated practice. Most students begin to feel comfortable with fundamental movements and basic techniques within 3-6 months of consistent training. At Clockwork, we focus on building a solid foundation first, which accelerates your overall progress."
      },
      {
        question: "Will I get injured training BJJ?",
        answer: "While no physical activity is without risk, our focus on technique, control, and respect significantly reduces injury rates. Most BJJ injuries are minor (like mat burns or muscle soreness). At Clockwork, we maintain a controlled training environment where safety comes first. We teach proper falling techniques, emphasize controlled movements, and foster a culture where training partners look out for each other's wellbeing."
      },
      {
        question: "Do I need to compete in tournaments?",
        answer: "No, competition is entirely optional at Clockwork BJJ. While we have a strong competition team and support members who wish to test their skills in tournaments, many of our students train purely for fitness, self-defense, and personal growth. Our curriculum serves both competitive and non-competitive practitioners equally well."
      }
    ]
  },
  {
    category: "Training at Clockwork",
    questions: [
      {
        question: "What makes Clockwork different from other NYC BJJ academies?",
        answer: "Clockwork Jiu Jitsu stands out in the NYC martial arts scene for our ego-free training environment, technical focus, and inclusive community. Our instructors know every student by name, our curriculum is meticulously structured for optimal learning, and we welcome practitioners of all levels. We're conveniently located in downtown Manhattan with a clean, modern facility and a supportive atmosphere that emphasizes growth over competition."
      },
      {
        question: "What is the class structure like?",
        answer: "Classes at Clockwork BJJ typically run 60-90 minutes and include a warm-up, technique instruction, drilling time to practice the techniques with a partner, and often end with positional sparring or rolling (live training). The techniques stay consistent throughout the week, allowing you to refine your skills through repetition. We focus on building proficiency in fundamentals before advancing to more complex techniques."
      },
      {
        question: "How often should I train?",
        answer: "For optimal progress in Brazilian Jiu-Jitsu, we recommend training 2-3 times per week to start. This frequency allows your body to adapt and recover while consistently building skills. As you become more comfortable, you can increase your training frequency. Many of our dedicated students train 4-5 times per week. Remember, consistency is more important than intensity when beginning your BJJ journey in NYC."
      },
      {
        question: "Do you offer morning, afternoon, and evening classes?",
        answer: "Yes! We understand the demands of NYC life and offer a flexible schedule with morning, lunch, evening, and weekend classes. Our downtown Manhattan location makes it convenient to train before work, during lunch breaks, or after office hours. Check our current schedule page for specific class times."
      },
      {
        question: "What's the belt progression in BJJ?",
        answer: "The BJJ belt system progresses from white (beginner) to blue, purple, brown, and finally black belt. At Clockwork, we follow IBJJF standards for promotion requirements. Each belt typically takes 1-3 years of consistent training, with black belt often requiring 10+ years of dedicated practice. We also use stripe promotions between belts to mark progress. Promotions are based on skill development, technical understanding, and mat time rather than simply time spent training."
      },
      {
        question: "What's the difference between gi and no-gi training?",
        answer: "Gi training involves wearing the traditional BJJ uniform (kimono), which allows for grips on the fabric. No-gi training is done in rash guards and shorts/spats, focusing on body control without cloth grips. At Clockwork, we offer both styles to develop well-rounded practitioners. Gi training tends to be more strategic and methodical, while no-gi is often faster-paced. We recommend training both to maximize your skill development."
      },
      {
        question: "Do you have women-only classes?",
        answer: "Yes, we offer women's-focused classes in our schedule. These classes provide a supportive environment for women to train together, though all our regular classes are co-ed and welcoming to everyone. Many of our female students participate in both women's classes and regular classes. Our female instructors are exceptional role models who demonstrate the effectiveness of BJJ regardless of gender."
      },
      {
        question: "How are new students integrated into classes?",
        answer: "We take special care to ensure new students feel welcome and supported. Beginners are paired with experienced, helpful training partners who understand how to work with newcomers. Our fundamentals classes are specifically designed to introduce core concepts in a structured, accessible way. Instructors provide extra attention to new students, and our community is known for its friendliness toward beginners."
      }
    ]
  },
  {
    category: "Kids Program",
    questions: [
      {
        question: "At what age can children start training BJJ?",
        answer: "At Clockwork Jiu Jitsu NYC, we welcome children as young as 4 years old in our specialized kids' program. We have age-specific classes (4-6, 6-9, and 9-13) that are tailored to each developmental stage, ensuring appropriate instruction and challenges for every child."
      },
      {
        question: "What benefits will my child gain from BJJ?",
        answer: "Children who train Brazilian Jiu-Jitsu at Clockwork develop far more than just self-defense skills. Our NYC kids' program builds confidence, discipline, focus, and respect. Children improve their coordination, strength, and problem-solving abilities while learning to set and achieve goals. Many parents report improved behavior at home and better academic performance as their children apply the mental discipline from BJJ to other areas of life."
      },
      {
        question: "Is BJJ training safe for kids?",
        answer: "Safety is our absolute priority in our children's program. Our instructors are specifically trained to teach kids in an age-appropriate manner with proper supervision at all times. We maintain a controlled environment where children learn at their own pace, with emphasis on technique rather than force. Our kids' classes focus on fun, non-violent applications of Jiu-Jitsu principles."
      },
      {
        question: "Can parents watch the kids' classes?",
        answer: "Absolutely! We encourage parents to observe their children's progress at our downtown Manhattan academy. We have a designated viewing area where you can watch classes. Many parents at Clockwork even train themselves, creating a wonderful family activity that you can share together."
      },
      {
        question: "What should my child wear to BJJ class?",
        answer: "For their first class, comfortable athletic clothes like t-shirts and shorts/sweatpants are fine. Once enrolled, children will need a BJJ gi (uniform), which can be purchased through us or from recommended suppliers. We'll help ensure you get the right size for your child."
      },
      {
        question: "How do you handle discipline in kids' classes?",
        answer: "Our approach to discipline focuses on positive reinforcement rather than punishment. We set clear expectations about respect, focus, and effort. When issues arise, we use them as teaching moments to help children develop self-control and responsibility. Our instructors are trained in child development and understand how to motivate children constructively while maintaining a fun, engaging atmosphere."
      },
      {
        question: "Will my child learn to be aggressive or violent?",
        answer: "No. In fact, the opposite is true. BJJ teaches children controlled responses to physical challenges and emphasizes respect for training partners. Children who train BJJ typically become more confident and less likely to engage in aggressive behavior. They learn that physical confrontation is a last resort and develop the emotional regulation to avoid unnecessary conflicts."
      },
      {
        question: "How do you structure kids' belt promotions?",
        answer: "Our kids' belt system follows a modified progression with more frequent advancements to keep children motivated. Promotions are based on attendance, skill development, and demonstration of core values like respect and perseverance. We hold special promotion ceremonies that celebrate each child's achievements, building confidence and reinforcing their commitment to continued growth."
      }
    ]
  },
  {
    category: "Advanced Training",
    questions: [
      {
        question: "Do you have competition training?",
        answer: "Yes, Clockwork BJJ offers specialized competition training for students interested in testing their skills in tournaments. Our NYC competition team has achieved significant success at local, national, and international events. We provide structured preparation, strategy development, and mental conditioning for competitors of all levels."
      },
      {
        question: "Can I train if I have previous experience from another academy?",
        answer: "Absolutely! We welcome practitioners from all backgrounds and other academies. Whether you're relocating to NYC or just looking for a new training environment, you'll find our technical curriculum and ego-free atmosphere refreshing. We respect your previous training while helping you adapt to our teaching style."
      },
      {
        question: "Do you offer private lessons?",
        answer: "Yes, we offer private lessons with our experienced instructors. These one-on-one sessions are ideal for accelerating your progress, addressing specific technical challenges, or preparing for competitions. Private training can be scheduled at convenient times, even outside regular class hours. Contact us for instructor availability and rates."
      },
      {
        question: "Is there a specific BJJ lineage or style taught at Clockwork?",
        answer: "Clockwork Jiu Jitsu teaches a technical, precise style of BJJ that emphasizes proper fundamentals and efficient movement. Our curriculum incorporates elements from both traditional and modern approaches to Brazilian Jiu-Jitsu, creating well-rounded practitioners who are effective in both self-defense and sport contexts. Our instructors bring diverse backgrounds and specialties, providing students with a comprehensive BJJ education."
      },
      {
        question: "How do you prepare students for competition?",
        answer: "Our competition preparation is comprehensive and individualized. We offer dedicated competition training sessions that focus on tournament-specific strategies, conditioning, and mental preparation. Students receive personalized game plans based on their strengths and the competitive ruleset. We also simulate competition scenarios through situational drilling and mock tournaments to build comfort under pressure."
      },
      {
        question: "Do you have specialized training for MMA fighters?",
        answer: "Yes, we offer specialized training for MMA fighters focusing on the grappling aspects of mixed martial arts. Our instructors understand the differences between pure BJJ and MMA grappling, including wall work, striking integration, and no-gi specific techniques. We've helped develop numerous professional and amateur MMA fighters who rely on our technical approach to enhance their ground game."
      },
      {
        question: "How do you approach teaching advanced techniques?",
        answer: "Advanced techniques are introduced progressively as students master the fundamentals. Our curriculum ensures that complex moves are built upon a solid foundation of basic principles. For higher-level practitioners, we offer advanced classes that explore sophisticated systems, cutting-edge techniques, and deeper conceptual understanding. We emphasize not just how techniques work, but when and why to apply them in various scenarios."
      }
    ]
  },
  {
    category: "Practical Matters",
    questions: [
      {
        question: "Where are you located in NYC?",
        answer: "Clockwork Jiu Jitsu is conveniently located at 650 Broadway, 2nd Floor, New York City, NY 10012, in the heart of downtown Manhattan. We're easily accessible by multiple subway lines and just a short walk from SoHo, NoHo, and Greenwich Village neighborhoods."
      },
      {
        question: "Do you have showers and changing facilities?",
        answer: "Yes, our NYC academy features clean, modern changing rooms and showers for members. We understand that many students come directly from work or head to the office after morning classes, so we provide all the amenities needed to transition smoothly to and from your training sessions."
      },
      {
        question: "What are your COVID-19 policies?",
        answer: "We follow current NYC health guidelines regarding COVID-19. Our facility is regularly sanitized, and we maintain appropriate measures to ensure the safety of our students. Please contact us for the most up-to-date information on our health and safety protocols."
      },
      {
        question: "Is there parking available?",
        answer: "While we don't have dedicated parking, there are several parking garages within walking distance of our downtown Manhattan location. Many of our students also utilize public transportation, which is abundant in our area."
      },
      {
        question: "Do you offer any discounts?",
        answer: "We offer special rates for students, military/first responders, and family memberships. We also occasionally run promotions for new members. Contact us directly to learn about current discount opportunities at our NYC academy."
      },
      {
        question: "What amenities does your facility offer?",
        answer: "Our state-of-the-art facility features over 5,000 square feet of mat space, modern locker rooms with showers, a strength and conditioning area, a pro shop with gear and apparel, and a comfortable viewing area. We maintain hospital-grade cleanliness standards with daily cleaning protocols and regular deep sanitization of all training surfaces and common areas."
      },
      {
        question: "Do you sell BJJ gear and equipment?",
        answer: "Yes, our merch shop carries high-quality rash guards, spats, and other training essentials. We offer academy-branded gear. New students receive guidance on appropriate gear selection, and we ensure proper sizing for optimal training experience."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, ACH direct debit, and digital payment methods. Memberships are typically set up as convenient monthly auto-payments, though we also offer prepaid options with discounts for longer commitments. We pride ourselves on transparent pricing with no hidden fees or complicated contracts."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Getting Started");
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({});

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
          {/* Hero Background Image */}
          <Image
            src="/images/gym-building.jpg"
            alt="Clockwork BJJ New York City"
            fill
            priority
            className="object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1 
              className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wider text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              FREQUENTLY ASKED QUESTIONS
            </motion.h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-6 tracking-wider">EVERYTHING YOU NEED TO KNOW ABOUT TRAINING AT CLOCKWORK</h2>
              <p className="font-montserrat text-lg max-w-3xl mx-auto">
                Below you&apos;ll find answers to the most common questions about Brazilian Jiu-Jitsu and training at Clockwork BJJ in New York City. 
                If you don&apos;t see your question answered here, please <Link href="/contact" className="underline hover:text-gray-300 transition-colors">contact us</Link> directly.
              </p>
            </motion.div>

                        {/* FAQ Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Category Navigation - Desktop Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block"
              >
                <div className="sticky top-24 bg-zinc-900 border border-zinc-800 overflow-hidden">
                  <div className="p-4 bg-black">
                    <h3 className="font-bebas text-xl tracking-wide">CATEGORIES</h3>
                  </div>
                  <nav className="p-4">
                    <ul className="space-y-2">
                      {faqData.map((category) => (
                        <li key={category.category}>
                          <button
                            onClick={() => setActiveCategory(category.category)}
                            className={`w-full text-left px-4 py-2 font-montserrat transition-colors ${
                              activeCategory === category.category
                                ? 'bg-white text-black font-medium'
                                : 'hover:bg-zinc-800'
                            }`}
                          >
                            {category.category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </motion.div>

              {/* Category Navigation - Mobile Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:hidden mb-8 w-full"
              >
                <div className="bg-zinc-900 border border-zinc-800 overflow-hidden">
                  <div className="p-4 bg-black">
                    <h3 className="font-bebas text-xl tracking-wide">SELECT CATEGORY</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <div className="flex p-2 min-w-full">
                      {faqData.map((category) => (
                        <button
                          key={category.category}
                          onClick={() => setActiveCategory(category.category)}
                          className={`px-4 py-2 whitespace-nowrap font-montserrat transition-colors mr-2 ${
                            activeCategory === category.category
                              ? 'bg-white text-black font-medium'
                              : 'bg-zinc-800 hover:bg-zinc-700'
                          }`}
                        >
                          {category.category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Questions and Answers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-3"
              >
                <div className="bg-zinc-900 border border-zinc-800 overflow-hidden">
                  <div className="p-6 bg-black">
                    <h2 className="font-bebas text-2xl tracking-wide">{activeCategory}</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {faqData
                        .find(cat => cat.category === activeCategory)
                        ?.questions.map((item, index) => (
                          <div 
                            key={index} 
                            className="border border-zinc-800 overflow-hidden"
                          >
                            <button
                              onClick={() => toggleQuestion(item.question)}
                              className="w-full flex justify-between items-center p-5 text-left bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                            >
                              <h3 className="font-bebas text-xl tracking-wide">{item.question}</h3>
                              <motion.div
                                animate={{ rotate: openQuestions[item.question] ? 180 : 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                              >
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="square"
                                    strokeLinejoin="miter"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  ></path>
                                </svg>
                              </motion.div>
                            </button>
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ 
                                height: openQuestions[item.question] ? "auto" : 0,
                                opacity: openQuestions[item.question] ? 1 : 0
                              }}
                              transition={{ 
                                type: "spring", 
                                stiffness: 300, 
                                damping: 30,
                                opacity: { duration: 0.2 }
                              }}
                              className="overflow-hidden"
                            >
                              <div className="p-5 bg-zinc-900 border-t border-zinc-800">
                                <p className="font-montserrat">{item.answer}</p>
                              </div>
                            </motion.div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20 bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="font-bebas text-3xl mb-4 tracking-wide">READY TO EXPERIENCE CLOCKWORK BJJ?</h2>
                  <p className="font-montserrat mb-6">
                    The best way to understand what makes Clockwork Jiu Jitsu special is to experience it yourself. 
                    Your first class is on us – come see why we&apos;re one of the most respected BJJ academies in NYC.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/free-trial"
                      className="font-bebas inline-block bg-white text-black px-6 py-3 text-lg tracking-wider hover:bg-gray-200 transition-colors duration-200"
                    >
                      START FREE TRIAL
                    </Link>
                    <Link
                      href="/contact"
                      className="font-bebas inline-block border border-white px-6 py-3 text-lg tracking-wider hover:bg-white hover:text-black transition-colors duration-200"
                    >
                      CONTACT US
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/images/hero-bg1.jpg"
                    alt="Train BJJ in New York City"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              </div>
            </motion.div>

            {/* Our Promise Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-8 tracking-wider text-center">OUR PROMISE TO YOU</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image 
                    src="/images/private.webp"
                    alt="Clockwork BJJ Training"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <ul className="space-y-4">
                    {[
                      "We will know your name and remember your face.",
                      "If you call or email, expect to hear back from us promptly.",
                      "Our instructors genuinely care about their students and are dedicated to your progress.",
                      "We encourage you and offer hands-on help; we will never yell at you.",
                      "We don't subscribe to a sink or swim mentality – there's room for all.",
                      "We don't try and kill you on your first day – we want you to come back!",
                      "Classes always start on time.",
                      "You can ask and receive direct feedback.",
                      "Cleanliness and hygiene are of supreme importance.",
                      "Our staff is friendly and approachable."
                    ].map((promise, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-white/10 p-2 rounded-full mr-3 flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <p className="font-montserrat">{promise}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Location and Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20 text-center"
            >
              <p className="font-montserrat italic text-xl mb-4">
                &quot;This environment destroys ego and increases ones sense of reality.&quot;
              </p>
              <p className="font-montserrat">
                650 Broadway, 2nd Floor New York City, NY 10012
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/free-trial"
                  className="font-bebas inline-block bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200"
                >
                  START YOUR BJJ JOURNEY TODAY
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
