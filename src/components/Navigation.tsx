import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Upload, 
  Search, 
  Clock, 
  Settings, 
  AlertTriangle, 
  Map,
  Activity
} from "lucide-react";

const navItems = [
  { path: "/", label: "Overview", icon: Activity },
  { path: "/upload", label: "Upload", icon: Upload },
  { path: "/dashboard", label: "Detection", icon: Search },
  { path: "/timeline", label: "Timeline", icon: Clock },
  { path: "/alerts", label: "Alerts", icon: AlertTriangle },
  { path: "/map", label: "Map", icon: Map },
  { path: "/audit", label: "Audit", icon: Settings },
];

export function Navigation() {
  return (
    <nav className="flex items-center gap-1 p-1 bg-muted rounded-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                isActive
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )
            }
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}