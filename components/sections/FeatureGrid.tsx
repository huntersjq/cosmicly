"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageCircle, Heart, Star, Map } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "1-on-1 Guidance",
    desc: "Chat with professional astrologers anytime, anywhere. Get answers to your specific life questions."
  },
  {
    icon: Star,
    title: "Hyper-Personalized",
    desc: "Daily horoscopes tailored exactly to your birth chart and current planetary transits."
  },
  {
    icon: Heart,
    title: "Compatibility",
    desc: "Discover how your stars align with friends, family, and potential partners."
  },
  {
    icon: Map,
    title: "Natal Chart",
    desc: "Deep dive into your personality with a comprehensive analysis of your birth chart."
  }
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-black/20">
      <div className="container px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Explore the Cosmos</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to navigate your spiritual journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 h-full bg-white/5 border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group">
                <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
