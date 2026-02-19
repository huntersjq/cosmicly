"use client";

import { useState } from "react";
import {
  ChevronLeft,
  Lock,
  Star,
  Zap,
  Shield,
  Navigation,
  Activity,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentModal } from "./PaymentModal";
import { useI18n } from "@/components/i18n-provider";

interface NatalChartReportProps {
  onBack: () => void;
}

export function NatalChartReport({ onBack }: NatalChartReportProps) {
  const { t } = useI18n();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title={t("payment.title")}
      />
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-bold group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        {t("common.back")}
      </button>

      <div className="space-y-12">
        {/* Report Hero */}
        <div className="bg-card rounded-[40px] p-10 md:p-16 border border-border shadow-xl text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -ml-32 -mb-32" />

          <div className="relative space-y-4">
            <h1 className="text-5xl font-black text-foreground tracking-tight">
              {t("natal.title")}
            </h1>
            <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto">
              {t("natal.subtitle")}
            </p>
          </div>

          <div className="relative flex flex-wrap gap-4 justify-center">
            <div className="bg-primary/10 text-primary px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
              <Star className="w-4 h-4 fill-primary" />
              {t("insights.personalized")}
            </div>
          </div>
        </div>

        {/* Key Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-[32px] p-8 border border-border shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Navigation className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-xl font-black text-foreground">
                {t("natal.planet")}
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Sun", sign: "Leo", house: "10th" },
                { label: "Moon", sign: "Scorpio", house: "1st" },
                { label: "Rising", sign: "Libra", house: "1st" },
              ].map((p) => (
                <div
                  key={p.label}
                  className="flex justify-between items-center border-b border-border/50 pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-bold text-muted-foreground">
                    {p.label}
                  </span>
                  <span className="font-black text-foreground">
                    {p.sign} · {p.house}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-[32px] p-8 border border-border shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="text-xl font-black text-foreground">
                {t("natal.aspect")}
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Mercury Trine Jupiter", type: "Harmony" },
                { label: "Venus Square Saturn", type: "Challenge" },
                { label: "Mars Sextile Pluto", type: "Power" },
              ].map((a) => (
                <div
                  key={a.label}
                  className="flex justify-between items-center border-b border-border/50 pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-bold text-muted-foreground">
                    {a.label}
                  </span>
                  <span className="text-[10px] font-black uppercase px-2 py-1 bg-muted rounded-md text-muted-foreground">
                    {a.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Insights Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <h2 className="text-2xl font-black text-foreground uppercase tracking-widest">
              {t("insights.reports")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Identity", icon: User, color: "text-blue-500" },
              { label: "Mission", icon: Zap, color: "text-yellow-500" },
              { label: "Protection", icon: Shield, color: "text-green-500" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-[32px] border border-border hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 bg-muted rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-lg font-black text-foreground mb-1">
                  {item.label}
                </h4>
                <p className="text-sm text-muted-foreground font-medium">
                  Deep analysis of your cosmic {item.label.toLowerCase()}{" "}
                  profile.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Locked Premium Insights */}
        <div className="relative group overflow-hidden bg-muted/50 dark:bg-primary/10 rounded-[40px] p-12 text-center text-foreground border border-border dark:border-primary/20 shadow-lg mt-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-card rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-black italic">
              {t("natal.premiumTitle")}
            </h3>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto font-medium">
              {t("natal.premiumDesc")}
            </p>
            <Button
              onClick={() => setIsPaymentModalOpen(true)}
              className="h-16 px-12 rounded-[24px] bg-primary text-primary-foreground font-black text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
            >
              {t("natal.unlockBtn")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
