import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Share2, 
  Target, 
  Video, 
  Users, 
  Sparkles,
  BarChart3,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic content creation and community management that builds engaged audiences and drives meaningful conversions.",
    features: ["Content Calendar Planning", "Community Management", "Engagement Optimization", "Brand Voice Development"],
  },
  {
    icon: Target,
    title: "Performance Ads",
    description: "Scalable Meta & Google campaigns built for leads, sales, and measurable ROI that grows with your business.",
    features: ["Meta Ads Management", "Google Ads Campaigns", "Retargeting Strategies", "Conversion Tracking"],
  },
  {
    icon: Video,
    title: "Content Strategy & Reels",
    description: "Scroll-stopping short-form video content that captures attention and tells your brand story effectively.",
    features: ["Reels Production", "Content Strategy", "Trend Analysis", "Viral Content Frameworks"],
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "High-quality lead funnels that consistently fill your pipeline with ready-to-buy prospects.",
    features: ["Funnel Development", "Landing Page Optimization", "Lead Nurturing", "CRM Integration"],
  },
  {
    icon: Sparkles,
    title: "Brand Positioning",
    description: "Strategic brand development that differentiates you in the market and resonates with your ideal audience.",
    features: ["Brand Strategy", "Visual Identity", "Market Positioning", "Competitor Analysis"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive insights and transparent reporting that keeps you informed and in control.",
    features: ["Performance Dashboards", "Monthly Reports", "ROI Analysis", "Growth Recommendations"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive insights and transparent reporting that keeps you informed and in control.",
    features: ["Performance Dashboards", "Monthly Reports", "ROI Analysis", "Growth Recommendations"],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Ellivate Socials</title>
        <meta 
          name="description" 
          content="Full-stack digital marketing services including social media marketing, performance ads, content strategy, lead generation, and brand positioning." 
        />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          <div className="container-section relative z-10">
            <div className="max-w-3xl">
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Full-Stack Growth Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to dominate digital and accelerate your brand's growth. 
                Results-focused strategies built for real business impact.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-card">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-8 lg:p-10 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container-section">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss which services are right for your business and build a custom growth strategy.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book a Free Strategy Call
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

export default Services;
