import { ProfileContent } from "@/components/dashboard/ProfileContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile",
};

export default function ProfilePage() {
  return <ProfileContent />;
}
