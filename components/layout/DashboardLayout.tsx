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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_ITEMS = [
  { label: "Horoscope", href: "/dashboard" },
  { label: "Chats", href: "/dashboard/chats" },
  { label: "Courses", href: "/dashboard/courses" },
  { label: "Insights", href: "/dashboard/insights" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <nav className="sticky top-0 z-50 bg-white border-b border-zinc-100 px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            href="/dashboard"
            className="text-2xl font-black tracking-tighter text-zinc-900"
          >
            hint
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-semibold transition-colors relative h-16 flex items-center ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-zinc-500 hover:text-zinc-900"
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center cursor-pointer hover:bg-zinc-200 transition-all">
                <User className="w-5 h-5 text-zinc-600" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-72 mt-2 p-2 rounded-2xl border-zinc-100 shadow-xl"
              align="end"
            >
              <div className="px-4 py-3 mb-1">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                  Signed in as
                </p>
                <p className="text-sm font-bold text-zinc-900 truncate">
                  justin@example.com
                </p>
              </div>
              <DropdownMenuSeparator className="bg-zinc-50" />
              <div className="py-1">
                <DropdownMenuItem
                  className="h-12 rounded-xl cursor-pointer focus:bg-zinc-50"
                  asChild
                >
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-3 px-3"
                  >
                    <UserCircle className="w-5 h-5 text-zinc-500" />
                    <span className="font-bold text-zinc-700">Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="h-12 rounded-xl cursor-pointer focus:bg-zinc-50"
                  asChild
                >
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 px-3"
                  >
                    <Settings className="w-5 h-5 text-zinc-500" />
                    <span className="font-bold text-zinc-700">Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="h-12 rounded-xl cursor-pointer focus:bg-zinc-50">
                  <div className="flex items-center gap-3 px-1 w-full">
                    <HelpCircle className="w-5 h-5 text-zinc-500" />
                    <span className="font-bold text-zinc-700">Help Center</span>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator className="bg-zinc-50" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="h-12 rounded-xl cursor-pointer focus:bg-red-50 group"
              >
                <div className="flex items-center gap-3 px-1 w-full text-red-500">
                  <LogOut className="w-5 h-5 text-red-400 group-hover:text-red-500" />
                  <span className="font-bold">Log Out</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
