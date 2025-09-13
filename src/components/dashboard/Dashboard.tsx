import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wallet, 
  Target, 
  TrendingUp, 
  AlertTriangle,
  Coffee,
  BookOpen,
  Car,
  Home,
  Utensils,
  Star,
  Plus,
  Settings,
  Trophy
} from "lucide-react";

import AchievementBadge from "@/components/gamification/AchievementBadge";
import SavingsChallenge from "@/components/gamification/SavingsChallenge";
import InteractiveGoalSetting from "@/components/goals/InteractiveGoalSetting";
import SmartAlerts from "@/components/alerts/SmartAlerts";
import PrivacySettings from "@/components/privacy/PrivacySettings";

const Dashboard = () => {
  // Mock data for student expenses
  const totalBudget = 1200;
  const spent = 856;
  const remaining = totalBudget - spent;
  const progressPercentage = (spent / totalBudget) * 100;

  const expenses = [
    { category: "Food & Dining", amount: 245, icon: Utensils, color: "text-orange-500" },
    { category: "Transportation", amount: 180, icon: Car, color: "text-blue-500" },
    { category: "Books & Supplies", amount: 320, icon: BookOpen, color: "text-purple-500" },
    { category: "Coffee & Snacks", amount: 85, icon: Coffee, color: "text-amber-500" },
    { category: "Housing", amount: 26, icon: Home, color: "text-green-500" }
  ];

  const achievements = [
    { type: "streak" as const, title: "7-Day Streak", description: "Tracked expenses for 7 days", unlocked: true },
    { type: "goal" as const, title: "Goal Achiever", description: "Reached your first savings goal", unlocked: true },
    { type: "saver" as const, title: "Smart Saver", description: "Saved $100 this month", unlocked: false },
    { type: "budgeter" as const, title: "Budget Master", description: "Stayed under budget for 3 months", unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground animate-slide-up">Hi Sarah! 👋</h1>
            <p className="text-muted-foreground">Let's check your financial progress today</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge className="bg-success text-success-foreground">
                <Trophy className="w-3 h-3 mr-1" />
                2 achievements unlocked
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 animate-pulse-glow">
              <Plus className="w-4 h-4 mr-2" />
              Add Expense
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Wallet className="w-5 h-5" />
                Monthly Budget
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-3xl font-bold">${remaining}</div>
                <div className="text-sm opacity-90">remaining of ${totalBudget}</div>
                <Progress value={progressPercentage} className="bg-primary-foreground/20" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success to-success/80 text-success-foreground shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="w-5 h-5" />
                Savings Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm opacity-90">active goals</div>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warning to-warning/80 text-warning-foreground shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5" />
                This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-3xl font-bold">${spent}</div>
                <div className="text-sm opacity-90">total spent</div>
                <Badge variant="secondary" className="bg-warning-foreground/20 text-warning-foreground">
                  On track!
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Expense Categories */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    Expense Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {expenses.map((expense, index) => {
                    const Icon = expense.icon;
                    return (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full bg-background ${expense.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{expense.category}</span>
                        </div>
                        <span className="font-bold text-lg">${expense.amount}</span>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-gamify" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.slice(0, 2).map((achievement, index) => (
                    <AchievementBadge key={index} {...achievement} />
                  ))}
                  <Button variant="outline" className="w-full">
                    View All Achievements
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals">
            <InteractiveGoalSetting />
          </TabsContent>

          <TabsContent value="challenges">
            <SavingsChallenge />
          </TabsContent>

          <TabsContent value="alerts">
            <SmartAlerts />
          </TabsContent>

          <TabsContent value="privacy">
            <PrivacySettings />
          </TabsContent>
        </Tabs>

        {/* Smart Insights */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Smart Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-accent/50 border border-accent">
                <h4 className="font-semibold text-accent-foreground mb-2">Coffee Spending Alert</h4>
                <p className="text-sm text-accent-foreground/80">
                  You're spending 15% more on coffee this month. Consider brewing at home to save $40!
                </p>
              </div>
              <div className="p-4 rounded-lg bg-success/10 border border-success/30">
                <h4 className="font-semibold text-success mb-2">Great Progress!</h4>
                <p className="text-sm text-success/80">
                  You're 23% ahead on your laptop savings goal. Keep it up!
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-secondary">
                <h4 className="font-semibold text-secondary-foreground mb-2">Budget Tip</h4>
                <p className="text-sm text-secondary-foreground/80">
                  Based on your pattern, you'll have $127 left by month-end. Perfect for your emergency fund!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;