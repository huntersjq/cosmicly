import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AstrologerCard } from "@/components/dashboard/AstrologerCard";
import { ASTROLOGERS } from "@/lib/mock-data";

export default function ChatsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {ASTROLOGERS.map((astrologer) => (
          <AstrologerCard key={astrologer.name} {...astrologer} />
        ))}
      </div>
    </DashboardLayout>
  );
}
