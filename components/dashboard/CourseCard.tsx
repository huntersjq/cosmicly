"use client";

import { Star, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  instructor: string;
  lessons: number;
  duration: string;
  rating: number;
  image: string;
}

export function CourseCard({
  title,
  instructor,
  lessons,
  duration,
  rating,
  image,
}: CourseCardProps) {
  return (
    <div className="bg-card rounded-[24px] shadow-sm border border-border overflow-hidden group flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-bold text-foreground">{rating}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow gap-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground font-medium">by {instructor}</p>
        </div>

        <div className="flex items-center gap-6 mt-auto border-t border-border pt-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold">{lessons} lessons</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">{duration}</span>
          </div>
        </div>

        <Button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all">
          Start Learning
        </Button>
      </div>
    </div>
  );
}
