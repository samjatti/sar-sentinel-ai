import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap,
  ArrowLeft,
  Target,
  Users,
  Award,
  Heart
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Student-First",
      description: "Everything we create is designed with students' success in mind."
    },
    {
      icon: Award,
      title: "Quality Content",
      description: "Only topper-made, expert-verified content makes it to our platform."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a community of learners helping each other succeed."
    },
    {
      icon: Heart,
      title: "Affordable",
      description: "Quality education should be accessible to everyone."
    }
  ];

  const milestones = [
    { status: "✓", text: "Toppers shortlisted from institutes" },
    { status: "✓", text: "Notes created for 6+ subjects" },
    { status: "✓", text: "Animated video production started" },
    { status: "✓", text: "PYQ analysis for multiple years completed" },
    { status: "✓", text: "Brand finalized as 'EduBeePortal'" },
    { status: "✓", text: "Feedback collected from student groups" },
    { status: "→", text: "Phase-1 deployment ready" }
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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">EduBee</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to transform how engineering students learn by providing 
              high-quality, topper-made content that's perfectly aligned with university syllabi.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  Students often lack high-quality, reliable, easy-to-understand study materials. 
                  Many rely on incomplete class notes, outdated PDFs, or low-quality content.
                </p>
                <p className="text-muted-foreground">
                  EduBee was created to solve this problem by providing a single platform offering 
                  high-quality topper-made notes, animated videos, and exam-oriented resources 
                  in a simple, accessible format.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">What Makes Us Different</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Focus on SPPU syllabus accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Notes by real institute toppers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Short animated videos, not long lectures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accurate exam pattern analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    milestone.status === "✓" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}>
                    {milestone.status}
                  </div>
                  <span>{milestone.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Want to Join as a Topper?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Help students succeed by contributing your knowledge
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
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
