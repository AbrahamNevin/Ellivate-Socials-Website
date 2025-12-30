import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    goal: "",
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed");

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      business: "",
      goal: "",
    });
  } catch (err) {
    toast({
      title: "Error",
      description: "Something went wrong. Try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Ellivate Socials</title>
        <meta 
          name="description" 
          content="Get in touch with Ellivate Socials. Book a free strategy call and start your growth journey today." 
        />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-background relative overflow-hidden min-h-screen">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container-section relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Content */}
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                  Get in Touch
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Start Your <span className="text-gradient">Growth Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12">
                  Ready to ellivate your brand? Fill out the form and we'll get back to you 
                  within 24 hours with a custom strategy proposal.
                </p>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">elivate.socials@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+91 9359217607</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">Global Remote Agency</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-10">
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="https://wa.me/9359217607" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Form */}
              <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Book a Free Strategy Call
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                      Business Name
                    </label>
                    <Input
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your Company"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-foreground mb-2">
                      What's Your Goal?
                    </label>
                    <Textarea
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      placeholder="Tell us about your marketing goals and challenges..."
                      rows={4}
                      required
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Start Your Growth Journey
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
