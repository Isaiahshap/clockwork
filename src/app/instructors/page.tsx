import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface InstructorCardProps {
  name: string;
  rank: string;
  bio: string;
  advice?: string;
  funFact?: string;
}

function InstructorCard({ name, rank, bio, advice, funFact }: InstructorCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 flex flex-col h-full min-h-[500px]">
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-bebas text-xl tracking-wide text-white mb-1">{name}</h3>
        <p className="text-white/60 font-semibold text-sm">{rank}</p>
      </div>

      {/* Bio - takes up available space */}
      <div className="text-white/80 text-sm leading-relaxed mb-4 flex-grow">
        {bio.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-3 last:mb-0">{paragraph}</p>
        ))}
      </div>

      {/* Bottom section - fun fact and advice */}
      <div className="mt-auto">
        {funFact && (
          <div className="mb-4 text-white/70 italic text-sm">
            <span className="font-semibold">Fun fact:</span> {funFact}
          </div>
        )}

        {advice && (
          <div className="border-t border-white/20 pt-4">
            <p className="font-semibold text-white text-sm mb-2">Advice for Beginners:</p>
            <p className="text-white/70 text-sm italic">&quot;{advice}&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function InstructorsPage() {
  const instructors = [
    {
      name: "Josh Griffiths",
      rank: "4th Degree Black Belt • Head Instructor",
      bio: `Josh is a 4th degree black belt who started training Jiu Jitsu at 21 while studying computer and electrical engineering at Stevens Institute of Technology. Originally from San Diego, he moved to the East Coast as a teenager and eventually built Clockwork Jiu Jitsu into the community it is today.

Josh has won dozens of tournaments, including becoming a Pan American Champion and a three-time North American Abu Dhabi Pro Qualifier. His favorite thing to teach is how to feel heavy and properly distribute weight—a skill that doesn't rely on athleticism but can completely change someone's Jiu Jitsu.

What Josh enjoys most about teaching is the people. He feels lucky to meet so many amazing students through Clockwork. His teaching style is best described as fun, technical, and honest.`,
      funFact: "Josh once scored a perfect score on the math SAT.",
      advice: "Start and don't stop."
    },
    {
      name: "Raymundo \"Ray\" Gonzalez",
      rank: "Black Belt",
      bio: `Ray is a black belt under Josh Griffiths and has been training Jiu Jitsu since he was 19, while studying nursing at NYU. He's practiced martial arts since childhood, but Jiu Jitsu has had the biggest impact on his life.

His favorite move to teach is the bump and roll escape from mount—a simple, effective technique that gives beginners confidence right away. Ray has been teaching adults and kids for over 8 years, and says his proudest moments are watching his students grow on and off the mats.

Ray loves the community at Clockwork, where he's built lifelong friendships. Outside of training, he's a big Warhammer 40K fan and has been collecting and playing since he was 14.`,
      advice: "Come to the next class."
    },
    {
      name: "Victor Hugo (Vic / Vicky)",
      rank: "Brown Belt",
      bio: `Victor grew up in New York City by way of Philadelphia and first dipped his toes into Brazilian Jiu Jitsu a few times when he was younger. He began training seriously with Josh at Clockwork BJJ and has been a dedicated student of the art ever since.

As a brown belt, Victor emphasizes strong fundamentals, positional awareness, and freedom of movement—helping students understand that advanced techniques become easier when the basics are rock solid. Outside of Jiu Jitsu, Victor has launched his own private practice that blends bodywork, movement, and martial arts, furthering his passion for human performance.

At Clockwork, he values the relationships built through training and teaching, and his style is best described as concise, fluid, dynamic, and no-nonsense. Students might be surprised to learn that in his early 20s, Victor was a party DJ.`,
      advice: "Focus on fundamentals and foundation techniques—don't chase shiny objects early on. A solid base will make your practice powerful and beautiful."
    },
    {
      name: "Anthony Grajales",
      rank: "Brown Belt",
      bio: `Anthony is a brown belt under Josh Griffiths and has been training at Clockwork Jiu Jitsu since 2016. He grew up in Washington Heights and Staten Island, and started BJJ with no grappling experience—just a lot of curiosity and energy.

Since then, Anthony has competed in over a hundred tournaments, winning American Nationals at purple belt and both the European Championships and Pan Ams at brown belt. He especially loves teaching back control offense and defense, and his classes are known for being playful, focused, and easy to follow.

What Anthony enjoys most about teaching at Clockwork is the friendly, fun, and supportive culture, while still offering tough training for anyone who wants to push themselves. Fun fact: outside of Jiu Jitsu, Anthony is also a Registered Nurse.`,
      advice: "Stay healthy, stay consistent, and most of all—have fun."
    },
    {
      name: "Shai",
      rank: "Brown Belt",
      bio: `Shai started training at Clockwork BJJ back in 2008 when his dad first brought him in for a class. He was instantly hooked and has been on the mats ever since. Now a brown belt under Sensei Josh Griffiths, Shai loves teaching positions like the split squat and knee cut pass, and he brings a patient, precise, and creative approach to every class.

You'll often find him running Clockwork's UGS (game-based) classes, helping students explore different scenarios and figure out their own paths to success. For Shai, the best part of teaching is watching students grow, improve, and have fun along the way.

Fun fact: He's a big fan of crime movies and director Michael Mann.`,
      advice: "Don't stress about the belt. Just focus on training, learning, and enjoying the process — the rest will come."
    },
    {
      name: "Anthony Thomas Giordano",
      rank: "Brown Belt",
      bio: `Anthony is a brown belt under Josh Griffiths who started training Jiu Jitsu in 2015 after finishing his wrestling career.

He enjoys teaching closed guard and modern guard variations like DLR, waiter guard, and K guard. As a competitor, Anthony is an American National medalist and a multiple-time IBJJF Open champion and medalist.

At Clockwork, he loves sharing Jiu Jitsu with all kinds of people and making a positive impact on the kids in the youth program. Outside of training, Anthony enjoys reading, learning to surf, and playing Magic: The Gathering.`,
      advice: "Get a notebook and be a student."
    },
    {
      name: "Ashley \"SmAshley\" Bembry-Kaintuck",
      rank: "Purple Belt",
      bio: `Ashley is a purple belt under Josh Griffiths who started training Jiu Jitsu in 2019 while still competing in bodybuilding. What started as a fun way to add cardio quickly turned into a passion, and she's been on the mats ever since.

Her favorite technique to teach is the back take from mount, and she especially enjoys working with women new to the sport. Seeing white belts gain confidence and fall in love with Jiu Jitsu is one of the most rewarding parts of teaching for her.

Ashley's teaching style is fun, chill, and digestible. Outside the gym, students might be surprised to learn she's a big fan of afternoon tea—tiny sandwiches, desserts, and all.`,
      advice: "Don't be afraid to ask questions, and try mixed belt classes even if they feel intimidating."
    },
    {
      name: "Esther Kohl",
      rank: "Blue Belt",
      bio: `Esther started training at Clockwork Jiu Jitsu in August 2022 while finishing college. Originally from LA, she moved to New York in 2019 and found Clockwork just a block from her apartment. What began as a way to feel safer and more confident quickly turned into a passion—she was hooked from her very first class.

Now a blue belt under Josh Griffiths, Esther especially enjoys teaching triangle chokes, a submission she loves for its versatility and precision. She describes her teaching style as gentle, encouraging, and detail-oriented, always focused on helping students understand the small steps that make Jiu Jitsu work.

For Esther, the best part of Clockwork is the community, which she describes as family. She's grateful for the trust, support, and friendships she's built on the mats.

Outside of Jiu Jitsu, Esther is also the frontwoman of her own band, playing shows around the city. Her advice to new students? Trust your instincts, tap early, take care of yourself and your training partners—and don't forget to stretch!`,
      advice: "Trust your instincts, tap early, take care of yourself and your training partners—and don't forget to stretch!"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
            {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
        {/* Hero Background Image */}
        <Image
          src="/images/josh.webp"
          alt="Clockwork BJJ Instructors"
          fill
          priority
          className="object-cover object-center"
          style={{ objectPosition: 'center 15%' }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wider text-center">
            OUR INSTRUCTORS
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-white/80 text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
            Meet the dedicated team of black, brown, purple, and blue belts who bring passion, 
            expertise, and years of experience to every class at Clockwork Jiu Jitsu.
          </p>
          <p className="text-white/80 text-lg max-w-4xl mx-auto leading-relaxed">
            Our instructors are more than just teachers—they&apos;re mentors, training partners, and members 
            of the Clockwork family. Each brings their own unique perspective, teaching style, and expertise 
            to help you grow both on and off the mats.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {instructors.map((instructor, index) => (
            <InstructorCard
              key={index}
              name={instructor.name}
              rank={instructor.rank}
              bio={instructor.bio}
              advice={instructor.advice}
              funFact={instructor.funFact}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 border border-white/10 rounded-lg p-12">
            <h2 className="font-bebas text-3xl tracking-wide text-white mb-6">
              READY TO TRAIN WITH OUR TEAM?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
              Our instructors are excited to welcome new students and help you begin your Brazilian Jiu Jitsu journey. 
              Whether you&apos;re a complete beginner or have some experience, we&apos;ll meet you where you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold tracking-wide hover:bg-white/90 transition-colors"
              >
                BOOK YOUR FREE TRIAL
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-colors"
              >
                VIEW CLASS SCHEDULE
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
