import Navigation from '@/components/Navigation';
import FloatingButtons from '@/components/FloatingButtons';
import ServicesSection from '@/components/sections/ServicesSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Wrench, 
  Settings, 
  Bug, 
  Shield, 
  Zap, 
  Droplets,
  Scissors,
  Car,
  Hammer,
  Trash2,
  TreePine
} from 'lucide-react';

const Services = () => {
  const detailedServices = [
    {
      category: "Soft Facility Management",
      icon: <Sparkles className="w-6 h-6" />,
      services: [
        { icon: <Sparkles className="w-5 h-5" />, name: "Office Cleaning", description: "Daily, weekly, and deep cleaning services" },
        { icon: <Shield className="w-5 h-5" />, name: "Security Services", description: "Professional security guard services" },
        { icon: <TreePine className="w-5 h-5" />, name: "Landscaping", description: "Garden maintenance and beautification" },
        { icon: <Trash2 className="w-5 h-5" />, name: "Waste Management", description: "Efficient waste collection and disposal" },
        { icon: <Scissors className="w-5 h-5" />, name: "Housekeeping", description: "Comprehensive housekeeping solutions" }
      ]
    },
    {
      category: "Hard Facility Management", 
      icon: <Wrench className="w-6 h-6" />,
      services: [
        { icon: <Zap className="w-5 h-5" />, name: "Electrical Services", description: "Installation, repair, and maintenance" },
        { icon: <Droplets className="w-5 h-5" />, name: "Plumbing Services", description: "Professional plumbing solutions" },
        { icon: <Settings className="w-5 h-5" />, name: "HVAC Maintenance", description: "Heating, ventilation, and AC services" },
        { icon: <Hammer className="w-5 h-5" />, name: "General Maintenance", description: "Building and equipment maintenance" },
        { icon: <Car className="w-5 h-5" />, name: "Elevator Services", description: "Elevator maintenance and repair" }
      ]
    },
    {
      category: "Specialized Services",
      icon: <Bug className="w-6 h-6" />,
      services: [
        { icon: <Bug className="w-5 h-5" />, name: "Pest Control", description: "Comprehensive pest management solutions" },
        { icon: <Zap className="w-5 h-5" />, name: "Appliance Repair", description: "Professional appliance repair services" },
        { icon: <Droplets className="w-5 h-5" />, name: "Water Tank Cleaning", description: "Hygienic water system maintenance" },
        { icon: <Sparkles className="w-5 h-5" />, name: "Carpet Cleaning", description: "Deep carpet and upholstery cleaning" },
        { icon: <Shield className="w-5 h-5" />, name: "Disinfection Services", description: "Professional sanitization services" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Comprehensive Facility Management Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From routine maintenance to specialized services, we provide integrated solutions 
              tailored to meet your facility's unique needs across Kenya.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+254722566999">Get Free Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Detailed Service Offerings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of services designed to keep your 
              facilities operating at peak efficiency.
            </p>
          </div>

          <div className="space-y-12">
            {detailedServices.map((category, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      {category.icon}
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start gap-4 p-4 bg-background rounded-lg hover:shadow-soft transition-all duration-300">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">{service.name}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Choose Bestcare Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg text-primary mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-muted-foreground">
                  All services come with quality assurance and satisfaction guarantee
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg text-primary mx-auto mb-4">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Professional Team</h3>
                <p className="text-sm text-muted-foreground">
                  Trained and experienced professionals with proper certifications
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg text-primary mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">24/7 Emergency</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock emergency support for urgent facility issues
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your facility management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+254722566999">Call +254722566999</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:info@bestcareservices.co.ke">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
};

export default Services;