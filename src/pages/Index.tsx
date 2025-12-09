import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Rocket, HeadphonesIcon, ArrowRight, CheckCircle2, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="../public/logo.png"/>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Darlington Digital Services</h1>
              <p className="text-xs text-muted-foreground">DDS</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="text-foreground hover:text-primary transition-colors">Why Us</a>
            <a href="#case-studies" className="text-foreground hover:text-primary transition-colors">Case Studies</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="default" size="sm" className="hidden md:flex">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-accent)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <span className="text-sm font-medium text-primary">Digital Transformation Made Simple</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Empowering Your Business Through{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert consulting, seamless project delivery, and reliable ongoing support for your digital systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="text-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="text-lg" >
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6">
                  <Settings className="h-7 w-7 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">Digital Consulting</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Strategic guidance to navigate your digital transformation journey. We analyze your needs and create actionable roadmaps for success.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Digital strategy development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Technology assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Process optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-6">
                  <Rocket className="h-7 w-7 text-accent-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">Project Delivery</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  End-to-end implementation of digital solutions. From planning to deployment, we ensure your projects succeed on time and within budget.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Agile project management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Custom system development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Integration services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <HeadphonesIcon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">Ongoing Support</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Reliable maintenance and support for your digital systems. We keep your technology running smoothly so you can focus on your business.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Ongoing maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">System updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Technical expansion </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why Choose DDS?</h3>
              <p className="text-lg text-muted-foreground">
                Experience, expertise, and a commitment to your success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Proven Expertise</h4>
                  <p className="text-muted-foreground">
                    Years of experience delivering successful digital transformation projects across industries.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Tailored Solutions</h4>
                  <p className="text-muted-foreground">
                    Every business is unique. We customize our approach to match your specific needs and goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">End-to-End Support</h4>
                  <p className="text-muted-foreground">
                    From initial consultation to ongoing maintenance, we're with you every step of the way.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Results-Driven</h4>
                  <p className="text-muted-foreground">
                    We focus on delivering measurable outcomes that drive real business value and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Success Stories</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from digital transformation projects we've delivered
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Case Study 1 */}
            <Card className="border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                    <Settings className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    Manufacturing
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">Legacy System Modernization</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Transformed a 20-year-old manufacturing system into a modern cloud-based platform, improving operational efficiency by 45%.
                  </p>
                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-foreground">6-month delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-foreground">45% efficiency gain</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-foreground">Zero downtime migration</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center backdrop-blur-sm">
                    <Rocket className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                    Healthcare
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">Digital Patient Portal</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Built a comprehensive patient management system serving 50,000+ users with seamless appointment booking and medical records access.
                  </p>
                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-foreground">50K+ active users</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-foreground">98% user satisfaction</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-foreground">HIPAA compliant</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3 */}
            <Card className="border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                    <HeadphonesIcon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    Retail
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">E-commerce Platform Integration</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Integrated multiple sales channels into a unified system, increasing revenue by 60% and reducing order processing time by 70%.
                  </p>
                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-foreground">60% revenue increase</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-foreground">70% faster processing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-foreground">Multi-channel sync</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-12 md:p-16 shadow-[var(--shadow-soft)]">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how Darlington Digital Services can help you achieve your digital goals.
              </p>
              <a href="mailto:hello@darlingtondigital.co.uk">
                <Button size="lg" variant="secondary" className="text-lg shadow-lg hover:shadow-xl transition-all">
                  <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
              <img src="../public/logo.png"/>
              </div>
              <div>
                <p className="font-bold text-foreground">Darlington Digital Services</p>
                <p className="text-xs text-muted-foreground">Digital Excellence, Delivered</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#why-us" className="hover:text-primary transition-colors">Why Us</a>
              <a href="#case-studies" className="hover:text-primary transition-colors">Case Studies</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DDS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
