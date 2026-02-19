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

interface SoulmateSketchFormProps {
  onBack: () => void;
}

export function SoulmateSketchForm({ onBack }: SoulmateSketchFormProps) {
  const [step, setStep] = useState<"quiz" | "drawing">("quiz");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  if (step === "drawing") {
    return (
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-700 pb-20">
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
        />
        <div className="text-center space-y-6">
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 border-8 border-primary/10 rounded-full animate-spin border-t-primary" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Heart className="w-16 h-16 text-primary animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl font-black text-foreground tracking-tight italic">
            Drawing your Soulmate...
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Our master artists are channeling your spiritual energy into a
            physical manifestation. This process takes 24 hours.
          </p>
          <div className="pt-4">
            <Button
              onClick={() => setIsPaymentModalOpen(true)}
              className="h-20 px-12 rounded-[28px] bg-primary text-primary-foreground font-black text-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
            >
              Speed Up My Drawing!
            </Button>
          </div>
        </div>

        {/* Status Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              label: "Status",
              value: "In Progress",
              icon: <Sparkles className="text-blue-500" />,
            },
            {
              label: "Completion",
              value: "23h 59m left",
              icon: <Calendar className="text-purple-500" />,
            },
            {
              label: "Artist",
              value: "Cosmic Master",
              icon: <User className="text-rose-500" />,
            },
            {
              label: "Method",
              value: "Aura Projection",
              icon: <Globe className="text-green-500" />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-3xl border border-border shadow-sm flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center text-xl">
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">
                  {stat.label}
                </p>
                <p className="text-xl font-black text-foreground">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Locked Premium Insights */}
        <div className="space-y-6 pt-12">
          <h2 className="text-2xl font-black text-foreground">
            Unlock Hidden Details
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "First & Last Initials",
                price: "$9.99",
                desc: "Know the specific names that will change your life.",
              },
              {
                title: "Occupation & Wealth",
                price: "$12.99",
                desc: "Discover how they spend their days and their career path.",
              },
              {
                title: "Zodiac Match Percentage",
                price: "$7.99",
                desc: "See your deep compatibility and fatal attraction score.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-muted/50 dark:bg-primary/10 text-foreground p-8 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 group hover:scale-[1.02] transition-transform cursor-pointer overflow-hidden relative border border-border dark:border-primary/20 shadow-lg"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 dark:opacity-20">
                  <Lock className="w-24 h-24 text-foreground dark:text-primary" />
                </div>
                <div className="space-y-2 relative z-10 text-center md:text-left">
                  <h3 className="text-2xl font-black italic">{item.title}</h3>
                  <p className="text-muted-foreground max-w-sm">{item.desc}</p>
                </div>
                <Button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-black text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 relative z-10 w-full md:w-auto"
                >
                  Unlock for {item.price}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-bold group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Insights
      </button>

      <div className="bg-card rounded-[40px] shadow-sm border border-border p-8 md:p-12 space-y-10">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Heart className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-black tracking-tight text-foreground">
            Reveal Your Soulmate
          </h1>
          <p className="text-muted-foreground text-lg">
            Answer these sacred questions to help our artists identify your
            divine counterpart.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
              Soulmate's Gender
            </Label>
            <Select>
              <SelectTrigger className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-border shadow-xl">
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="non-binary">Non-binary</SelectItem>
                <SelectItem value="no-preference">No preference</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
              Ethnic Preference (Optional)
            </Label>
            <Select>
              <SelectTrigger className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground">
                <SelectValue placeholder="No preference" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-border shadow-xl">
                <SelectItem value="no-preference">No preference</SelectItem>
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="black">Black / African</SelectItem>
                <SelectItem value="white">White / Caucasian</SelectItem>
                <SelectItem value="latino">Latino / Hispanic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
              Relationship Status
            </Label>
            <Select>
              <SelectTrigger className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-border shadow-xl">
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="complicated">It's complicated</SelectItem>
                <SelectItem value="seeking">Seeking clarity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={() => setStep("drawing")}
            className="w-full h-20 rounded-[28px] bg-primary text-primary-foreground font-black text-2xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 group mt-4 overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Start My Drawing{" "}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Button>
        </div>
      </div>

      <div className="text-center p-8">
        <p className="text-muted-foreground font-bold flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" /> Trusted by 500,000+ souls worldwide
        </p>
      </div>
    </div>
  );
}
