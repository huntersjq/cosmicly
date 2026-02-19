"use client";

import { useState } from "react";
import { ChevronLeft, Baby, Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentModal } from "./PaymentModal";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FutureBabySketchFormProps {
  onBack: () => void;
}

export function FutureBabySketchForm({ onBack }: FutureBabySketchFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-700 pb-20 text-center">
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          title="Baby's Full Soul Profile"
          price="S$4.99"
          originalPrice="S$9.99"
        />
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Baby className="w-12 h-12 text-primary animate-bounce" />
        </div>
        <h1 className="text-4xl font-black text-zinc-900 tracking-tight italic">
          Your Baby's Sketch is being prepared!
        </h1>
        <p className="text-zinc-500 text-lg max-w-md mx-auto">
          Our specialized artists are analyzing your genetic potential and
          cosmic alignment. You will receive an email once the sketch is ready.
        </p>
        <div className="bg-white p-8 rounded-[40px] border border-zinc-100 shadow-sm inline-block">
          <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-2">
            Estimated Arrival
          </p>
          <p className="text-3xl font-black text-zinc-900">12 - 24 Hours</p>
        </div>

        <div className="max-w-xl mx-auto bg-zinc-900 rounded-[32px] p-8 md:p-10 space-y-6 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-20 h-20" />
          </div>
          <h3 className="text-2xl font-black italic">
            Want to know your baby's name & life path?
          </h3>
          <p className="text-zinc-400 font-medium">
            Unlock the complete identity package including predicted names,
            personality traits, and future talents.
          </p>
          <Button
            onClick={() => setIsPaymentModalOpen(true)}
            className="w-full h-16 rounded-2xl bg-primary text-white font-black text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/40"
          >
            Unlock Full Identity Profile
          </Button>
        </div>
        <div className="pt-8">
          <Button
            onClick={onBack}
            variant="outline"
            className="h-14 px-12 rounded-2xl font-bold"
          >
            Back to Insights
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors font-bold group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Insights
      </button>

      <div className="bg-white rounded-[40px] shadow-sm border border-zinc-100 p-8 md:p-12 space-y-10">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Baby className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-black tracking-tight text-zinc-900 leading-tight">
            You're one step away from seeing your Baby's Sketch
          </h1>
          <p className="text-zinc-500 text-lg">
            Please share a few details to help our artists create the most
            accurate and heartfelt sketch inspired by your family's unique
            traits.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              label: "Baby's Gender",
              options: ["No preference", "Boy", "Girl"],
            },
            {
              label: "Your Ethnicity",
              options: [
                "Select ethnicity",
                "Asian",
                "Black",
                "White",
                "Hispanic",
                "Mixed",
              ],
            },
            {
              label: "Your Eye Color",
              options: ["Select color", "Brown", "Blue", "Green", "Hazel"],
            },
            {
              label: "Your Hair Color",
              options: ["Select color", "Black", "Brown", "Blonde", "Red"],
            },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <Label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">
                {item.label}
              </Label>
              <Select>
                <SelectTrigger className="h-16 rounded-2xl border-2 border-zinc-100 bg-zinc-50/50 px-6 text-xl font-bold text-zinc-900">
                  <SelectValue placeholder={item.options[0]} />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-zinc-100 shadow-xl">
                  {item.options.slice(1).map((opt) => (
                    <SelectItem key={opt} value={opt.toLowerCase()}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}

          <Button
            onClick={() => setIsSubmitted(true)}
            className="w-full h-20 rounded-[28px] bg-primary text-white font-black text-2xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 group mt-4"
          >
            Unveil My Baby's Sketch
          </Button>
        </div>
      </div>
    </div>
  );
}
