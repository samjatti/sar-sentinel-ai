import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Target,
  GraduationCap,
  CheckCircle,
  ArrowLeft,
  Brain,
  BarChart,
  Zap,
  FileImage,
  Clock
} from "lucide-react";

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: BookOpen,
      title: "Topper-Made Notes",
      description: "Get access to high-quality handwritten and digital notes created by institute toppers who have excelled in their exams.",
      benefits: [
        "Notes for every unit of each subject",
        "Handwritten + digitalized formats",
        "Verified by subject experts",
        "Updated regularly with syllabus changes"
      ]
    },
    {
      icon: Video,
      title: "Animated Video Lessons",
      description: "Learn complex concepts easily with short, focused animated videos that make understanding faster.",
      benefits: [
        "Concept-focused short videos",
        "Visual explanations for tough topics",
        "Available offline after download",
        "Created by expert animators"
      ]
    },
    {
      icon: FileText,
      title: "PYP Analysis",
      description: "Complete previous year paper analysis with patterns identified and predicted questions for upcoming exams.",
      benefits: [
        "Multi-year paper analysis",
        "Pattern identification",
        "Predicted questions",
        "Topic-wise frequency analysis"
      ]
    },
    {
      icon: Target,
      title: "Exam Strategy",
      description: "Get comprehensive exam preparation strategies including important topics and time management tips.",
      benefits: [
        "Important topics highlighted",
        "Time management guides",
        "Last-minute revision tips",
        "Marking scheme insights"
      ]
    },
    {
      icon: Brain,
      title: "Mind Maps & Flowcharts",
      description: "Visual learning aids including mind maps, flowcharts, and diagrams for quick revision.",
      benefits: [
        "Chapter-wise mind maps",
        "Process flowcharts",
        "Concept diagrams",
        "Quick reference sheets"
      ]
    },
    {
      icon: Clock,
      title: "Quick Revision Content",
      description: "Chapter-wise summaries and quick revision content to help you revise huge syllabi before exams.",
      benefits: [
        "Chapter summaries",
        "Formula sheets",
        "Key points compilation",
        "One-pager per unit"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                EduBee
              </span>
            </Link>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Features That Help You{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Excel</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to ace your engineering exams, created by toppers who've been there
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Join EduBee today and get access to all these features
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/signup">Get Started Free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EduBeePortal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
