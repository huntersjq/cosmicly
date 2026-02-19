"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { InsightCard } from "@/components/dashboard/InsightCard";
import { BirthDetailModal } from "@/components/dashboard/BirthDetailModal";
import { NatalChartReport } from "@/components/dashboard/NatalChartReport";
import { SoulmateSketchForm } from "@/components/dashboard/SoulmateSketchForm";
import { FutureBabySketchForm } from "@/components/dashboard/FutureBabySketchForm";
import { INSIGHTS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

type ViewState = "grid" | "natal_chart" | "soulmate_sketch" | "baby_sketch";

export default function InsightsPage() {
  const [view, setView] = useState<ViewState>("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setSelectedInsight(title);
    setIsModalOpen(true);
  };

  const handleConfirmDetails = () => {
    setIsModalOpen(false);
    if (selectedInsight === "Natal Chart Report") {
      setView("natal_chart");
    } else if (selectedInsight === "Soulmate Sketch Reading") {
      setView("soulmate_sketch");
    } else if (selectedInsight === "Future Baby Sketch Reading") {
      setView("baby_sketch");
    } else {
      // For others, just mock a loading state or similar
      alert(`Generating ${selectedInsight}...`);
    }
  };

  if (view === "natal_chart") {
    return (
      <DashboardLayout>
        <NatalChartReport onBack={() => setView("grid")} />
      </DashboardLayout>
    );
  }

  if (view === "soulmate_sketch") {
    return (
      <DashboardLayout>
        <SoulmateSketchForm onBack={() => setView("grid")} />
      </DashboardLayout>
    );
  }

  if (view === "baby_sketch") {
    return (
      <DashboardLayout>
        <FutureBabySketchForm onBack={() => setView("grid")} />
      </DashboardLayout>
    );
  }

  const categories = ["Sketches", "Reports", "Guides"];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 pb-20">
        <div className="flex-1 space-y-16">
          <div className="space-y-4">
            <h1 className="text-5xl font-black text-zinc-900 tracking-tight">
              Insights
            </h1>
            <p className="text-zinc-500 text-xl font-medium max-w-2xl">
              Deep cosmic reports and hand-drawn sketches tailored to your
              unique astrological blueprint.
            </p>
          </div>

          <div className="space-y-20">
            {categories.map((category) => (
              <div key={category} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-primary rounded-full" />
                  <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-widest">
                    {category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {INSIGHTS.filter((i) => i.category === category).map(
                    (insight) => (
                      <div
                        key={insight.title}
                        onClick={() => handleCardClick(insight.title)}
                        className="cursor-pointer"
                      >
                        <InsightCard {...insight} />
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar / Top Right Section on Mobile */}
        <aside className="lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24 bg-white p-10 rounded-[40px] border-4 border-zinc-100 shadow-2xl space-y-8 overflow-hidden relative">
            {/* Decorative character illustration placeholder */}
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-zinc-900 leading-tight">
                  Test your compatibility in love
                </h3>
                <p className="text-zinc-500 text-lg font-medium leading-relaxed">
                  Get insights on your relationships with friends, partners, and
                  crushes. Uncover needs and enhance bonds.
                </p>
              </div>

              <div className="relative h-48 bg-zinc-50 rounded-[32px] overflow-hidden flex items-center justify-center p-6 border-2 border-dashed border-zinc-200 group cursor-pointer hover:border-primary transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1516589174184-c685266e4873?w=800&q=80"
                  alt="Compatibility"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="relative z-10 text-center space-y-2">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-4xl">🌙</span>
                  </div>
                  <p className="font-black text-zinc-900 group-hover:text-white transition-colors duration-500">
                    Interactive Test
                  </p>
                </div>
              </div>

              <Button className="w-full h-16 rounded-[24px] bg-primary text-white font-black text-xl hover:bg-primary/90 shadow-xl shadow-primary/20">
                Start Test
              </Button>
            </div>
          </div>
        </aside>
      </div>

      <BirthDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDetails}
        title="Confirm Your Birth Details"
      />
    </DashboardLayout>
  );
}
