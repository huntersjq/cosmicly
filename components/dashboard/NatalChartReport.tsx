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
  const [activeTab, setActiveTab] = useState<"sign" | "house">("sign");

  return (
    <div className="max-w-4xl mx-auto space-y-6 pt-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title={t("payment.title")}
      />
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-foreground font-black text-lg transition-colors group mb-4 w-fit hover:opacity-80"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        Back to Insights
      </button>

      {/* Intro Card */}
      <div className="bg-card rounded-[24px] border border-border shadow-sm p-8 space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-full md:w-1/2 aspect-square relative rounded-full border border-border flex items-center justify-center shrink-0">
            {/* Mock Natal Chart Image */}
            <div className="absolute inset-4 rounded-full border border-primary/20 bg-muted/30" />
            <div className="absolute inset-8 rounded-full border border-primary/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Star className="w-8 h-8 text-primary/50" />
            </div>
            {/* Radials */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{ transform: `rotate(${i * 30}deg)` }}
              >
                <div className="w-[1px] h-1/2 mx-auto bg-primary/20" />
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold text-foreground leading-tight">
              Welcome to your cosmic blueprint, Justin
            </h1>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Your natal chart is a snapshot of the sky at the exact moment you
              were born, revealing the deeper layers of your personality,
              potential, and life path. This comprehensive report decodes the
              positions of planets and their meanings, helping you understand
              your strengths, challenges, and the unique gifts you bring to the
              world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Personal Details */}
          <div className="bg-muted/30 rounded-xl p-6 space-y-4 border border-border/50">
            <h3 className="text-sm font-bold text-foreground">
              Personal Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">Name</span>
                <span className="font-bold">Justin</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">Date of Birth</span>
                <span className="font-bold">1984.24.01</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">Time of Birth</span>
                <span className="font-bold">09:57</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">Place of Birth</span>
                <span className="font-bold">China</span>
              </div>
            </div>
          </div>

          {/* Astrological Details */}
          <div className="bg-muted/30 rounded-xl p-6 space-y-4 border border-border/50">
            <h3 className="text-sm font-bold text-foreground">
              Astrological Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">Rising Sign</span>
                <span className="font-bold text-primary flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Pisces (339°40')
                </span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">Sun Sign</span>
                <span className="font-bold text-blue-500 flex items-center gap-1">
                  <Star className="w-3 h-3" /> Aquarius (303°15')
                </span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">Moon Sign</span>
                <span className="font-bold text-purple-500 flex items-center gap-1">
                  <Activity className="w-3 h-3" /> Libra (198°57')
                </span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">House System</span>
                <span className="font-bold">Placidus</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex p-1 bg-card rounded-full border border-border shadow-sm mx-auto max-w-sm">
        <button
          onClick={() => setActiveTab("sign")}
          className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === "sign" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
        >
          Sign
        </button>
        <button
          onClick={() => setActiveTab("house")}
          className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === "house" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
        >
          House
        </button>
      </div>

      {/* Planet Positions Banner */}
      <div className="bg-card rounded-[24px] border border-border shadow-sm p-4 flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-colors relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500" />
        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0 ml-2">
          <Navigation className="w-6 h-6 text-blue-500" />
        </div>
        <div className="flex-1 space-y-0.5">
          <h4 className="text-[15px] font-bold text-blue-500 uppercase">
            PLANET POSITIONS
          </h4>
          <p className="text-sm text-foreground font-medium">
            Exact positions of all the planets at your birth
          </p>
        </div>
        <ChevronLeft className="w-5 h-5 text-muted-foreground rotate-180 shrink-0" />
      </div>

      {/* Description Card */}
      <div className="bg-card rounded-[24px] border border-border shadow-sm p-6 space-y-2">
        <h3 className="font-bold text-foreground">
          {activeTab === "sign" ? "Your Sign Report" : "Your House Report"}
        </h3>
        <p className="text-muted-foreground text-[14px] leading-relaxed">
          {activeTab === "sign"
            ? "Your planets in signs reveal how your energy moves through life. These are your style, voice, and natural tendencies. Curious why you think the way you do, love the way you love, or shine the way you shine? Open each planet to see the flavor its sign gives and the strengths it brings forward."
            : "Your astrological houses represent the areas of life where your planetary energy plays out. The 12 houses rule different parts of your world, from identity and income to soulmates and spirituality. See which houses are packed with planets for major themes in your life."}
        </p>
      </div>

      {/* Insight Section: Core Self */}
      {activeTab === "sign" ? (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-bold text-foreground text-lg">
                How Your Core Self Expresses
              </h3>
              <p className="text-muted-foreground text-sm">
                How you shine, feel, and are first seen.
              </p>
            </div>
            <div className="bg-card rounded-[24px] border border-border shadow-sm overflow-hidden divide-y divide-border">
              {[
                {
                  title: "SUN SIGN",
                  subtitle: "Your core energy and purpose",
                  color: "bg-yellow-500/10",
                  textColor: "text-yellow-500",
                },
                {
                  title: "MOON SIGN",
                  subtitle: "Your emotional nature and inner world",
                  color: "bg-blue-300/10",
                  textColor: "text-blue-400",
                },
                {
                  title: "RISING SIGN",
                  subtitle: "Your outward personality and first impressions",
                  color: "bg-teal-500/10",
                  textColor: "text-teal-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-4 flex items-center gap-4 cursor-pointer hover:bg-muted/30 transition-colors ${i === 0 ? "bg-yellow-500/5" : ""}`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.color}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full opacity-50 bg-current ${item.textColor}`}
                    />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className={`text-[13px] font-bold ${item.textColor}`}>
                      {item.title}
                    </h4>
                    <p className="text-[15px] text-foreground font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-muted-foreground -rotate-90 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {activeTab === "sign" ? (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Insight Section: Personal Planets */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-bold text-foreground text-lg">
                How You Think, Love, and Act
              </h3>
              <p className="text-muted-foreground text-sm">
                The inner planets that shape your daily life and relationships.
              </p>
            </div>
            <div className="bg-card rounded-[24px] border border-border shadow-sm overflow-hidden divide-y divide-border relative">
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card to-transparent pointer-events-none z-10 hidden" />
              {[
                {
                  title: "MERCURY SIGN",
                  subtitle: "How you communicate and process information",
                  color: "bg-orange-500/10",
                  textColor: "text-orange-500",
                },
                {
                  title: "VENUS SIGN",
                  subtitle: "How you love, relate, and what you value",
                  color: "bg-pink-500/10",
                  textColor: "text-pink-500",
                },
                {
                  title: "MARS SIGN",
                  subtitle: "How you assert yourself and take action",
                  color: "bg-red-500/10",
                  textColor: "text-red-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 flex items-center gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.color}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full opacity-50 bg-current ${item.textColor}`}
                    />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className={`text-[13px] font-bold ${item.textColor}`}>
                      {item.title}
                    </h4>
                    <p className="text-[15px] text-foreground font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-muted-foreground -rotate-90 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {activeTab === "sign" ? (
        <div className="space-y-4 relative group">
          <div className="space-y-1 opacity-60">
            <h3 className="font-bold text-foreground text-lg">
              Your Higher Purpose & Generational Shifts
            </h3>
            <p className="text-muted-foreground text-sm">
              The social and outer planets that define your greater journey.
            </p>
          </div>

          <div className="bg-card rounded-[24px] border border-border shadow-sm overflow-hidden divide-y divide-border relative">
            <div className="absolute inset-0 bg-background/40 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">
                Unlock Your Full Astrological Profile
              </h4>
              <p className="text-muted-foreground text-[15px] max-w-sm mb-6">
                Discover your Jupiter sign (luck), Saturn sign (lessons), and
                your deepest generational transformations.
              </p>
              <Button
                onClick={() => setIsPaymentModalOpen(true)}
                className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-bold text-[15px] hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
              >
                Unlock Full Report
              </Button>
            </div>
            <div className="opacity-30 pointer-events-none">
              {[
                {
                  title: "JUPITER SIGN",
                  subtitle: "Where you find luck, growth, and expansion",
                  color: "bg-purple-500/10",
                  textColor: "text-purple-500",
                },
                {
                  title: "SATURN SIGN",
                  subtitle: "Where you face lessons, limits, and mastery",
                  color: "bg-slate-500/10",
                  textColor: "text-slate-500",
                },
                {
                  title: "URANUS SIGN",
                  subtitle: "How you approach innovation and rebellion",
                  color: "bg-cyan-500/10",
                  textColor: "text-cyan-500",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.color}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full opacity-50 bg-current ${item.textColor}`}
                    />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <h4 className={`text-[13px] font-bold ${item.textColor}`}>
                      {item.title}
                    </h4>
                    <p className="text-[15px] text-foreground font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-muted-foreground -rotate-90 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* House Insight Section: Foundations for Life */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-bold text-foreground text-lg">
                Foundations for Life
              </h3>
              <p className="text-muted-foreground text-sm">
                Identity, values, mind, and home.
              </p>
            </div>
            <div className="bg-card rounded-[24px] border border-border shadow-sm overflow-hidden divide-y divide-border">
              {[
                {
                  title: "1ST HOUSE",
                  subtitle: "Self, appearance, and new beginnings",
                  color: "bg-teal-500/10",
                  textColor: "text-teal-500",
                },
                {
                  title: "2ND HOUSE",
                  subtitle: "Money, material possessions, and self-worth",
                  color: "bg-emerald-500/10",
                  textColor: "text-emerald-500",
                },
                {
                  title: "3RD HOUSE",
                  subtitle: "Communication, intellect, and siblings",
                  color: "bg-indigo-500/10",
                  textColor: "text-indigo-500",
                },
                {
                  title: "4TH HOUSE",
                  subtitle: "Home, family, and emotional foundations",
                  color: "bg-rose-500/10",
                  textColor: "text-rose-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 flex items-center gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
                >
                  <div className="min-w-[48px] h-12 rounded-xl flex items-center justify-center shrink-0 bg-muted font-bold text-muted-foreground text-lg uppercase">
                    {item.title.split(" ")[0]}
                  </div>
                  <div className="flex-1 space-y-0.5 ml-2">
                    <h4 className={`text-[13px] font-bold ${item.textColor}`}>
                      {item.title}
                    </h4>
                    <p className="text-[15px] text-foreground font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-muted-foreground -rotate-90 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* House Insight Section: Evolution & Connections */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-bold text-foreground text-lg">
                Evolution & Connections
              </h3>
              <p className="text-muted-foreground text-sm">
                Romance, habits, relationships, and transformation.
              </p>
            </div>
            <div className="bg-card rounded-[24px] border border-border shadow-sm overflow-hidden divide-y divide-border">
              {[
                {
                  title: "5TH HOUSE",
                  subtitle: "Creativity, romance, and joy",
                  color: "bg-amber-500/10",
                  textColor: "text-amber-500",
                },
                {
                  title: "6TH HOUSE",
                  subtitle: "Health, daily routines, and service",
                  color: "bg-lime-500/10",
                  textColor: "text-lime-500",
                },
                {
                  title: "7TH HOUSE",
                  subtitle: "Partnerships, marriage, and open enemies",
                  color: "bg-pink-500/10",
                  textColor: "text-pink-500",
                },
                {
                  title: "8TH HOUSE",
                  subtitle: "Transformation, shared resources, and intimacy",
                  color: "bg-purple-500/10",
                  textColor: "text-purple-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 flex items-center gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
                >
                  <div className="min-w-[48px] h-12 rounded-xl flex items-center justify-center shrink-0 bg-muted font-bold text-muted-foreground text-lg uppercase">
                    {item.title.split(" ")[0]}
                  </div>
                  <div className="flex-1 space-y-0.5 ml-2">
                    <h4 className={`text-[13px] font-bold ${item.textColor}`}>
                      {item.title}
                    </h4>
                    <p className="text-[15px] text-foreground font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-muted-foreground -rotate-90 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* House Insight Section: Higher Callings (Premium Tease) */}
          <div className="space-y-4 relative group">
            <div className="space-y-1 opacity-60">
              <h3 className="font-bold text-foreground text-lg">
                Higher Callings
              </h3>
              <p className="text-muted-foreground text-sm">
                Beliefs, career, community, and the unconscious mind.
              </p>
            </div>

            <div className="bg-card rounded-[24px] border border-border shadow-sm overflow-hidden divide-y divide-border relative">
              <div className="absolute inset-0 bg-background/40 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Unlock Your Full Astrological Profile
                </h4>
                <p className="text-muted-foreground text-[15px] max-w-sm mb-6">
                  Discover how the highest points in your chart influence your
                  career, public standing, and hidden spiritual depths.
                </p>
                <Button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-bold text-[15px] hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                >
                  Unlock Full Report
                </Button>
              </div>
              <div className="opacity-30 pointer-events-none">
                {[
                  {
                    title: "9TH HOUSE",
                    subtitle: "Philosophy, travel, and higher learning",
                    color: "bg-blue-500/10",
                    textColor: "text-blue-500",
                  },
                  {
                    title: "10TH HOUSE",
                    subtitle: "Career, public image, and achievements",
                    color: "bg-yellow-500/10",
                    textColor: "text-yellow-500",
                  },
                  {
                    title: "11TH HOUSE",
                    subtitle: "Friendships, groups, and aspirations",
                    color: "bg-violet-500/10",
                    textColor: "text-violet-500",
                  },
                  {
                    title: "12TH HOUSE",
                    subtitle: "Hidden matters, spirituality, and solitude",
                    color: "bg-slate-500/10",
                    textColor: "text-slate-500",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 flex items-center gap-4">
                    <div className="min-w-[48px] h-12 rounded-xl flex items-center justify-center shrink-0 bg-muted font-bold text-muted-foreground text-lg uppercase">
                      {item.title.split(" ")[0]}
                    </div>
                    <div className="flex-1 space-y-0.5 ml-2">
                      <h4 className={`text-[13px] font-bold ${item.textColor}`}>
                        {item.title}
                      </h4>
                      <p className="text-[15px] text-foreground font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                    <ChevronLeft className="w-5 h-5 text-muted-foreground -rotate-90 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center pt-8">
        <Button
          onClick={() => setIsPaymentModalOpen(true)}
          className="h-12 px-8 rounded-lg bg-primary text-primary-foreground font-bold text-[15px] hover:bg-primary/90 transition-all"
        >
          Unlock Full Chart
        </Button>
      </div>
    </div>
  );
}
