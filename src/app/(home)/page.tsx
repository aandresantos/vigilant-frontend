"use client";

import { ServiceCard } from "@components/service-card";

// Mock data for services
const services = [
  { id: 1, name: "API Gateway", status: "online" as const, responseTime: 45 },
  { id: 2, name: "User Service", status: "online" as const, responseTime: 120 },
  {
    id: 3,
    name: "Payment Service",
    status: "warning" as const,
    responseTime: 890,
  },
  {
    id: 4,
    name: "Notification Service",
    status: "offline" as const,
    responseTime: 0,
  },
  { id: 5, name: "Database", status: "online" as const, responseTime: 23 },
  { id: 6, name: "Cache Service", status: "online" as const, responseTime: 12 },
];

export default function HomePage() {
  const handleServiceClick = (serviceName: string) => {
    console.log(`Clicked on ${serviceName}`);
    // Here you would typically navigate to a detailed view or show a modal
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your services health status in real-time
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Service Statistics
        </h2>
        <div className="flex flex-col gap-4">
          <div className="bg-card border border-sidebar-border/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Services
                </p>
                <p className="text-2xl font-bold text-foreground">6</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-card border border-sidebar-border/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Online Services
                  </p>
                  <p className="text-2xl font-bold text-primary">4</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-sidebar-border/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Offline Services
                  </p>
                  <p className="text-2xl font-bold text-destructive">1</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-sidebar-border/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Warning Services
                  </p>
                  <p className="text-2xl font-bold text-warning">1</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-warning animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Services Overview
        </h2>
        <div className="flex flex-wrap gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              status={service.status}
              responseTime={service.responseTime}
              onClick={() => handleServiceClick(service.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
