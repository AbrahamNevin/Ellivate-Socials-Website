import { 
  Share2, 
  Target, 
  Video, 
  Users, 
  Sparkles 
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic content and community management that builds engaged audiences and drives conversions.",
  },
  {
    icon: Target,
    title: "Performance Ads",
    description: "Data-driven Meta & Google campaigns built for leads, sales, and measurable ROI.",
  },
  {
    icon: Video,
    title: "Content Strategy & Reels",
    description: "Scroll-stopping short-form content that captures attention and tells your brand story.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "High-quality lead funnels that consistently fill your pipeline with ready-to-buy prospects.",
  },
  {
    icon: Sparkles,
    title: "Brand Positioning",
    description: "Strategic brand development that differentiates you and resonates with your ideal audience.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Full-Stack Growth Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to dominate digital and accelerate your brand's growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 card-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
