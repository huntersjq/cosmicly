"use client";

import { Heart, Baby, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap = {
  Heart: Heart,
  Baby: Baby,
  Star: Star,
};

interface InsightCardProps {
  title: string;
  description: string;
  cta: string;
  icon: keyof typeof iconMap;
}

export function InsightCard({ title, description, cta, icon }: InsightCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="bg-white p-8 rounded-[24px] shadow-sm border border-zinc-100 flex flex-col items-center text-center gap-6 group hover:translate-y-[-4px] transition-all duration-300">
      <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        <Icon className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-zinc-900 leading-tight">
          {title}
        </h3>
        <p className="text-zinc-500 leading-relaxed text-lg">
          {description}
        </p>
      </div>

      <Button className="w-full h-14 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all mt-auto group">
        {cta}
        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
