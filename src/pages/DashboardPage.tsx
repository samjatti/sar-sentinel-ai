import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AIAgentIndicator } from "@/components/AIAgentIndicator";
import { StatusBadge } from "@/components/StatusBadge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { 
  Filter, 
  Trees, 
  Building, 
  Droplets,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export default function DashboardPage() {
  const [showUrban, setShowUrban] = useState(true);
  const [showFlood, setShowFlood] = useState(true);
  const [showForest, setShowForest] = useState(true);
  const [severityThreshold, setSeverityThreshold] = useState([75]);

  const changeZones = [
    { id: 1, type: "Forest Loss", severity: 85, location: "Amazon Basin", area: "2.3 km²" },
    { id: 2, type: "Urban Growth", severity: 92, location: "Delhi NCR", area: "1.8 km²" },
    { id: 3, type: "Flood Zone", severity: 78, location: "Bangladesh Coast", area: "4.1 km²" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-primary">Change Detection Dashboard</h1>
            <AIAgentIndicator label="Change Detection Bot" status="active" />
          </div>
          <p className="text-muted-foreground">
            AI-powered analysis of SAR image changes with severity scoring and zone highlighting
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Image Viewer */}
          <div className="xl:col-span-2 dashboard-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-primary">Before vs After Analysis</h2>
              <div className="flex items-center gap-2">
                <StatusBadge status="active" label="Live Analysis" />
                <AIAgentIndicator label="Reasoning Engine" status="processing" />
              </div>
            </div>

            {/* Image Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Before (Baseline)</h3>
                <div className="aspect-video bg-muted rounded-lg border border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/20 to-navy-medium/30" />
                  <div className="absolute bottom-2 left-2">
                    <StatusBadge status="active" label="2024-08-15" />
                  </div>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-muted-foreground">SAR Baseline Image</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">After (Current)</h3>
                <div className="aspect-video bg-muted rounded-lg border border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-status-critical/20 to-status-warning/30" />
                  <div className="absolute bottom-2 left-2">
                    <StatusBadge status="warning" label="2024-09-18" />
                  </div>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-muted-foreground">SAR Current Image</span>
                  </div>
                  {/* Change Zones Overlay */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <div className="w-16 h-8 bg-status-critical/80 rounded border border-status-critical" />
                    <div className="w-12 h-6 bg-status-warning/80 rounded border border-status-warning" />
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Change Type Filters
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-status-warning" />
                    <span className="font-medium">Urban Growth</span>
                  </div>
                  <Switch checked={showUrban} onCheckedChange={setShowUrban} />
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-status-processing" />
                    <span className="font-medium">Flood Zones</span>
                  </div>
                  <Switch checked={showFlood} onCheckedChange={setShowFlood} />
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-2">
                    <Trees className="h-4 w-4 text-status-critical" />
                    <span className="font-medium">Forest Loss</span>
                  </div>
                  <Switch checked={showForest} onCheckedChange={setShowForest} />
                </div>
              </div>

              {/* Severity Threshold */}
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium text-primary">Severity Threshold</label>
                  <span className="text-sm text-muted-foreground">{severityThreshold[0]}%</span>
                </div>
                <Slider
                  value={severityThreshold}
                  onValueChange={setSeverityThreshold}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Analysis Panel */}
          <div className="space-y-6">
            {/* AI Reasoning */}
            <div className="dashboard-card">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-ai-primary" />
                <h3 className="text-lg font-semibold text-primary">AI Analysis</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-status-critical/10 border border-status-critical/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Trees className="h-4 w-4 text-status-critical" />
                    <span className="font-medium text-status-critical">Forest Loss Detected</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    12% tree cover loss over 3 weeks in Amazon Basin region
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-status-warning/10 border border-status-warning/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-4 w-4 text-status-warning" />
                    <span className="font-medium text-status-warning">Urban Expansion</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    New construction activity spreading 800m eastward
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-status-processing/10 border border-status-processing/20">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-status-processing" />
                    <span className="font-medium text-status-processing">Confidence Score</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    97.3% accuracy with low false positive rate
                  </p>
                </div>
              </div>
            </div>

            {/* Detected Changes */}
            <div className="dashboard-card">
              <h3 className="text-lg font-semibold text-primary mb-4">Detected Changes</h3>
              
              <div className="space-y-3">
                {changeZones.map((zone) => (
                  <div key={zone.id} className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-primary">{zone.type}</span>
                      <StatusBadge 
                        status={zone.severity > 90 ? "critical" : zone.severity > 80 ? "warning" : "active"} 
                        label={`${zone.severity}%`} 
                      />
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>📍 {zone.location}</p>
                      <p>📏 Area: {zone.area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="dashboard-card">
              <h3 className="text-lg font-semibold text-primary mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Button variant="hero" size="sm" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Set Alert Threshold
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Droplets className="mr-2 h-4 w-4" />
                  View on Map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}