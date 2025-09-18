import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AIAgentIndicator } from "@/components/AIAgentIndicator";
import { StatusBadge } from "@/components/StatusBadge";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward,
  ZoomIn,
  ZoomOut,
  Layers,
  Filter,
  MapPin,
  Clock
} from "lucide-react";

export default function MapPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState([30]);
  const [zoomLevel, setZoomLevel] = useState(8);

  const overlayTypes = [
    { name: "Deforestation", active: true, color: "text-status-critical" },
    { name: "Urban Growth", active: true, color: "text-status-warning" },
    { name: "Flood Risk", active: false, color: "text-status-processing" },
    { name: "Heat Islands", active: false, color: "text-accent" }
  ];

  const regions = [
    { name: "Amazon Basin", alerts: 12, severity: "critical" },
    { name: "Delhi NCR", alerts: 8, severity: "warning" },
    { name: "Bangladesh Coast", alerts: 15, severity: "critical" },
    { name: "California Valley", alerts: 3, severity: "active" }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-primary">Interactive Map Visualization</h1>
            <AIAgentIndicator label="GeoMapper" status="active" />
          </div>
          <p className="text-muted-foreground">
            Full-screen mapping with overlays, time-lapse playback, and regional analysis
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Map Container */}
          <div className="xl:col-span-3">
            <div className="dashboard-card p-0 overflow-hidden">
              {/* Map Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold text-primary">Global Change Detection Map</h2>
                  <StatusBadge status="active" label="Live Data" />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Layers className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Map Visualization */}
              <div className="relative h-[600px] bg-gradient-to-br from-navy-deep via-navy-medium to-navy-light">
                {/* Mock World Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Continents as simplified shapes */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-20 bg-muted/30 rounded-2xl" />
                    <div className="absolute top-1/3 right-1/4 w-28 h-24 bg-muted/30 rounded-lg" />
                    <div className="absolute bottom-1/3 left-1/3 w-24 h-16 bg-muted/30 rounded-xl" />
                    
                    {/* Change Detection Zones */}
                    <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-status-critical/80 rounded-full animate-pulse border-2 border-status-critical">
                      <MapPin className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-status-warning/80 rounded-full animate-pulse border-2 border-status-warning" />
                    <div className="absolute bottom-1/2 left-1/2 w-10 h-10 bg-status-processing/80 rounded-full animate-pulse border-2 border-status-processing" />
                  </div>
                </div>

                {/* Time Indicator */}
                <div className="absolute top-4 left-4">
                  <div className="bg-background/90 backdrop-blur px-3 py-2 rounded-lg border border-border">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">2024-09-18 14:30 UTC</span>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-background/90 backdrop-blur p-3 rounded-lg border border-border">
                    <h4 className="text-sm font-semibold text-primary mb-2">Legend</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-status-critical rounded-full" />
                        <span>Forest Loss</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-status-warning rounded-full" />
                        <span>Urban Growth</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-status-processing rounded-full" />
                        <span>Flood Risk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time-lapse Controls */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="outline" size="sm">
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <SkipForward className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex-1 px-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary">Timeline</span>
                      <span className="text-sm text-muted-foreground">Day {timeProgress[0]} of 90</span>
                    </div>
                    <Slider
                      value={timeProgress}
                      onValueChange={setTimeProgress}
                      max={90}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Overlay Controls */}
            <div className="dashboard-card">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold text-primary">Map Overlays</h3>
              </div>
              
              <div className="space-y-3">
                {overlayTypes.map((overlay) => (
                  <div key={overlay.name} className="flex items-center justify-between p-2 rounded border border-border">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${overlay.color.replace('text-', 'bg-')}`} />
                      <span className="text-sm font-medium">{overlay.name}</span>
                    </div>
                    <div className={`w-4 h-4 rounded border-2 ${overlay.active ? 'bg-accent border-accent' : 'border-muted-foreground'}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Region Analysis */}
            <div className="dashboard-card">
              <h3 className="text-lg font-semibold text-primary mb-4">Regional Alerts</h3>
              
              <div className="space-y-3">
                {regions.map((region) => (
                  <div key={region.name} className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-primary">{region.name}</span>
                      <StatusBadge 
                        status={region.severity as any} 
                        label={`${region.alerts} alerts`} 
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Click to zoom to region
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Settings */}
            <div className="dashboard-card">
              <h3 className="text-lg font-semibold text-primary mb-4">View Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-primary">Zoom Level</label>
                    <span className="text-sm text-muted-foreground">{zoomLevel}x</span>
                  </div>
                  <Slider
                    value={[zoomLevel]}
                    onValueChange={([value]) => setZoomLevel(value)}
                    min={1}
                    max={20}
                    step={1}
                  />
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  Center on Current Location
                </Button>
                
                <Button variant="hero" size="sm" className="w-full">
                  Export Map View
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}