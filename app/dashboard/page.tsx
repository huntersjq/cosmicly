import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { HoroscopeDashboard } from "@/components/dashboard/HoroscopeDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <HoroscopeDashboard />
    </DashboardLayout>
  );
}
