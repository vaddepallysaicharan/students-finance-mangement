import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Coffee, Calendar, X, CheckCircle } from "lucide-react";

const SmartAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "warning",
      icon: Coffee,
      title: "Coffee Budget Alert",
      message: "You're 20% over your coffee budget this week. Try brewing at home to save $15!",
      action: "View Coffee Spending",
      priority: "medium",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "success",
      icon: TrendingUp,
      title: "Great Progress!",
      message: "You're ahead on your laptop savings goal by $50. Keep up the momentum!",
      action: "View Goal",
      priority: "low",
      time: "1 day ago",
    },
    {
      id: 3,
      type: "info",
      icon: Calendar,
      title: "Upcoming Bill",
      message: "Your subscription payment of $9.99 is due tomorrow. Make sure you have sufficient funds.",
      action: "Manage Subscriptions",
      priority: "high",
      time: "Just now",
    },
  ];

  const getAlertStyles = (type: string, priority: string) => {
    const base = "p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02]";
    
    if (type === "warning") {
      return `${base} bg-warning/10 border-warning/30 ${priority === "high" ? "animate-pulse-glow" : ""}`;
    }
    if (type === "success") {
      return `${base} bg-success/10 border-success/30`;
    }
    return `${base} bg-primary/10 border-primary/30 ${priority === "high" ? "animate-bounce-subtle" : ""}`;
  };

  const getIconColor = (type: string) => {
    if (type === "warning") return "text-warning";
    if (type === "success") return "text-success";
    return "text-primary";
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-warning" />
          Smart Alerts
          <Badge variant="secondary" className="ml-auto">
            {alerts.length} new
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <div key={alert.id} className={getAlertStyles(alert.type, alert.priority)}>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full bg-background ${getIconColor(alert.type)}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm">{alert.title}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                      <Button size="sm" variant="ghost" className="p-1 h-6 w-6">
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{alert.message}</p>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      {alert.action}
                    </Button>
                    <Button size="sm" variant="ghost" className="text-xs p-1">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Mark as Read
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="pt-4 border-t">
          <Button variant="outline" className="w-full">
            View All Notifications
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmartAlerts;