"use client";

import { Card, CardContent } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Clock } from "lucide-react";

interface ServiceCardProps {
  name: string;
  status: "online" | "offline" | "warning";
  responseTime: number;
  onClick?: () => void;
}

export function ServiceCard({
  name,
  status,
  responseTime,
  onClick,
}: ServiceCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";
      case "warning":
        return "bg-warning/10 text-warning border-warning/20 hover:bg-warning/20";
      case "offline":
        return "bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online";
      case "warning":
        return "Warning";
      case "offline":
        return "Offline";
      default:
        return "Unknown";
    }
  };

  return (
    <Card
      className="cursor-pointer py-0 transition-all duration-200 hover:bg-accent/30 hover:shadow-lg hover:scale-[1.02] border-sidebar-border/50 backdrop-blur-sm w-72 lg:w-[380px] lg:h-[200px] flex-shrink-0"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div
                  className={`w-4 h-4 rounded-full ${
                    status === "online"
                      ? "bg-success/70"
                      : status === "warning"
                      ? "bg-warning"
                      : "bg-destructive"
                  } shadow-sm animate-pulse`}
                />
                <div
                  className={`absolute inset-0 w-4 h-4 rounded-full ${
                    status === "online"
                      ? "bg-primary/20"
                      : status === "warning"
                      ? "bg-warning/20"
                      : "bg-destructive/20"
                  } animate-ping`}
                />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Health monitoring service
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className={`${getStatusColor(
                status
              )} transition-colors px-3 py-1 font-medium`}
            >
              {getStatusText(status)}
            </Badge>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/10 rounded-lg p-3 border border-muted/20">
              <div className="flex items-center space-x-2 mb-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Response Time
                </span>
              </div>
              <div className="flex items-baseline space-x-1">
                <span
                  className={`text-2xl font-bold ${
                    responseTime < 100
                      ? "text-primary"
                      : responseTime < 500
                      ? "text-warning"
                      : "text-destructive"
                  }`}
                >
                  {responseTime}
                </span>
                <span className="text-sm text-muted-foreground">ms</span>
              </div>
            </div>

            <div className="bg-muted/10 rounded-lg p-3 border border-muted/20">
              <div className="flex items-center space-x-2 mb-1">
                <div className="h-4 w-4 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Last Check
                </span>
              </div>
              <div className="text-sm font-medium text-foreground">
                2 minutes ago
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
