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
              className="w-72 mt-2 p-2 rounded-2xl border-2 border-zinc-100 bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
              align="end"
            >
              <div className="px-5 py-4 mb-1">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-1.5">
                  Signed in as
                </p>
                <p className="text-base font-black text-zinc-900 truncate tracking-tight">
                  justin@example.com
                </p>
              </div>
              <DropdownMenuSeparator className="bg-zinc-100 mx-2" />
              <div className="py-2 px-1">
                <DropdownMenuItem
                  className="h-14 rounded-xl cursor-pointer focus:bg-zinc-50 group px-3"
                  asChild
                >
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-3 w-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center group-hover:bg-white transition-colors">
                      <UserCircle className="w-6 h-6 text-zinc-500 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-bold text-zinc-700 group-hover:text-zinc-900">
                      Profile
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="h-14 rounded-xl cursor-pointer focus:bg-zinc-50 group px-3"
                  asChild
                >
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 w-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center group-hover:bg-white transition-colors">
                      <Settings className="w-6 h-6 text-zinc-500 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-bold text-zinc-700 group-hover:text-zinc-900">
                      Settings
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="h-14 rounded-xl cursor-pointer focus:bg-zinc-50 group px-3">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center group-hover:bg-white transition-colors">
                      <HelpCircle className="w-6 h-6 text-zinc-500 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-bold text-zinc-700 group-hover:text-zinc-900">
                      Help Center
                    </span>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator className="bg-zinc-100 mx-2" />
              <div className="p-1">
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="h-14 rounded-xl cursor-pointer focus:bg-red-50 group px-3"
                >
                  <div className="flex items-center gap-3 w-full text-red-500">
                    <div className="w-10 h-10 rounded-xl bg-red-50/50 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                      <LogOut className="w-6 h-6 text-red-400 group-hover:text-red-500 transition-colors" />
                    </div>
                    <span className="font-bold">Log Out</span>
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
