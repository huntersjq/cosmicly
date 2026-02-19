import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeaturesLines } from "@/components/sections/FeaturesLines";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PricingCTA } from "@/components/sections/PricingCTA";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <FeaturesLines />
      <PricingCTA />
      <Footer />
    </main>
  );
}
