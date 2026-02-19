"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { CourseDetailView } from "@/components/dashboard/CourseDetailView";
import { COURSES } from "@/lib/mock-data";

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<typeof COURSES[0] | null>(null);

  const mockSections = [
    {
      title: "Introduction",
      lessons: [
        { title: "Welcome to the Course", duration: "05:20" },
        { title: "Fundamental Principles", duration: "12:45" },
      ]
    },
    {
      title: "Core Techniques",
      lessons: [
        { title: "Interpreting Primary Signs", duration: "18:10", isLocked: true },
        { title: "Advanced Frameworks", duration: "25:30", isLocked: true },
      ]
    }
  ];

  if (selectedCourse) {
    return (
      <DashboardLayout>
        <CourseDetailView 
          title={selectedCourse.title}
          instructor={selectedCourse.instructor}
          description="A clear guide to making forecasts you can act on today. For entertainment purposes only."
          sections={mockSections}
          onBack={() => setSelectedCourse(null)}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map((course) => (
          <div key={course.title} onClick={() => setSelectedCourse(course)} className="cursor-pointer">
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
