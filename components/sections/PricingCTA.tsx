"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export function PricingCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0 transform origin-left scale-150" />

      <div className="container px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Start Your Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that aligns with your stars.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Trial Plan */}
          <Card className="p-8 bg-card border-border backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h3 className="text-lg font-medium text-muted-foreground mb-4">
              7-Day Trial
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-foreground">$1</span>
              <span className="text-muted-foreground">/ 7 days</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Daily Horoscope",
                "Basic Compatibility",
                "Limited Guidance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Check className="size-3" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full" variant="outline">
              Start Trial
            </Button>
          </Card>

          {/* Premium Plan */}
          <Card className="p-8 bg-primary/10 border-primary/50 backdrop-blur-md relative shadow-lg shadow-primary/10">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
              MOST POPULAR
            </div>
            <h3 className="text-lg font-medium text-primary mb-4">
              Cosmic Premium
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-foreground">$29</span>
              <span className="text-muted-foreground">/ month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Everything in Trial",
                "Unlimited 1-on-1 Guidance",
                "Full Natal Chart Analysis",
                "Relationship Synergy Reports",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="size-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <Check className="size-3" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Get Premium
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
