import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Bell, Lock, Database, UserCheck } from "lucide-react";

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    dataSharing: false,
    analytics: true,
    notifications: true,
    locationTracking: false,
    biometricAuth: false,
    dataEncryption: true,
  });

  const updateSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const privacyOptions = [
    {
      key: "dataSharing" as keyof typeof settings,
      title: "Data Sharing",
      description: "Share anonymized spending patterns to improve AI suggestions",
      icon: Database,
      critical: true,
    },
    {
      key: "analytics" as keyof typeof settings,
      title: "Usage Analytics",
      description: "Help us improve the app by sharing usage statistics",
      icon: Eye,
      critical: false,
    },
    {
      key: "notifications" as keyof typeof settings,
      title: "Smart Notifications",
      description: "Receive personalized budget alerts and insights",
      icon: Bell,
      critical: false,
    },
    {
      key: "locationTracking" as keyof typeof settings,
      title: "Location Services",
      description: "Enable location-based expense categorization",
      icon: UserCheck,
      critical: true,
    },
    {
      key: "biometricAuth" as keyof typeof settings,
      title: "Biometric Authentication",
      description: "Use fingerprint or face recognition for app access",
      icon: Lock,
      critical: false,
    },
    {
      key: "dataEncryption" as keyof typeof settings,
      title: "End-to-End Encryption",
      description: "Encrypt all financial data on your device",
      icon: Shield,
      critical: false,
    },
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Privacy & Security
          <Badge className="ml-auto bg-success text-success-foreground">
            Privacy First
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
          <h4 className="font-semibold text-primary mb-2">Your Data, Your Choice</h4>
          <p className="text-sm text-muted-foreground">
            We believe in complete transparency. You have full control over what data is shared and how it's used.
          </p>
        </div>

        <div className="space-y-4">
          {privacyOptions.map((option) => {
            const Icon = option.icon;
            const isEnabled = settings[option.key];
            
            return (
              <div 
                key={option.key}
                className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className={`
                  p-2 rounded-full 
                  ${isEnabled ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
                `}>
                  <Icon className="w-4 h-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{option.title}</h4>
                    {option.critical && (
                      <Badge variant="outline" className="text-xs">
                        Critical
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
                
                <Switch
                  checked={isEnabled}
                  onCheckedChange={() => updateSetting(option.key)}
                  className="flex-shrink-0"
                />
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t space-y-3">
          <Button variant="outline" className="w-full">
            Export My Data
          </Button>
          <Button variant="outline" className="w-full text-destructive hover:text-destructive">
            Delete All Data
          </Button>
        </div>

        <div className="p-3 rounded-lg bg-success/10 border border-success/20">
          <div className="flex items-center gap-2 text-success text-sm">
            <Shield className="w-4 h-4" />
            <span className="font-semibold">Your data is secure</span>
          </div>
          <p className="text-xs text-success/80 mt-1">
            All sensitive information is encrypted and stored locally on your device.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrivacySettings;