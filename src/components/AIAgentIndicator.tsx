import { Bot, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIAgentIndicatorProps {
  label: string;
  status?: "active" | "processing" | "idle";
  className?: string;
}

export function AIAgentIndicator({ label, status = "active", className }: AIAgentIndicatorProps) {
  const statusConfig = {
    active: { color: "text-status-active", pulse: false },
    processing: { color: "text-status-processing", pulse: true },
    idle: { color: "text-muted-foreground", pulse: false }
  };

  const config = statusConfig[status];

  return (
    <div className={cn("ai-agent-indicator", className)}>
      <div className="relative">
        <Bot className={cn("h-4 w-4", config.color)} />
        {config.pulse && (
          <Activity className="absolute -top-0.5 -right-0.5 h-2 w-2 text-status-processing animate-pulse" />
        )}
      </div>
      <span className="font-medium">{label}</span>
    </div>
  );
}