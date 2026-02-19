import { LucideIcon } from "lucide-react";

interface ReadingCardProps {
  title: string;
  content: string;
  icon: LucideIcon;
  iconColor: string;
}

export function ReadingCard({
  title,
  content,
  icon: Icon,
  iconColor,
}: ReadingCardProps) {
  return (
    <div className="bg-card p-8 rounded-[24px] shadow-sm border border-border flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${iconColor} bg-muted/50`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed text-lg">{content}</p>
    </div>
  );
}
