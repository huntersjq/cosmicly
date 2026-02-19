"use client";

import { useState } from "react";
import {
  UserCircle,
  Settings,
  Save,
  Search,
  Calendar,
  Clock,
  Heart,
  ChevronDown,
} from "lucide-react";
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
import { Switch } from "@/components/ui/switch";

const SIDEBAR_ITEMS = [
  { label: "Profile", href: "/dashboard/profile", icon: UserCircle },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function ProfilePage() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Profile Sidebar */}
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

        {/* Profile Content */}
        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-card rounded-[40px] border border-border shadow-sm overflow-hidden">
            <div className="p-8 md:p-12 space-y-10">
              <div className="space-y-2">
                <h1 className="text-4xl font-black text-foreground tracking-tight">
                  Profile
                </h1>
                <p className="text-muted-foreground text-lg font-medium">
                  View and update your profile data
                </p>
              </div>

              <div className="space-y-8">
                {/* Name */}
                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    Name *
                  </Label>
                  <Input
                    defaultValue="Justin"
                    className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    Gender *
                  </Label>
                  <Select defaultValue="male">
                    <SelectTrigger className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground transition-all">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-border shadow-xl">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="prefer-not-to-say">
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Place of Birth */}
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                      Place of birth *
                    </Label>
                  </div>
                  <div className="relative">
                    <Input
                      defaultValue="China"
                      className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground focus-visible:ring-primary/20 focus-visible:border-primary transition-all pr-12"
                    />
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium ml-1">
                    Don't know the city? Just add the country.
                  </p>
                </div>

                {/* Date of Birth */}
                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    Date of birth *
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      defaultValue="01"
                      className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground text-center"
                    />
                    <Input
                      defaultValue="24"
                      className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground text-center"
                    />
                    <Input
                      defaultValue="1984"
                      className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground text-center"
                    />
                  </div>
                </div>

                {/* Time of Birth */}
                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    Time of birth *
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Input
                        defaultValue="09:57 AM"
                        className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground"
                      />
                      <Clock className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-2xl border-2 border-border">
                      <span className="text-muted-foreground font-bold text-sm">
                        "I don't know my exact time"
                      </span>
                      <Switch className="data-[state=checked]:bg-primary" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium ml-1">
                    Don't worry if you don't know the exact birth time, you can
                    still find plenty of insights using default setting.
                  </p>
                </div>

                {/* Relationship Status */}
                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    Relationship Status
                  </Label>
                  <Select defaultValue="in-relationship">
                    <SelectTrigger className="h-16 rounded-2xl border-2 border-border bg-muted/50 px-6 text-xl font-bold text-foreground transition-all">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-border shadow-xl">
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="in-relationship">
                        In relationship
                      </SelectItem>
                      <SelectItem value="it-is-complicated">
                        It is complicated
                      </SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleSave}
                  disabled={loading}
                  className="w-full h-20 rounded-[28px] bg-primary text-primary-foreground font-black text-2xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 mt-4 active:scale-[0.98]"
                >
                  {loading ? "Saving..." : "Save"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
