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
    <div className="bg-card p-8 rounded-[36px] shadow-sm border border-border flex flex-col gap-6 group hover:translate-y-[-4px] transition-all duration-300 h-full">
      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 rounded-2xl ${iconConfig.bg} dark:bg-zinc-800/50 flex items-center justify-center ${iconConfig.color} flex-shrink-0 group-hover:scale-110 transition-transform`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-black text-foreground leading-tight">
            {title}
          </h3>
          {price && (
            <p className="text-muted-foreground font-bold text-sm">
              Price: {price}
            </p>
          )}
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed text-lg font-medium">
        {description}
      </p>

      <div className="mt-auto pt-4">
        <Button className="w-full h-14 px-6 rounded-[20px] bg-primary text-primary-foreground font-black text-base hover:bg-primary/90 transition-all group truncate">
          {cta}
        </Button>
      </div>
    </div>
  );
}
