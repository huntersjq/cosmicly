"use client";

import { useState } from "react";
import { User, Briefcase, Heart, MessageSquare, Star } from "lucide-react";
import { ReadingCard } from "./ReadingCard";
import { HOROSCOPE_DATA } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n-provider";

export function HoroscopeDashboard() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<"today" | "tomorrow" | "month">(
    "today",
  );

  const data = HOROSCOPE_DATA[activeTab];

  const tabs = [
    { key: "today", label: t("horoscope.daily") },
    { key: "tomorrow", label: t("horoscope.tomorrow") },
    { key: "month", label: t("horoscope.monthly") },
  ] as const;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
      {/* Main Content */}
      <div className="space-y-8">
        {/* Date Tabs */}
        <div className="bg-muted p-1.5 rounded-full flex w-full max-w-2xl border border-border">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 px-6 rounded-full text-base font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Readings */}
        <div className="space-y-6">
          <ReadingCard
            title={t("horoscope.personal")}
            content={data.personal}
            icon={User}
            iconColor="text-blue-500"
          />
          <ReadingCard
            title={t("horoscope.profession")}
            content={data.profession}
            icon={Briefcase}
            iconColor="text-cyan-500"
          />
          <ReadingCard
            title={t("horoscope.health")}
            content={data.health}
            icon={Heart}
            iconColor="text-rose-500"
          />
        </div>
      </div>

      {/* Sidebar Widgets */}
      <div className="space-y-6">
        {/* Chat Widget */}
        <div className="bg-card p-8 rounded-[24px] shadow-sm border border-border flex flex-col items-center text-center gap-6">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-2 border-2 border-primary/10 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Star className="w-12 h-12 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">
              {t("horoscope.chatTitle")}
            </h3>
            <p className="text-muted-foreground">{t("horoscope.chatDesc")}</p>
          </div>
          <Button className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all">
            <MessageSquare className="w-5 h-5 mr-3" />
            {t("horoscope.astrologers")}
          </Button>
        </div>

        {/* Compatibility Widget */}
        <div className="bg-card p-8 rounded-[24px] shadow-sm border border-border flex flex-col gap-6 overflow-hidden relative">
          <div className="space-y-2 relative z-10">
            <h3 className="text-2xl font-bold text-foreground">
              {t("horoscope.compatTitle")}
            </h3>
            <p className="text-muted-foreground">{t("horoscope.compatDesc")}</p>
          </div>
          <Button className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all relative z-10">
            {t("horoscope.startTest")}
          </Button>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10">
            <Heart className="w-full h-full text-rose-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
