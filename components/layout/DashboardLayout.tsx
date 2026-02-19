"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Globe } from "lucide-react";

const NAV_ITEMS = [
  { label: "Horoscope", href: "/dashboard" },
  { label: "Chats", href: "/dashboard/chats" },
  { label: "Courses", href: "/dashboard/courses" },
  { label: "Insights", href: "/dashboard/insights" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <nav className="sticky top-0 z-50 bg-white border-b border-zinc-100 px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/dashboard" className="text-2xl font-black tracking-tighter text-zinc-900">
            hint
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-semibold transition-colors relative h-16 flex items-center ${
                  pathname === item.href ? "text-primary" : "text-zinc-500 hover:text-zinc-900"
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
          <div className="flex items-center gap-2 bg-zinc-100 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-zinc-200 transition-all">
            <Globe className="w-4 h-4 text-zinc-500" />
            <span className="text-sm font-bold text-zinc-700">US</span>
            <span className="text-zinc-400">▼</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center cursor-pointer hover:bg-zinc-200 transition-all">
            <User className="w-5 h-5 text-zinc-600" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}
