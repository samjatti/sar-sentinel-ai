import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Target,
  GraduationCap,
  Sparkles,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  ChevronRight,
  Play
} from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Topper-Made Notes",
      description: "High-quality handwritten & digital notes created by institute toppers for every unit"
    },
    {
      icon: Video,
      title: "Animated Videos",
      description: "Short, concept-focused animated videos for faster visual learning"
    },
    {
      icon: FileText,
      title: "PYP Analysis",
      description: "Complete previous year paper analysis with predicted questions"
    },
    {
      icon: Target,
      title: "Exam Strategy",
      description: "Important topics, flowcharts, mind maps & revision sheets"
    }
  ];

  const comparisons = [
    { edubee: "Notes made by institute toppers", others: "Generic notes not institute-specific" },
    { edubee: "Short animated concept videos", others: "Long theory videos, not concise" },
    { edubee: "Proper PYP analysis + predicted questions", others: "Lack of exam pattern analysis" },
    { edubee: "Aligned with SPPU syllabus", others: "Not aligned with college syllabus" },
    { edubee: "Very affordable pricing", others: "Expensive subscriptions" },
  ];

  const stats = [
    { value: "40L+", label: "Target Students" },
    { value: "6+", label: "Subjects Ready" },
    { value: "100%", label: "SPPU Aligned" },
    { value: "24/7", label: "Access" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                EduBee
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by Engineering Students</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Learn Smarter with{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Topper-Made
              </span>{" "}
              Content
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              High-quality notes, animated videos & exam resources created by institute toppers. 
              Aligned perfectly with SPPU syllabus.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6" asChild>
                <Link to="/signup">
                  Start Learning Free
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem Students Face</h2>
            <p className="text-lg text-muted-foreground">
              Engineering students struggle with incomplete notes, outdated content, and unpredictable exam patterns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "No structured notes for every unit",
              "Lack of topper-verified explanations",
              "No animated or visual learning content",
              "Poor paper analysis & unpredictable patterns",
              "Difficulty revising huge syllabi",
              "Low-quality YouTube content"
            ].map((problem, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20">
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-destructive text-sm">✕</span>
                </div>
                <span className="text-foreground">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Excel</h2>
            <p className="text-lg text-muted-foreground">
              EduBee delivers structured, easy-to-grasp content that saves time and boosts exam performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EduBee?</h2>
            <p className="text-lg text-muted-foreground">
              See how EduBee stands out from other platforms
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-primary/10 rounded-xl">
                <span className="font-bold text-primary text-lg">EduBee</span>
              </div>
              <div className="text-center p-4 bg-muted rounded-xl">
                <span className="font-bold text-muted-foreground text-lg">Other Platforms</span>
              </div>
            </div>
            
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mb-3">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-primary/20">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item.edubee}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <span className="text-destructive flex-shrink-0">✕</span>
                  <span className="text-sm text-muted-foreground">{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Affordable Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Start free, upgrade when you need more
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <div className="text-sm font-medium text-muted-foreground mb-2">FREE</div>
              <div className="text-4xl font-bold mb-4">₹0</div>
              <p className="text-muted-foreground mb-6">Perfect for getting started</p>
              <ul className="space-y-3 mb-8">
                {["Sample notes", "Some explanation videos", "Limited PYQ analysis"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
            
            {/* Premium Plan */}
            <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Most Popular
              </div>
              <div className="text-sm font-medium text-primary mb-2">PREMIUM</div>
              <div className="text-4xl font-bold mb-4">₹199<span className="text-lg text-muted-foreground">/subject</span></div>
              <p className="text-muted-foreground mb-6">Complete access to everything</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Full notes of all units",
                  "All animated videos",
                  "Complete paper analysis",
                  "Predicted questions",
                  "Revision sheets & flowcharts"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
                <Link to="/pricing">View All Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Ace Your Exams?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of students learning smarter with EduBee
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link to="/signup">
              Start Learning Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">EduBee</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering engineering students with topper-made content aligned with SPPU syllabus.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/subjects" className="hover:text-foreground transition-colors">Subjects</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Join as Topper</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} EduBeePortal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
