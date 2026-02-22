"use client";

import {
  Heart,
  Baby,
  Star,
  Globe,
  Hand,
  Hash,
  Users,
  Book,
  Sparkles,
  Layout,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap = {
  Heart: { icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
  Baby: { icon: Baby, color: "text-purple-500", bg: "bg-purple-50" },
  Star: { icon: Star, color: "text-indigo-500", bg: "bg-indigo-50" },
  Globe: { icon: Globe, color: "text-blue-500", bg: "bg-blue-50" },
  Hand: { icon: Hand, color: "text-violet-500", bg: "bg-violet-50" },
  Hash: { icon: Hash, color: "text-emerald-500", bg: "bg-emerald-50" },
  Users: { icon: Users, color: "text-fuchsia-500", bg: "bg-fuchsia-50" },
  Book: { icon: Book, color: "text-orange-500", bg: "bg-orange-50" },
  Sparkles: { icon: Sparkles, color: "text-amber-500", bg: "bg-amber-50" },
  Layout: { icon: Layout, color: "text-sky-500", bg: "bg-sky-50" },
};

interface InsightCardProps {
  title: string;
  description: string;
  cta: string;
  icon: keyof typeof iconMap;
  price?: string;
}

export function InsightCard({
  title,
  description,
  cta,
  icon,
  price,
}: InsightCardProps) {
  const iconConfig = iconMap[icon] || iconMap.Star;
  const Icon = iconConfig.icon;

  return (
    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col gap-4 group hover:border-primary/30 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full ${iconConfig.bg} dark:bg-zinc-800/80 flex items-center justify-center ${iconConfig.color} flex-shrink-0`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
          <h3 className="text-xl font-bold text-foreground leading-tight">
            {title}
          </h3>
          {price && (
            <span className="text-muted-foreground font-semibold text-sm">
              Price: {price}
            </span>
          )}
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed text-[15px] font-medium max-w-4xl">
        {description}
      </p>

      <div className="mt-2">
        <Button className="h-11 px-8 rounded-lg bg-primary text-primary-foreground font-bold text-[15px] hover:bg-primary/90 transition-all w-full sm:w-auto">
          {cta}
        </Button>
      </div>
    </div>
  );
}
