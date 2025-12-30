import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Strategy First",
    description: "Every campaign begins with a clear strategy aligned to your business goals—not just tactics.",
  },
  {
    icon: Target,
    title: "Precision Execution",
    description: "We focus on what works. No vanity metrics, no fluff—just performance that moves the needle.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "We're constantly testing, learning, and optimizing. Stagnation isn't in our vocabulary.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "Your success is our success. We operate as an extension of your team, not just a vendor.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Ellivate Socials</title>
        <meta 
          name="description" 
          content="Learn about Ellivate Socials - a performance-driven digital marketing agency focused on strategy, execution, and real business growth." 
        />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          <div className="container-section relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  We Build Brands That <span className="text-gradient">Perform</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Ellivate Socials is a performance-driven digital marketing agency for brands 
                  that refuse to blend in. We combine strategic thinking with relentless execution 
                  to deliver real, measurable growth.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
                <div className="relative grid grid-cols-2 gap-6">
                  {[
                    { value: "50+", label: "Brands Ellivated" },
                    { value: "5+", label: "Years Experience" },
                    { value: "10x", label: "Average ROI" },
                    { value: "100%", label: "Client Focus" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-8 rounded-xl bg-card border border-border text-center"
                    >
                      <p className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-card">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg prose-invert mx-auto">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Ellivate Socials was born from a simple frustration: too many agencies focus on 
                  vanity metrics instead of real business outcomes. We saw brands spending thousands 
                  on marketing that looked good on paper but failed to move the needle.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  So we built something different. An agency that obsesses over performance. 
                  That measures success in revenue, not just reach. That treats every client's 
                  budget like our own.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, we partner with ambitious brands across industries—helping them cut through 
                  the noise, connect with their audience, and achieve growth that actually matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card">
          <div className="container-section">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Let's Build Something Great
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to work with a team that's as invested in your success as you are?
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Start Your Growth Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
