import { Button } from "@/components/ui/button";
import { AIAgentIndicator } from "@/components/AIAgentIndicator";
import { StatusBadge } from "@/components/StatusBadge";
import { Navigation } from "@/components/Navigation";
import { 
  Upload, 
  Map, 
  Satellite, 
  Shield, 
  TrendingUp, 
  Users,
  CheckCircle,
  ArrowRight,
  Eye
} from "lucide-react";
import heroImage from "@/assets/hero-sar-analysis.jpg";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Satellite className="h-8 w-8 text-accent" />
                <h1 className="text-2xl font-bold text-primary">Hackronauts</h1>
              </div>
              <StatusBadge status="active" label="Live" />
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient opacity-90" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="max-w-5xl mx-auto">
            {/* AI Agent Indicator */}
            <div className="flex justify-center mb-8">
              <AIAgentIndicator label="Change Detection Engine" status="active" />
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Detect Earth's Changes 
              <span className="block text-teal-secondary">Before They Become</span>
              <span className="block text-accent">Disasters</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              AI-powered SAR image analysis for deforestation, urban sprawl, and flood zones. 
              Empowering government and disaster response agencies with real-time insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Upload className="mr-2 h-5 w-5" />
                Upload SAR Image
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                <Eye className="mr-2 h-5 w-5" />
                View Live Map
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
              <div className="flex items-center justify-center gap-3">
                <Shield className="h-6 w-6 text-accent" />
                <span className="font-medium">Government Certified</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <TrendingUp className="h-6 w-6 text-accent" />
                <span className="font-medium">99.7% Accuracy</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Users className="h-6 w-6 text-accent" />
                <span className="font-medium">50+ Agencies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Modular AI-Powered Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each module is powered by specialized AI agents working together to provide comprehensive analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Upload & Preprocessing */}
            <div className="dashboard-card text-center">
              <div className="flex justify-center mb-4">
                <AIAgentIndicator label="Preprocessing Bot" status="processing" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Smart Upload</h3>
              <p className="text-muted-foreground mb-4">
                Automated denoising, normalization, and alignment of SAR images
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-status-processing">
                <CheckCircle className="h-4 w-4" />
                <span>Cloud & Drag-Drop Support</span>
              </div>
            </div>

            {/* Change Detection */}
            <div className="dashboard-card text-center">
              <div className="flex justify-center mb-4">
                <AIAgentIndicator label="Change Detection Bot" status="active" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Change Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Side-by-side comparison with severity scoring and zone highlighting
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-status-active">
                <CheckCircle className="h-4 w-4" />
                <span>Real-time Detection</span>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="dashboard-card text-center">
              <div className="flex justify-center mb-4">
                <AIAgentIndicator label="GeoMapper" status="active" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Live Mapping</h3>
              <p className="text-muted-foreground mb-4">
                Interactive overlays with time-lapse playback and regional filters
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-status-active">
                <CheckCircle className="h-4 w-4" />
                <span>Time-lapse Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}