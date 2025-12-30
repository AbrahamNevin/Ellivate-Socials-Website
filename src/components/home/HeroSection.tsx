import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Performance Marketing Agency
            </span>
          </div> */}

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            We Don't Just Market Brands.{" "}
            <span className="text-gradient">We Ellivate Them.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Performance-driven social media & digital marketing for brands that
            want real growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book a Free Strategy Call
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="#portfolio">
                <Play size={18} />
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border animate-fade-up delay-400">
            {[
              { value: "4", label: "Brands Scaled" },
              { value: "10M+", label: "Reach Generated" },
              { value: "10x", label: "Average ROAS" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
