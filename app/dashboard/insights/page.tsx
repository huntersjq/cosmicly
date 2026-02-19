import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { InsightCard } from "@/components/dashboard/InsightCard";
import { INSIGHTS } from "@/lib/mock-data";

export default function InsightsPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INSIGHTS.map((insight) => (
          <InsightCard key={insight.title} {...insight} />
        ))}
      </div>
    </DashboardLayout>
  );
}
