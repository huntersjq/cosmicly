"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AstrologerCard } from "@/components/dashboard/AstrologerCard";
import { AstrologerDetailView } from "@/components/dashboard/AstrologerDetailView";
import { ASTROLOGERS } from "@/lib/mock-data";

export function ChatsContent() {
  const [selectedAstrologer, setSelectedAstrologer] = useState<
    (typeof ASTROLOGERS)[0] | null
  >(null);

  if (selectedAstrologer) {
    return (
      <DashboardLayout>
        <AstrologerDetailView
          {...selectedAstrologer}
          onBack={() => setSelectedAstrologer(null)}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {ASTROLOGERS.map((astrologer) => (
          <div
            key={astrologer.name}
            onClick={() => setSelectedAstrologer(astrologer)}
            className="cursor-pointer"
          >
            <AstrologerCard {...astrologer} />
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
