"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[100px] rounded-full z-0" />

      <div className="container relative z-10 px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
            <Star className="size-3 fill-current text-primary" />
            <span className="tracking-wide uppercase text-[10px] font-bold">
              {" "}
              #1 Astrology App
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
            Navigate through life with the{" "}
            <span className="text-primary">stars</span>.
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Get personalized insights, daily horoscopes, and 1-on-1 guidance
            from professional astrologers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-shadow"
            >
              Begin My Journey
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-14 px-8 text-lg rounded-full hover:bg-muted"
            >
              View Features
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale">
            <span className="text-sm font-semibold tracking-widest text-muted-foreground">
              VICE
            </span>
            <span className="text-sm font-semibold tracking-widest text-muted-foreground">
              VOGUE
            </span>
            <span className="text-sm font-semibold tracking-widest text-muted-foreground">
              COSMO
            </span>
          </div>
        </motion.div>

        {/* Visual Content - Astrology Wheel Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative size-[500px] rounded-full border border-border flex items-center justify-center bg-muted/50 backdrop-blur-sm animate-[spin_60s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border border-border/50 m-12" />
            <div className="absolute inset-0 rounded-full border border-border/50 m-24" />
            <div className="absolute inset-0 rounded-full border border-border/50 m-36" />

            {/* Decorative Planets/Stars */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 size-4 bg-primary rounded-full shadow-[0_0_15px_var(--primary)]" />
            <div className="absolute bottom-20 right-20 size-3 bg-purple-400 rounded-full shadow-[0_0_10px_purple]" />
            <div className="absolute top-1/2 left-10 size-2 bg-blue-300 rounded-full" />

            {/* Center Content */}
            <div className="relative z-10 text-center">
              <Star className="size-16 text-primary mx-auto mb-2 fill-current opacity-50" />
              <span className="block text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Cosmos
              </span>
            </div>
          </div>

          {/* Floating Cards simulating app UI */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-0 w-48 p-4 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="size-8 rounded-full bg-primary/20" />
              <div className="h-2 w-20 bg-muted rounded-full" />
            </div>
            <div className="h-2 w-full bg-muted rounded-full mb-2" />
            <div className="h-2 w-2/3 bg-muted rounded-full" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 left-0 w-56 p-4 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl"
          >
            <div className="mb-3 text-xs font-semibold text-primary">
              Daily Horoscope
            </div>
            <div className="h-2 w-full bg-muted rounded-full mb-2" />
            <div className="h-2 w-full bg-muted rounded-full mb-2" />
            <div className="h-2 w-3/4 bg-muted rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
