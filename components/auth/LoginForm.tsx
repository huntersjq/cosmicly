"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

export function LoginForm({ onSwitchToSignup }: LoginFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", email);
    // Passwordless login logic would go here
  };

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="login-email"
              className="text-sm font-semibold text-zinc-900 dark:text-zinc-200"
            >
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="login-email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl text-base px-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-primary/50"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-14 rounded-xl text-base font-semibold bg-primary hover:bg-primary/90 transition-all shadow-[0_8px_16px_-4px_rgba(var(--primary-rgb),0.3)] text-white"
          >
            Log In
          </Button>
        </form>
      </div>

      <div className="text-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Need to create an account?{" "}
          <button
            onClick={onSwitchToSignup}
            className="text-primary hover:underline font-semibold"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
