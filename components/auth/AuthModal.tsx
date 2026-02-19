"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "login" | "signup";
}

export function AuthModal({ isOpen, onClose, initialType = "signup" }: AuthModalProps) {
  const [type, setType] = useState<"login" | "signup">(initialType);

  // Sync state with prop when it opens
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[440px] bg-white dark:bg-[#1a1c1e] border-none rounded-[24px] p-8 gap-0 shadow-2xl text-black dark:text-white">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-2xl font-bold tracking-tight text-black dark:text-white">
            {type === "login" ? "Log in" : "Sign up"}
          </DialogTitle>
        </DialogHeader>
        
        {type === "login" ? (
          <LoginForm onSwitchToSignup={() => setType("signup")} />
        ) : (
          <SignupForm onSwitchToLogin={() => setType("login")} />
        )}
      </DialogContent>
    </Dialog>
  );
}
