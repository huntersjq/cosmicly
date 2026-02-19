"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";
import { ThemeToggle } from "@/components/dashboard/ThemeToggle";
import { useI18n } from "@/components/i18n-provider";

export function Navbar() {
  const { t } = useI18n();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");

  const openAuth = (type: "login" | "signup") => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Star className="size-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight">Cosmicly</span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.features")}
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.pricing")}
          </Link>
          <ThemeToggle />
          <Button
            asChild
            variant="outline"
            className="text-sm font-semibold rounded-full px-5 gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
          >
            <Link href="/dashboard">
              <Play className="size-3.5 fill-current" />
              Try Demo
            </Link>
          </Button>
          <Button
            variant="default"
            className="text-sm font-semibold rounded-full px-6"
            onClick={() => openAuth("signup")}
          >
            {t("common.signup")}
          </Button>
          <Button
            variant="ghost"
            className="text-sm font-medium"
            onClick={() => openAuth("login")}
          >
            {t("common.login")}
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
