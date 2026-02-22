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
import { useI18n } from "@/components/i18n-provider";

type ViewState = "grid" | "natal_chart" | "soulmate_sketch" | "baby_sketch";

export function InsightsContent() {
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

  const { t } = useI18n();

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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 pb-20 pt-8">
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            {INSIGHTS.map((insight) => (
              <div
                key={insight.title}
                onClick={() => handleCardClick(insight.title)}
                className="cursor-pointer"
              >
                <InsightCard {...insight} />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-[320px] xl:w-[380px] flex-shrink-0">
          <div className="sticky top-24 bg-card p-8 rounded-2xl border border-border shadow-sm space-y-6">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  Test your
                  <br className="hidden xl:block" /> compatibility in love
                </h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                  Get insights on your relationships with friends, partners, and
                  crushes. Uncover needs and enhance bonds.
                </p>
              </div>
              <div className="w-20 h-20 shrink-0 relative flex items-center justify-center bg-muted/50 rounded-full">
                {/* Moon emoji as a placeholder for the illustration */}
                <span className="text-4xl relative z-10 hover:scale-110 transition-transform cursor-default">
                  🌙
                </span>
              </div>
            </div>

            <Button className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-bold text-[15px] hover:bg-primary/90 transition-all">
              Start Test
            </Button>
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
