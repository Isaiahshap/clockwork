import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Clockwork Jiu Jitsu",
  description: "Terms of Service for Clockwork Jiu Jitsu. Important legal information about using our services and facilities.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
