import { Satellite, Shield, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Satellite className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold text-white">Hackronauts</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              AI-powered SAR satellite image analysis platform for real-time change detection 
              and disaster response. Protecting communities through advanced earth observation.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-accent">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Real-time monitoring active</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Deforestation Detection</li>
              <li>Urban Growth Monitoring</li>
              <li>Flood Zone Analysis</li>
              <li>Disaster Response</li>
              <li>Climate Change Tracking</li>
            </ul>
          </div>

          {/* Agency Partners */}
          <div>
            <h3 className="font-semibold text-white mb-4">For Agencies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Government Services</li>
              <li>Emergency Response</li>
              <li>Environmental Protection</li>
              <li>API Integration</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Global Coverage</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground mt-4 md:mt-0">
              © 2024 Hackronauts. Built for a safer planet.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};