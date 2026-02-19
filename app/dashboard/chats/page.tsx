import { ChatsContent } from "@/components/dashboard/ChatsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Astrologers",
  description:
    "Connect with expert astrologers for personal guidance and live cosmic insights.",
};

export default function ChatsPage() {
  return <ChatsContent />;
}
