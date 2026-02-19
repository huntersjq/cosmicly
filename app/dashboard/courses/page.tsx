import { CoursesContent } from "@/components/dashboard/CoursesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astrology Courses",
  description:
    "Learn the secrets of the stars with our expert-led astrology courses and masterclasses.",
};

export default function CoursesPage() {
  return <CoursesContent />;
}
