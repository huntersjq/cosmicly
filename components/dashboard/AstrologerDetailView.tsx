"use client";

import {
  ChevronLeft,
  MessageSquare,
  Phone,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AstrologerDetailProps {
  name: string;
  specialties: string[];
  bio: string;
  price: string;
  avatar: string;
  onBack: () => void;
}

export function AstrologerDetailView({
  name,
  specialties,
  bio,
  price,
  avatar,
  onBack,
}: AstrologerDetailProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-bold group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Astrologers
      </button>

      <div className="bg-card rounded-[40px] shadow-sm border border-border overflow-hidden">
        {/* Header Section */}
        <div className="p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="w-48 h-48 rounded-full object-cover border-8 border-muted shadow-xl"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border-4 border-card">
              Online
            </div>
          </div>

          <div className="flex-grow space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <h1 className="text-5xl font-black tracking-tighter text-foreground">
                  {name}
                </h1>
                <div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-700 px-3 py-1 rounded-full font-bold">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span>4.9</span>
                  <span className="text-yellow-600/50">(1,240)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {specialties.map((spec) => (
                  <span
                    key={spec}
                    className="bg-muted text-muted-foreground px-4 py-1.5 rounded-full text-base font-bold"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl">
              {bio} Additional years of experience helping thousands of souls
              find their cosmic alignment. My readings focus on actionable
              insights and spiritual clarity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold text-foreground/80">
                  Verified Expert
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-2xl border border-border">
                <CheckCircle2 className="w-6 h-6 text-muted-foreground" />
                <span className="text-lg font-bold text-foreground/80">
                  Rapid Response
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing/Action Section */}
        <div className="bg-muted/30 border-t border-border p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-3xl shadow-sm border border-border space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">
                Chat Session
              </h3>
              <MessageSquare className="w-8 h-8 text-primary opacity-20" />
            </div>
            <p className="text-muted-foreground text-lg">
              Send unlimited messages and get guidance on your own schedule.
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-foreground">FREE</span>
              <span className="text-muted-foreground font-bold uppercase text-sm tracking-widest">
                Included
              </span>
            </div>
            <Button className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 transition-all">
              Start Chat
            </Button>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-sm border border-border space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-bl-2xl">
              Special Offer
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">Live Call</h3>
              <Phone className="w-8 h-8 text-primary opacity-20" />
            </div>
            <p className="text-muted-foreground text-lg">
              30-minute private audio or video call for deep exploration.
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-foreground">
                {price}
              </span>
              <span className="text-muted-foreground line-through font-bold text-xl">
                $42.99
              </span>
            </div>
            <Button className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 transition-all">
              Book Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
