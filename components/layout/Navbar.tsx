"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";

export function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");

  const openAuth = (type: "login" | "signup") => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Star className="size-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight">Hint</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="#" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link 
            href="#" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Button 
            variant="secondary" 
            className="text-sm font-semibold rounded-full px-6"
            onClick={() => openAuth("signup")}
          >
            Sign up
          </Button>
          <Button 
            variant="ghost" 
            className="text-sm font-medium"
            onClick={() => openAuth("login")}
          >
            Login
          </Button>
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialType={authType}
      />
    </>
  );
}
