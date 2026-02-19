"use client";

import { ChevronLeft, PlayCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Lesson {
  title: string;
  duration: string;
  isLocked?: boolean;
}

interface CourseSection {
  title: string;
  lessons: Lesson[];
}

interface CourseDetailsProps {
  title: string;
  instructor: string;
  description: string;
  sections: CourseSection[];
  onBack: () => void;
}

export function CourseDetailView({
  title,
  instructor,
  description,
  sections,
  onBack,
}: CourseDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-bold group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Courses
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        {/* Main Content */}
        <div className="space-y-8">
          <div className="bg-card p-10 rounded-[32px] shadow-sm border border-border space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tight text-foreground leading-tight">
                {title}
              </h1>
              <p className="text-muted-foreground text-lg font-medium">
                by {instructor}
              </p>
            </div>
            <p className="text-muted-foreground text-xl leading-relaxed">
              {description}
            </p>
            <Button className="h-16 px-10 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Start Learning
            </Button>
          </div>

          <div className="bg-card p-10 rounded-[32px] shadow-sm border border-border space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Course Overview
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Discover the deep wisdom of this ancient art. This course
                teaches clear techniques in step-by-step lessons. You'll learn
                how to interpret signs, follow structured frameworks, and read
                key indicators.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar - Course Content */}
        <div className="space-y-6">
          <div className="bg-card p-8 rounded-[32px] shadow-sm border border-border space-y-6 sticky top-24">
            <h2 className="text-2xl font-bold text-foreground">
              Course Content
            </h2>
            <div className="space-y-6">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground flex items-center justify-between">
                    {section.title}
                    <span className="text-muted-foreground text-sm font-medium">
                      {section.lessons.length} lessons
                    </span>
                  </h3>
                  <div className="space-y-2">
                    {section.lessons.map((lesson, lIdx) => (
                      <div
                        key={lIdx}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.isLocked ? (
                            <Lock className="w-4 h-4 text-muted-foreground/30" />
                          ) : (
                            <PlayCircle className="w-4 h-4 text-primary" />
                          )}
                          <span
                            className={`text-base font-medium ${lesson.isLocked ? "text-muted-foreground/50" : "text-foreground/80"}`}
                          >
                            {lesson.title}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-muted-foreground">
                          {lesson.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
