import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Clockwork Jiu Jitsu",
  description: "Privacy policy for Clockwork Jiu Jitsu. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
