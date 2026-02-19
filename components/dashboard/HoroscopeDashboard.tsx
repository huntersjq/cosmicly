"use client";

import { useState } from "react";
import { User, Briefcase, Heart, MessageSquare, Star } from "lucide-react";
import { ReadingCard } from "./ReadingCard";
import { HOROSCOPE_DATA } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export function HoroscopeDashboard() {
  const [activeTab, setActiveTab] = useState<"today" | "tomorrow" | "month">("today");

  const data = HOROSCOPE_DATA[activeTab];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
      {/* Main Content */}
      <div className="space-y-8">
        {/* Date Tabs */}
        <div className="bg-zinc-100/50 p-1.5 rounded-full flex w-full max-w-2xl">
          {(["today", "tomorrow", "month"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-6 rounded-full text-base font-semibold transition-all ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Readings */}
        <div className="space-y-6">
          <ReadingCard 
            title="Personal Life" 
            content={data.personal} 
            icon={User} 
            iconColor="text-blue-500"
          />
          <ReadingCard 
            title="Profession" 
            content={data.profession} 
            icon={Briefcase} 
            iconColor="text-cyan-500"
          />
          <ReadingCard 
            title="Health" 
            content={data.health} 
            icon={Heart} 
            iconColor="text-rose-500"
          />
        </div>
      </div>

      {/* Sidebar Widgets */}
      <div className="space-y-6">
        {/* Chat Widget */}
        <div className="bg-white p-8 rounded-[24px] shadow-sm border border-zinc-100 flex flex-col items-center text-center gap-6">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-2 border-2 border-primary/10 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Star className="w-12 h-12 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-zinc-900">Chat with Astrologer</h3>
            <p className="text-zinc-500">Get insights into your compatibility with your personal Astrologer</p>
          </div>
          <Button className="w-full h-14 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all">
            <MessageSquare className="w-5 h-5 mr-3" />
            Astrologers
          </Button>
        </div>

        {/* Compatibility Widget */}
        <div className="bg-white p-8 rounded-[24px] shadow-sm border border-zinc-100 flex flex-col gap-6 overflow-hidden relative">
          <div className="space-y-2 relative z-10">
            <h3 className="text-2xl font-bold text-zinc-900">Test your compatibility in love</h3>
            <p className="text-zinc-500">Get insights on your relationships with friends, partners, and crushes.</p>
          </div>
          <Button className="w-full h-14 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all relative z-10">
            Start Test
          </Button>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10">
             <Heart className="w-full h-full text-rose-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
