import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Plus, Target, Calendar, DollarSign, TrendingUp } from "lucide-react";

const InteractiveGoalSetting = () => {
  const [showForm, setShowForm] = useState(false);
  const [goalAmount, setGoalAmount] = useState([1000]);
  const [timeline, setTimeline] = useState([12]);

  const monthlyTarget = Math.round(goalAmount[0] / timeline[0]);

  const activeGoals = [
    { name: "Emergency Fund", current: 750, target: 2000, deadline: "Dec 2024", progress: 37.5 },
    { name: "New Laptop", current: 800, target: 1200, deadline: "Mar 2025", progress: 66.7 },
    { name: "Spring Break", current: 150, target: 600, deadline: "Feb 2025", progress: 25 },
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Interactive Goals
          </div>
          <Button 
            size="sm" 
            onClick={() => setShowForm(!showForm)}
            className="animate-pulse-glow"
          >
            <Plus className="w-4 h-4 mr-1" />
            New Goal
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {showForm && (
          <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-success/5 border border-primary/20 animate-slide-up">
            <h4 className="font-semibold mb-4 text-primary">Create Your Goal</h4>
            <div className="space-y-4">
              <Input placeholder="Goal name (e.g., New Gaming Setup)" />
              
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Target Amount: ${goalAmount[0]}
                </label>
                <Slider
                  value={goalAmount}
                  onValueChange={setGoalAmount}
                  max={5000}
                  min={100}
                  step={50}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Timeline: {timeline[0]} months
                </label>
                <Slider
                  value={timeline}
                  onValueChange={setTimeline}
                  max={24}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-center gap-2 text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">Monthly Target: ${monthlyTarget}</span>
                </div>
                <p className="text-xs text-success/80 mt-1">
                  Save ${monthlyTarget} per month to reach your goal!
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1">Create Goal</Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {activeGoals.map((goal, index) => (
            <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-card to-muted/20 border hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold">{goal.name}</h4>
                  <p className="text-sm text-muted-foreground">Due: {goal.deadline}</p>
                </div>
                <Badge variant={goal.progress > 50 ? "default" : "secondary"}>
                  {Math.round(goal.progress)}%
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>${goal.current}</span>
                  <span>${goal.target}</span>
                </div>
                <Progress value={goal.progress} className="h-3" />
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">
                    ${goal.target - goal.current} remaining
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveGoalSetting;