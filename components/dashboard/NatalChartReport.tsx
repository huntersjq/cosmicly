"use client";

import { useState } from "react";
import {
  ChevronLeft,
  MessageSquare,
  Star,
  ArrowRight,
  Info,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentModal } from "./PaymentModal";

interface NatalChartReportProps {
  onBack: () => void;
}

export function NatalChartReport({ onBack }: NatalChartReportProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title="Unlock Full Cosmic Blueprint"
      />
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors font-bold group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Insights
      </button>

      {/* Hero Section */}
      <div className="bg-white rounded-[40px] shadow-sm border border-zinc-100 overflow-hidden">
        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="relative w-64 h-64 flex-shrink-0">
            {/* Simple SVG Birth Chart Wheel Mockup */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full transform -rotate-90"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#f4f4f5"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="#f4f4f5"
                strokeWidth="0.5"
              />
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 48 * Math.cos((i * 30 * Math.PI) / 180)}
                  y2={50 + 48 * Math.sin((i * 30 * Math.PI) / 180)}
                  stroke="#f4f4f5"
                  strokeWidth="0.5"
                />
              ))}
              {/* Fake Aspect Lines */}
              <line
                x1="20"
                y1="50"
                x2="80"
                y2="50"
                stroke="#f87171"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="50"
                y1="20"
                x2="50"
                y2="80"
                stroke="#60a5fa"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="30"
                y1="30"
                x2="70"
                y2="70"
                stroke="#fbbf24"
                strokeWidth="0.5"
                opacity="0.5"
              />
              {/* Planetary Icons Mock */}
              <circle cx="85" cy="50" r="2" fill="#ef4444" />
              <circle cx="15" cy="50" r="2" fill="#3b82f6" />
              <circle cx="50" cy="15" r="2" fill="#f59e0b" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-zinc-50 flex items-center justify-center">
                <span className="text-zinc-900 text-[10px] font-black italic">
                  HINT
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight">
              Welcome to your cosmic blueprint, Justin
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Your natal chart is a snapshot of the sky at the exact moment you
              were born, revealing the deeper layers of your personality,
              potential, and life path.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                <Star className="w-4 h-4 fill-blue-500" />
                Personalized Report
              </div>
              <div className="bg-zinc-100 text-zinc-600 px-4 py-2 rounded-full font-bold text-sm">
                Full Access
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-zinc-100 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
          <div className="p-8 space-y-4 bg-zinc-50/30">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
              Personal Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-zinc-400">Name</span>
                <span className="text-zinc-900">Justin</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-zinc-400">Date of Birth</span>
                <span className="text-zinc-900">1984.24.01</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-zinc-400">Time of Birth</span>
                <span className="text-zinc-900">09:57 AM</span>
              </div>
            </div>
          </div>
          <div className="p-8 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
              Astrological Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-zinc-400">Rising Sign</span>
                <span className="text-zinc-900 flex items-center gap-2">
                  ♓︎ Pisces{" "}
                  <span className="text-zinc-300 text-sm">(339°40')</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-zinc-400">Sun Sign</span>
                <span className="text-zinc-900 flex items-center gap-2">
                  ♒︎ Aquarius{" "}
                  <span className="text-zinc-300 text-sm">(303°15')</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-zinc-400">Moon Sign</span>
                <span className="text-zinc-900 flex items-center gap-2">
                  ♎︎ Libra{" "}
                  <span className="text-zinc-300 text-sm">(198°57')</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Report Section */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-zinc-900">
              Your Sign Report
            </h2>
            <p className="text-zinc-500 font-medium">
              Detailed breakdown of your planetary energies.
            </p>
          </div>
          <div className="flex items-center gap-2 p-1 bg-zinc-100 rounded-2xl w-fit">
            <button className="px-6 py-2 bg-white rounded-xl shadow-sm text-sm font-black text-zinc-900">
              Sign
            </button>
            <button className="px-6 py-2 rounded-xl text-sm font-black text-zinc-400">
              House
            </button>
          </div>
        </div>

        {/* Categorized Reports */}
        {[
          {
            title: "How Your Core Self Expresses",
            subtitle: "How you shine, feel, and are first seen.",
            items: [
              {
                label: "SUN SIGN",
                value: "Your core energy and purpose",
                icon: "☀️",
                color: "bg-yellow-400/10 text-yellow-700",
              },
              {
                label: "MOON SIGN",
                value: "Your emotional nature and inner world",
                icon: "🌙",
                color: "bg-blue-400/10 text-blue-700",
              },
              {
                label: "RISING SIGN",
                value: "Your outward personality and first impressions",
                icon: "🌅",
                color: "bg-green-400/10 text-green-700",
              },
            ],
          },
          {
            title: "How You Express And Act",
            subtitle: "How you think, love, and take action.",
            items: [
              {
                label: "MERCURY",
                value: "Your thinking & communication",
                icon: "☿",
                color: "bg-purple-400/10 text-purple-700",
              },
              {
                label: "VENUS",
                value: "Your love & values",
                icon: "♀",
                color: "bg-rose-400/10 text-rose-700",
              },
              {
                label: "MARS",
                value: "Your drive and ambition",
                icon: "♂",
                color: "bg-orange-400/10 text-orange-700",
              },
            ],
          },
        ].map((section, idx) => (
          <div key={idx} className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-black text-zinc-900">
                {section.title}
              </h3>
              <p className="text-zinc-400 font-medium text-sm">
                {section.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white border border-zinc-100 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-zinc-200/50 transition-all group cursor-pointer"
                >
                  <div className="flex flex-col gap-4">
                    <div
                      className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-2xl font-bold`}
                    >
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                        {item.label}
                      </h4>
                      <p className="text-zinc-900 font-bold leading-tight group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Locked Sections */}
        <div className="relative group overflow-hidden bg-zinc-900 rounded-[40px] p-12 text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white/50" />
            </div>
            <h3 className="text-3xl font-black italic">
              Decode Your Full Cosmic Path
            </h3>
            <p className="text-zinc-400 text-lg max-w-lg mx-auto">
              Advanced patterns, life purpose nodes, and future transits are
              available in your premium blueprint.
            </p>
            <Button
              onClick={() => setIsPaymentModalOpen(true)}
              className="h-16 px-12 rounded-2xl bg-white text-zinc-900 font-black text-xl hover:bg-zinc-100 transition-all shadow-2xl"
            >
              Unlock Premium Insights
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
