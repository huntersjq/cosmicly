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

export function CourseDetailView({ title, instructor, description, sections, onBack }: CourseDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-bold group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Courses
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        {/* Main Content */}
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-zinc-100 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tight text-zinc-900 leading-tight">
                {title}
              </h1>
              <p className="text-zinc-500 text-lg font-medium">by {instructor}</p>
            </div>
            <p className="text-zinc-600 text-xl leading-relaxed">
              {description}
            </p>
            <Button className="h-16 px-10 rounded-2xl bg-primary text-white font-bold text-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Start Learning
            </Button>
          </div>

          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-zinc-100 space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Course Overview</h2>
            <div className="space-y-4">
              <p className="text-zinc-600 text-lg leading-relaxed">
                Discover the deep wisdom of this ancient art. This course teaches clear techniques in step-by-step lessons. 
                You'll learn how to interpret signs, follow structured frameworks, and read key indicators.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar - Course Content */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100 space-y-6 sticky top-24">
            <h2 className="text-2xl font-bold text-zinc-900">Course Content</h2>
            <div className="space-y-6">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg font-bold text-zinc-900 flex items-center justify-between">
                    {section.title}
                    <span className="text-zinc-400 text-sm font-medium">{section.lessons.length} lessons</span>
                  </h3>
                  <div className="space-y-2">
                    {section.lessons.map((lesson, lIdx) => (
                      <div 
                        key={lIdx}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.isLocked ? (
                            <Lock className="w-4 h-4 text-zinc-300" />
                          ) : (
                            <PlayCircle className="w-4 h-4 text-primary" />
                          )}
                          <span className={`text-base font-medium ${lesson.isLocked ? 'text-zinc-400' : 'text-zinc-700'}`}>
                            {lesson.title}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-zinc-400">{lesson.duration}</span>
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
