import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Clock, AlertTriangle } from "lucide-react";

interface StatusBadgeProps {
  status: "active" | "warning" | "critical" | "processing";
  label: string;
  className?: string;
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const statusConfig = {
    active: { icon: CheckCircle, className: "status-active" },
    warning: { icon: AlertTriangle, className: "status-warning" },
    critical: { icon: AlertCircle, className: "status-critical" },
    processing: { icon: Clock, className: "status-processing" }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={cn("status-badge", config.className, className)}>
      <Icon className="h-3 w-3" />
      <span>{label}</span>
    </div>
  );
}