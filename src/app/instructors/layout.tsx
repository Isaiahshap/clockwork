import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Instructors | Clockwork Jiu Jitsu",
  description: "Meet the experienced and passionate instructors at Clockwork Jiu Jitsu. Our team of black, brown, purple, and blue belts brings years of expertise to help you grow in Brazilian Jiu Jitsu.",
  keywords: "Brazilian Jiu Jitsu instructors, BJJ teachers NYC, martial arts instructors, Josh Griffiths, Clockwork BJJ team",
};

export default function InstructorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
