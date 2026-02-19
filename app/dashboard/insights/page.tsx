import { InsightsContent } from "@/components/dashboard/InsightsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmic Insights",
  description:
    "Explore your soulmate sketches, natal reports, and personalized cosmic guides.",
};

export default function InsightsPage() {
  return <InsightsContent />;
}
