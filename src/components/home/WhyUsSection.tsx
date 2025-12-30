import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Results-First Mindset",
    description: "Every strategy is built around measurable outcomes—not vanity metrics.",
  },
  {
    title: "Data-Driven Strategies",
    description: "We let the numbers guide decisions, optimizing for what actually works.",
  },
  {
    title: "Creatives Built to Convert",
    description: "Scroll-stopping content designed to turn viewers into customers.",
  },
  {
    title: "Transparent Communication",
    description: "No jargon, no hidden agendas—just honest updates and clear reporting.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Why Ellivate Socials?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We're not just another agency. We're your growth partner—focused on
              performance, clarity, and real business impact.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
            <div className="relative bg-background border border-border rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Support Available" },
                  { value: "30+", label: "Industries Served" },
                  { value: "5★", label: "Average Rating" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-6 rounded-xl bg-secondary"
                  >
                    <p className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
