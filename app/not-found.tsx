"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Home, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-background to-background z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 blur-[120px] rounded-full z-0" />

      {/* Floating stars */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[20%] text-primary/20"
      >
        <Star className="size-8 fill-current" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[25%] right-[15%] text-primary/15"
      >
        <Sparkles className="size-10" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[20%] left-[10%] text-primary/10"
      >
        <Star className="size-6 fill-current" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-[30%] right-[20%] text-primary/15"
      >
        <Star className="size-5 fill-current" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-xl mx-auto space-y-8">
        {/* Animated 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <span className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter bg-gradient-to-b from-primary/80 via-primary/40 to-transparent bg-clip-text text-transparent select-none">
            404
          </span>
          {/* Orbiting star */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[360px] md:h-[360px]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <Star className="size-6 text-primary fill-current drop-shadow-[0_0_8px_var(--primary)]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 -mt-8"
        >
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
            Lost in the Cosmos
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            The stars couldn't align for this page. It may have drifted into
            another dimension, or perhaps it never existed in this universe.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-base rounded-full font-bold shadow-xl shadow-primary/20 gap-2"
          >
            <Link href="/">
              <Home className="size-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base rounded-full font-bold gap-2 border-2"
          >
            <Link href="/dashboard">
              <ArrowLeft className="size-4" />
              Go to Dashboard
            </Link>
          </Button>
        </motion.div>

        {/* Decorative orbit rings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-12 flex items-center justify-center gap-2 text-muted-foreground/50"
        >
          <div className="h-px w-12 bg-border" />
          <Star className="size-3 fill-current text-primary/40" />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">
            Cosmicly
          </span>
          <Star className="size-3 fill-current text-primary/40" />
          <div className="h-px w-12 bg-border" />
        </motion.div>
      </div>
    </div>
  );
}
