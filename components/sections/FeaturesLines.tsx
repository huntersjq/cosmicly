"use client";

import { motion } from "framer-motion";

export function FeaturesLines() {
  const steps = [
    { title: "Download App", desc: "Get started on iOS or Android" },
    {
      title: "Enter Details",
      desc: "Input your birth date, time, and location",
    },
    { title: "Get Analysis", desc: "Receive your personalized astral map" },
    { title: "Start Guidance", desc: "Connect with personal astrologers" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How Cosmicly Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Your journey to self-discovery is just a few clicks away.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line Container */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative`}
              >
                {/* Left Side (Desktop) */}
                <div className="hidden md:block flex-1 w-full text-right px-12">
                  {i % 2 === 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  ) : (
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="h-32 bg-white/5 rounded-lg w-full flex items-center justify-center text-muted-foreground/30">
                        Visual Placeholder
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Dot */}
                <div className="relative shrink-0 z-10">
                  <div className="size-10 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_var(--primary)] flex items-center justify-center">
                    <div className="size-3 bg-white rounded-full" />
                  </div>
                </div>

                {/* Right Side (Desktop) */}
                <div className="flex-1 w-full md:px-12 pl-12 md:pl-12">
                  {/* Mobile Content */}
                  <div className="md:hidden">
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{step.desc}</p>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="h-24 bg-white/5 rounded w-full" />
                    </div>
                  </div>

                  {/* Desktop Content */}
                  <div className="hidden md:block">
                    {i % 2 !== 0 ? (
                      <div className="text-left">
                        <h3 className="text-2xl font-bold mb-2 text-primary">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="h-32 bg-white/5 rounded-lg w-full flex items-center justify-center text-muted-foreground/30">
                          Visual Placeholder
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
