"use client";

import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AstrologerCardProps {
  name: string;
  specialties: string[];
  bio: string;
  price: string;
  avatar: string;
}

export function AstrologerCard({
  name,
  specialties,
  bio,
  price,
  avatar,
}: AstrologerCardProps) {
  return (
    <div className="bg-card p-8 rounded-[24px] shadow-sm border border-border flex flex-col md:flex-row gap-8">
      {/* Avatar & Info */}
      <div className="flex-shrink-0">
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-muted"
        />
      </div>

      <div className="flex-grow space-y-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
          <div className="flex flex-wrap gap-2">
            {specialties.map((spec) => (
              <span
                key={spec}
                className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
          {bio}
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">
              Chat / Unlimited /{" "}
              <span className="text-primary">No extra charge</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">
              Live Call / 30 minutes /{" "}
              <span className="text-foreground">{price}</span>{" "}
              <span className="line-through opacity-50">$42.99</span>
            </span>
          </div>
        </div>

        <Button className="w-full md:w-auto px-12 h-14 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all">
          Details
        </Button>
      </div>
    </div>
  );
}
