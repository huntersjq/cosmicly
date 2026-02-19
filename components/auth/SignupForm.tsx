"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

export function SignupForm({ onSwitchToLogin }: SignupFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    birthDate: "",
    name: "",
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup with:", formData);
    // Signup logic would go here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex flex-col gap-6 py-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="h-14 bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl text-base px-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-primary/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmEmail" className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
            Confirm Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="confirmEmail"
            type="email"
            placeholder="Confirm Email"
            required
            value={formData.confirmEmail}
            onChange={handleChange}
            className="h-14 bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl text-base px-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-primary/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthDate" className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
            Birth Date <span className="text-red-500">*</span>
          </Label>
          <Input
            id="birthDate"
            type="text"
            placeholder="mm / dd / yyyy"
            required
            value={formData.birthDate}
            onChange={handleChange}
            className="h-14 bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl text-base px-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-primary/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="h-14 bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl text-base px-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-primary/50"
          />
        </div>

        <div className="flex items-start space-x-2 pt-2">
          <Checkbox 
            id="agreed" 
            className="mt-1 border-zinc-300 dark:border-zinc-700 data-[state=checked]:bg-primary data-[state=checked]:text-white"
            checked={formData.agreed}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreed: checked === true }))}
          />
          <Label 
            htmlFor="agreed" 
            className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed cursor-pointer font-medium"
          >
            I have read and agree to Hint's{" "}
            <Link href="#" className="text-primary hover:underline font-semibold">Terms & Conditions</Link>
            {" "}and{" "}
            <Link href="#" className="text-primary hover:underline font-semibold">Privacy Policy</Link>.
          </Label>
        </div>

        <Button 
          type="submit" 
          disabled={!formData.agreed}
          className="w-full h-14 rounded-xl text-base font-semibold bg-primary hover:bg-primary/90 transition-all shadow-[0_8px_16px_-4px_rgba(var(--primary-rgb),0.3)] text-white disabled:opacity-50"
        >
          Sign Up
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Already have an account?{" "}
          <button 
            onClick={onSwitchToLogin}
            className="text-primary hover:underline font-semibold"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
