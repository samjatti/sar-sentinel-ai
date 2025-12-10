import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap,
  CheckCircle,
  ArrowLeft,
  Sparkles
} from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "",
      description: "Perfect for exploring EduBee",
      features: [
        "Sample notes access",
        "Limited explanation videos",
        "Basic PYQ analysis",
        "Community support"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Subject Pack",
      price: "₹199",
      period: "/subject",
      description: "Complete access to one subject",
      features: [
        "Full notes of all units",
        "All animated videos",
        "Complete paper analysis",
        "Predicted questions",
        "Revision sheets",
        "Flowcharts & diagrams"
      ],
      buttonText: "Buy Now",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Semester Bundle",
      price: "₹799",
      period: "/semester",
      description: "All subjects for one semester",
      features: [
        "All subject packs included",
        "Priority support",
        "Early access to new content",
        "Crash course access",
        "Exam strategy sessions",
        "Downloadable content"
      ],
      buttonText: "Best Value",
      buttonVariant: "default" as const,
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What subjects are available?",
      answer: "We currently have 6+ subjects ready with more being added. All content is aligned with SPPU syllabus for engineering students."
    },
    {
      question: "Can I access content offline?",
      answer: "Yes! Premium users can download notes and videos for offline access."
    },
    {
      question: "How are the notes created?",
      answer: "All notes are created by institute toppers and reviewed by subject experts to ensure quality and accuracy."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 7-day refund if you're not satisfied with the content quality."
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
            Simple,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Affordable</span>{" "}
            Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quality education shouldn't break the bank. Choose the plan that fits your needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl border-2 relative ${
                  plan.popular 
                    ? "bg-gradient-to-br from-primary/5 to-accent/5 border-primary" 
                    : "bg-card border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                )}
                
                <div className="text-sm font-medium text-muted-foreground mb-2">{plan.name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-primary to-accent hover:opacity-90" : ""}`}
                  variant={plan.buttonVariant}
                  asChild
                >
                  <Link to="/signup">{plan.buttonText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
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
