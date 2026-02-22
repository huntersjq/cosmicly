"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ArrowRight,
  Heart,
  Sparkles,
  User,
  Calendar,
  Globe,
  Lock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentModal } from "./PaymentModal";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useI18n } from "@/components/i18n-provider";

interface SoulmateSketchFormProps {
  onBack: () => void;
}

export function SoulmateSketchForm({ onBack }: SoulmateSketchFormProps) {
  const { t } = useI18n();
  const [step, setStep] = useState<"quiz" | "drawing">("quiz");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pt-8 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
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

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <div className="bg-card p-6 rounded-[24px] border border-border shadow-sm flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 aspect-square rounded-xl overflow-hidden bg-muted relative shrink-0">
              {/* Sketch Image Simulation */}
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                alt="Soulmate Sketch"
                className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
              <div className="space-y-4">
                <h1 className="text-2xl font-bold text-foreground">
                  Welcome to Your Soulmate Story, Justin
                </h1>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Inside, you'll discover a beautifully crafted sketch of your
                  soulmate, along with a captivating story of where and how
                  you'll meet.
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  This exciting journey into your romantic future is closely
                  tied to your personal astrology. Your Star Sign reveals your
                  outward personality and charisma, while your Venus Sign
                  uncovers your deepest desires in love, hidden talents, and the
                  key to finding your perfect match.
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Get ready to uncover the magical details of your soulmate
                  connection and the love story that awaits.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                <Button className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-bold text-[15px] hover:bg-primary/90 transition-all">
                  Rate your sketch
                </Button>
                <div className="text-right">
                  <span className="text-xs text-primary cursor-pointer hover:underline">
                    Report a problem
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Locked Premium Previews */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground px-2">
              What's Inside Your Full Report
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Physical Traits",
                  desc: "Eye color, height, and distinct features.",
                  icon: User,
                  color: "text-blue-500",
                  bg: "bg-blue-500/10",
                },
                {
                  title: "Personality",
                  desc: "Their temperament, quirks, and communication style.",
                  icon: Sparkles,
                  color: "text-purple-500",
                  bg: "bg-purple-500/10",
                },
                {
                  title: "Meeting Place",
                  desc: "Where and when your paths will finally cross.",
                  icon: Calendar,
                  color: "text-green-500",
                  bg: "bg-green-500/10",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card p-6 rounded-[24px] border border-border shadow-sm relative overflow-hidden group cursor-pointer"
                  onClick={() => setIsPaymentModalOpen(true)}
                >
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Lock className="w-6 h-6 text-foreground mb-2" />
                    <span className="text-sm font-bold">Unlock</span>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.bg}`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-foreground text-[15px] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-card p-8 rounded-[24px] border border-border shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" /> Success
              Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Sarah J.",
                  text: "I was skeptical at first, but the sketch looked exactly like the man I met at a coffee shop three weeks later! It's spooky how accurate the personality description was.",
                },
                {
                  name: "Michael T.",
                  text: "The details about her career and where we would meet were spot on. We celebrated our one year anniversary yesterday. Worth every penny.",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-muted/30 p-4 rounded-xl space-y-2 border border-border/50"
                >
                  <div className="flex text-yellow-500 pb-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-[13px] font-bold text-foreground">
                    — {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 rounded-[24px] border border-border shadow-sm flex flex-col space-y-6 relative overflow-hidden">
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <h2 className="text-xl font-bold text-foreground">
                Final Offer: Unlock the Full Soulmate Report for{" "}
                <span className="text-purple-500">Only S$5.99</span>
              </h2>
              <div className="px-3 py-1 bg-green-500/10 text-green-500 text-sm font-bold rounded-md whitespace-nowrap">
                Exclusive Offer: 05:09:42
              </div>
            </div>

            <p className="text-muted-foreground text-[15px] leading-relaxed">
              You've seen the sketch — now it's time to reveal everything. Get
              your soulmate's{" "}
              <span className="font-bold text-foreground">
                initials, zodiac sign, personality, spiritual energy, career
                path
              </span>{" "}
              and{" "}
              <span className="font-bold text-foreground">
                the moment you'll meet
              </span>{" "}
              — all in one complete bundle.
            </p>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Normally <span className="font-bold line-through">S$18.95</span>.
              This{" "}
              <span className="font-bold text-foreground">one-time offer</span>{" "}
              is available for the next 24 hours only.
            </p>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Don't miss your chance to complete your story.
            </p>

            <div className="flex items-center gap-4 flex-wrap pt-2">
              <Button
                onClick={() => setIsPaymentModalOpen(true)}
                className="h-12 px-8 rounded-lg bg-primary text-primary-foreground font-bold text-[15px] hover:bg-primary/90 transition-all"
              >
                Unlock Full Soulmate Report
              </Button>
              <span className="text-sm font-semibold text-muted-foreground">
                Price: <span className="text-purple-500">S$5.99</span>{" "}
                <span className="line-through opacity-50">S$18.95</span>
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-[320px] xl:w-[380px] flex-shrink-0 space-y-6">
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  Chat with Astrologer
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed pr-2">
                  Get insights into your compatibility with your personal
                  Astrologer
                </p>
              </div>
              <div className="w-20 h-20 shrink-0 opacity-50 dark:opacity-20 pointer-events-none -mt-2 -mr-2">
                {/* Simplified astrologer decoration icon */}
                <Globe className="w-full h-full text-primary" />
              </div>
            </div>
            <Button className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-bold text-[15px] hover:bg-primary/90 transition-all flex gap-2">
              <User className="w-4 h-4" /> Astrologers
            </Button>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Invite Your Friend!
            </h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Curious about your friend's Soulmate? Share this link with a
              friend and compare your drawings!
            </p>
            <Button className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-bold text-[15px] hover:bg-primary/90 transition-all mt-4">
              Copy Link
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
