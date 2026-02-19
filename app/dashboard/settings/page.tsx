import { SettingsContent } from "@/components/dashboard/SettingsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return <SettingsContent />;
}
