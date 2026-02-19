import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { COURSES } from "@/lib/mock-data";

export default function CoursesPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </DashboardLayout>
  );
}
