import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Clockwork Jiu Jitsu",
  description: "Our commitment to digital accessibility and information about accessibility features on our website.",
};

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
