"use client";

import { useState } from "react";
import { UserCircle, Settings, Copy, Check, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SIDEBAR_ITEMS = [
  { label: "Profile", href: "/dashboard/profile", icon: UserCircle },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function SettingsContent() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const uid = "1b23a978-a4b0-4b1d-9785-c7b6815230ac";

  const handleCopy = () => {
    navigator.clipboard.writeText(uid);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Settings Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-card rounded-[32px] border border-border p-3 shadow-sm sticky top-24">
            {SIDEBAR_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-5 h-16 rounded-2xl transition-all font-black text-lg ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    pathname === item.href
                      ? "bg-primary-foreground/20"
                      : "bg-muted"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 ${pathname === item.href ? "text-primary-foreground" : "text-muted-foreground"}`}
                  />
                </div>
                {item.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Settings Content */}
        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-card rounded-[40px] border border-border shadow-sm overflow-hidden">
            <div className="p-8 md:p-12 space-y-10">
              <div className="space-y-2">
                <h1 className="text-4xl font-black text-foreground tracking-tight">
                  Settings
                </h1>
                <p className="text-muted-foreground text-lg font-medium">
                  View and update your profile security settings
                </p>
              </div>

              <div className="space-y-10">
                {/* UID Section */}
                <div className="space-y-4">
                  <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    UID
                  </Label>
                  <div className="relative group">
                    <div className="h-20 rounded-2xl border-2 border-border bg-muted/50 flex items-center px-6 pr-16 overflow-hidden">
                      <span className="text-xl font-bold text-foreground truncate tracking-tight">
                        {uid}
                      </span>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-all active:scale-95 text-muted-foreground hover:text-primary group-hover:border-primary/20"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                    <p className="text-xs text-muted-foreground font-medium mt-3 ml-1">
                      This is your unique identifier (UID) which could be
                      requested if you contact our support team.
                    </p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="space-y-4">
                  <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    Email
                  </Label>
                  <div className="relative">
                    <Input
                      defaultValue="justin@example.com"
                      disabled
                      className="h-20 rounded-2xl border-2 border-border bg-muted/10 px-6 text-xl font-bold text-muted-foreground opacity-60"
                    />
                    <ShieldCheck className="absolute right-6 top-1/2 -translate-y-1/2 text-green-500 w-6 h-6" />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-4">
                  <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    Phone Number
                  </Label>
                  <div className="flex gap-3">
                    <div className="w-32 flex-shrink-0">
                      <Select defaultValue="us">
                        <SelectTrigger className="h-20 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground">
                          <div className="flex items-center gap-2">
                            <span>🇺🇸</span>
                            <span className="text-base">US</span>
                          </div>
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-border shadow-xl max-h-64">
                          <SelectItem value="us">🇺🇸 US (+1)</SelectItem>
                          <SelectItem value="cn">🇨🇳 CN (+86)</SelectItem>
                          <SelectItem value="uk">🇬🇧 UK (+44)</SelectItem>
                          <SelectItem value="sg">🇸🇬 SG (+65)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1 relative">
                      <Input
                        placeholder="+1 000 000 0000"
                        className="h-20 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Button
                    onClick={handleConfirm}
                    disabled={loading}
                    className="flex-1 h-20 rounded-[28px] bg-primary text-primary-foreground font-black text-2xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 active:scale-[0.98]"
                  >
                    {loading ? "Saving..." : "Confirm"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
