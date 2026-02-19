import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { HoroscopeDashboard } from "@/components/dashboard/HoroscopeDashboard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <HoroscopeDashboard />
    </DashboardLayout>
  );
}
