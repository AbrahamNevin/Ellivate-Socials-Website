import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-heading font-bold text-foreground">
                Ellivate
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xl font-heading font-bold text-foreground">
                Socials
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Performance-driven digital marketing for brands that want real growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ellivatesocials?igsh=MXZzeW96c3N6Y2Nldg=="
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/109106054/admin/dashboard/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Social Media Marketing",
                "Performance Ads",
                "Content Strategy",
                "Lead Generation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                elivate.socials@gmail.com
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary" />
                +91 9359217607
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>Global Remote Agency</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Ellivate Socials. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
