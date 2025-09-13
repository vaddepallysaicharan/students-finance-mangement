import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, Coins } from "lucide-react";

const SavingsChallenge = () => {
  const challenges = [
    {
      id: 1,
      title: "30-Day No-Coffee Challenge",
      description: "Skip coffee purchases for 30 days",
      progress: 65,
      participants: 1247,
      reward: 50,
      daysLeft: 12,
      icon: Calendar,
      active: true,
    },
    {
      id: 2,
      title: "Weekly Meal Prep Master",
      description: "Prepare all meals at home for a week",
      progress: 85,
      participants: 856,
      reward: 25,
      daysLeft: 2,
      icon: Trophy,
      active: true,
    },
    {
      id: 3,
      title: "Transport Hero",
      description: "Use public transport or walk instead of rideshare",
      progress: 40,
      participants: 2134,
      reward: 75,
      daysLeft: 18,
      icon: Users,
      active: false,
    },
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-gamify" />
          Savings Challenges
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {challenges.map((challenge) => {
          const Icon = challenge.icon;
          return (
            <div
              key={challenge.id}
              className={`
                p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02]
                ${challenge.active 
                  ? 'bg-gradient-to-r from-gamify/10 to-primary/10 border-gamify/30' 
                  : 'bg-muted/50'
                }
              `}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`
                    p-2 rounded-full 
                    ${challenge.active ? 'bg-gamify text-gamify-foreground' : 'bg-muted text-muted-foreground'}
                  `}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{challenge.title}</h4>
                    <p className="text-xs text-muted-foreground">{challenge.description}</p>
                  </div>
                </div>
                {challenge.active && (
                  <Badge variant="secondary" className="bg-gamify/20 text-gamify">
                    Active
                  </Badge>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>{challenge.progress}% complete</span>
                  <span className="flex items-center gap-1">
                    <Coins className="w-3 h-3" />
                    {challenge.reward} points
                  </span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{challenge.participants} participants</span>
                  <span>{challenge.daysLeft} days left</span>
                </div>
              </div>

              {!challenge.active && (
                <Button 
                  size="sm" 
                  className="w-full mt-3 bg-gamify hover:bg-gamify/90 text-gamify-foreground"
                >
                  Join Challenge
                </Button>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default SavingsChallenge;