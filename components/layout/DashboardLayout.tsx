"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  User,
  Globe,
  LogOut,
  Settings,
  HelpCircle,
  UserCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/components/i18n-provider";
import { ThemeToggle } from "@/components/dashboard/ThemeToggle";
import { Locale } from "@/lib/i18n";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, setLocale, t } = useI18n();

  const handleLogout = () => {
    router.push("/");
  };

  const navItems = [
    { label: t("horoscope.daily"), href: "/dashboard" },
    { label: t("nav.chats"), href: "/dashboard/chats" },
    { label: t("nav.courses"), href: "/dashboard/courses" },
    { label: t("nav.insights"), href: "/dashboard/insights" },
  ];

  const languages: Record<Locale, { label: string; flag: string }> = {
    en: { label: "English", flag: "US" },
    zh: { label: "中文", flag: "CN" },
    es: { label: "Español", flag: "ES" },
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <nav className="sticky top-0 z-50 bg-card border-b border-border px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            href="/dashboard"
            className="text-2xl font-black tracking-tighter text-foreground"
          >
            cosmicly
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-semibold transition-colors relative h-16 flex items-center ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-1.5 cursor-pointer hover:bg-accent transition-all">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-bold text-foreground">
                  {languages[locale].flag}
                </span>
                <span className="text-muted-foreground text-[10px]">▼</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2 rounded-2xl border-2 border-border bg-card animate-in fade-in zoom-in-95 duration-200">
              {(Object.keys(languages) as Locale[]).map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`h-10 rounded-xl cursor-pointer focus:bg-accent px-3 font-bold ${
                    locale === lang ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span className="mr-2 opacity-50">
                    {languages[lang].flag}
                  </span>
                  {languages[lang].label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-accent transition-all border border-border">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-72 mt-2 p-2 rounded-2xl border-2 border-border bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-200"
              align="end"
            >
              <div className="px-5 py-4 mb-1">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1.5">
                  Signed in as
                </p>
                <p className="text-base font-black text-foreground truncate tracking-tight">
                  justin@example.com
                </p>
              </div>
              <DropdownMenuSeparator className="bg-border mx-2" />
              <div className="py-2 px-1">
                <DropdownMenuItem
                  className="h-14 rounded-xl cursor-pointer focus:bg-accent group px-3"
                  asChild
                >
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-3 w-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-card transition-colors">
                      <UserCircle className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-bold text-muted-foreground group-hover:text-foreground">
                      {t("nav.profile")}
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="h-14 rounded-xl cursor-pointer focus:bg-accent group px-3"
                  asChild
                >
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 w-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-card transition-colors">
                      <Settings className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-bold text-muted-foreground group-hover:text-foreground">
                      {t("nav.settings")}
                    </span>
                  </Link>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator className="bg-border mx-2" />
              <div className="p-1">
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="h-14 rounded-xl cursor-pointer focus:bg-destructive/10 group px-3"
                >
                  <div className="flex items-center gap-3 w-full text-destructive">
                    <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                      <LogOut className="w-6 h-6 text-destructive group-hover:text-destructive transition-colors" />
                    </div>
                    <span className="font-bold">{t("common.logout")}</span>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
