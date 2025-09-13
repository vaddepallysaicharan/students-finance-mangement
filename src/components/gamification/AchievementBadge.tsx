import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Zap } from "lucide-react";

interface AchievementBadgeProps {
  type: "streak" | "goal" | "saver" | "budgeter";
  title: string;
  description: string;
  unlocked: boolean;
}

const AchievementBadge = ({ type, title, description, unlocked }: AchievementBadgeProps) => {
  const icons = {
    streak: Zap,
    goal: Target,
    saver: Star,
    budgeter: Trophy,
  };

  const Icon = icons[type];

  return (
    <div className={`
      relative p-4 rounded-lg border transition-all duration-300 hover:scale-105
      ${unlocked 
        ? 'bg-gradient-to-br from-achievement to-achievement/80 text-achievement-foreground shadow-lg' 
        : 'bg-muted/50 text-muted-foreground'
      }
    `}>
      <div className="flex items-center gap-3">
        <div className={`
          p-2 rounded-full 
          ${unlocked ? 'bg-achievement-foreground/20' : 'bg-muted'}
        `}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold text-sm">{title}</h4>
          <p className="text-xs opacity-80">{description}</p>
        </div>
      </div>
      {unlocked && (
        <Badge className="absolute -top-2 -right-2 bg-success text-success-foreground animate-bounce-subtle">
          New!
        </Badge>
      )}
    </div>
  );
};

export default AchievementBadge;