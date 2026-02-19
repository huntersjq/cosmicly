"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { InsightCard } from "@/components/dashboard/InsightCard";
import { BirthDetailModal } from "@/components/dashboard/BirthDetailModal";
import { NatalChartReport } from "@/components/dashboard/NatalChartReport";
import { SoulmateSketchForm } from "@/components/dashboard/SoulmateSketchForm";
import { FutureBabySketchForm } from "@/components/dashboard/FutureBabySketchForm";
import { INSIGHTS } from "@/lib/mock-data";

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
    } else if (selectedInsight === "Future Baby Sketch") {
      setView("baby_sketch");
    } else {
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

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">
            Your Personal Insights
          </h1>
          <p className="text-zinc-500 text-lg font-medium">
            Deep cosmic reports tailored to your birth chart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {INSIGHTS.map((insight) => (
            <div
              key={insight.title}
              onClick={() => handleCardClick(insight.title)}
              className="cursor-pointer group"
            >
              <InsightCard {...insight} />
            </div>
          ))}
        </div>
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
