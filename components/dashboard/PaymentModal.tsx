"use client";

import {
  X,
  CheckCircle2,
  Apple,
  CreditCard,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  price?: string;
  originalPrice?: string;
}

export function PaymentModal({
  isOpen,
  onClose,
  title = "Sketch in 30 minutes",
  price = "S$5.99",
  originalPrice = "S$11.99",
}: PaymentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] bg-[#f8f9fb] rounded-[32px] p-0 border-none shadow-2xl overflow-hidden">
        <DialogHeader className="p-6 bg-white border-b border-zinc-100 flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-xl font-black text-zinc-900 mx-auto">
            {title}
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-400 hover:text-zinc-900 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogHeader>

        <div className="p-8 space-y-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-bold text-zinc-400 line-through">
                {originalPrice}
              </span>
              <span className="text-4xl font-black text-zinc-900">{price}</span>
            </div>
            <div className="bg-green-50 text-green-600 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              You save 50%
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-zinc-100 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <p className="text-zinc-600 font-bold text-sm">
                Unique soulmate sketch by our artists
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <p className="text-zinc-600 font-bold text-sm">
                Delivered in 30 minutes
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-4 flex items-center gap-3 border border-purple-100">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🎁</span>
            </div>
            <p className="text-purple-700 text-sm font-bold leading-tight">
              Additional discount has been applied just for you!
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <Button className="w-full h-16 rounded-2xl bg-[#ffc439] hover:bg-[#f2ba32] text-black font-black text-xl flex items-center justify-center gap-2 border-none">
              <span className="italic font-extrabold">PayPal</span>
            </Button>

            <Button className="w-full h-16 rounded-2xl bg-black hover:bg-zinc-900 text-white font-black text-xl flex items-center justify-center gap-2 border-none">
              <Apple className="w-6 h-6 fill-current" />
              <span>Buy with Apple Pay</span>
            </Button>

            <Button className="w-full h-16 rounded-2xl bg-black hover:bg-zinc-900 text-white font-black text-xl flex items-center justify-center gap-2 border-none">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span>Pay</span>
            </Button>

            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                Or pay using
              </span>
              <div className="h-px flex-1 bg-zinc-200" />
            </div>

            <Button
              variant="outline"
              className="w-full h-16 rounded-2xl border-2 border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 font-black text-xl flex items-center justify-center gap-3"
            >
              <CreditCard className="w-6 h-6" />
              <span>Credit or debit card</span>
            </Button>
          </div>

          <p className="text-[10px] text-zinc-400 text-center font-medium leading-relaxed px-4">
            By clicking "Pay" you agree to our Terms of Use and Privacy Policy.
            All transactions are secure and encrypted.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
