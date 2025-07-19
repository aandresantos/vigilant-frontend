"use client";

import { Plus, Server, Trash2, Edit } from "lucide-react";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Badge } from "@components/ui/badge";

// Mock data for services
const services = [
  {
    id: 1,
    name: "API Gateway",
    url: "https://api.example.com",
    status: "online" as const,
    responseTime: 45,
    lastCheck: "2 minutes ago",
  },
  {
    id: 2,
    name: "User Service",
    url: "https://users.example.com",
    status: "online" as const,
    responseTime: 120,
    lastCheck: "1 minute ago",
  },
  {
    id: 3,
    name: "Payment Service",
    url: "https://payments.example.com",
    status: "warning" as const,
    responseTime: 890,
    lastCheck: "30 seconds ago",
  },
  {
    id: 4,
    name: "Notification Service",
    url: "https://notifications.example.com",
    status: "offline" as const,
    responseTime: 0,
    lastCheck: "5 minutes ago",
  },
];

export default function ServicesPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-success/10 text-success border-success/20 hover:bg-success/20";
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

  const handleAddService = () => {
    console.log("Add new service");
    // Here you would open a modal or navigate to an add service form
  };

  const handleEditService = (serviceId: number) => {
    console.log(`Edit service ${serviceId}`);
    // Here you would open an edit modal or navigate to edit form
  };

  const handleDeleteService = (serviceId: number) => {
    console.log(`Delete service ${serviceId}`);
    // Here you would show a confirmation dialog and delete the service
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Services</h1>
          <p className="text-muted-foreground">
            Manage and monitor all your services
          </p>
        </div>
        <Button
          onClick={handleAddService}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      <div className="grid gap-4">
        {services.map((service) => (
          <Card
            key={service.id}
            className="border-sidebar-border/50 hover:bg-accent/20 transition-all duration-200 hover:shadow-md backdrop-blur-sm"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Server className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-foreground">
                      {service.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {service.url}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditService(service.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteService(service.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <Badge
                    variant="outline"
                    className={`${getStatusColor(
                      service.status
                    )} transition-colors`}
                  >
                    {getStatusText(service.status)}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground bg-muted/20 px-2 py-1 rounded-md">
                    <span>Response:</span>
                    <span className="font-medium">
                      {service.responseTime}ms
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground bg-muted/20 px-2 py-1 rounded-md">
                    <span>Last check:</span>
                    <span className="font-medium">{service.lastCheck}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
