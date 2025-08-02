import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Sparkles, 
  Settings, 
  Shield, 
  Bug, 
  Zap,
  Droplets,
  Home,
  Building2,
  Factory
} from 'lucide-react';
import cleaningImage from '@/assets/cleaning-services.jpg';
import hardFacilitiesImage from '@/assets/hard-facilities.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Soft Facility Management",
      description: "Comprehensive cleaning, security, landscaping, and housekeeping services",
      features: ["Professional Cleaning", "Security Services", "Landscaping", "Waste Management"],
      image: cleaningImage
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Hard Facility Management", 
      description: "Technical maintenance, HVAC, electrical, and mechanical systems",
      features: ["HVAC Maintenance", "Electrical Services", "Plumbing", "Mechanical Systems"],
      image: hardFacilitiesImage
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Integrated Facility Management",
      description: "Complete end-to-end facility management solutions",
      features: ["Strategic Planning", "Cost Optimization", "Quality Assurance", "24/7 Support"],
      image: cleaningImage
    }
  ];

  const specializedServices = [
    { icon: <Bug className="w-6 h-6" />, title: "Pest Control Services", description: "Professional pest management" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Deep Cleaning Services", description: "Thorough sanitization" },
    { icon: <Zap className="w-6 h-6" />, title: "Appliance Repair", description: "Expert repair services" },
    { icon: <Droplets className="w-6 h-6" />, title: "Water Tank Cleaning", description: "Hygienic water systems" },
    { icon: <Shield className="w-6 h-6" />, title: "Security Services", description: "24/7 security solutions" },
    { icon: <Home className="w-6 h-6" />, title: "Residential Services", description: "Home maintenance" }
  ];

  const clientTypes = [
    { icon: <Home className="w-8 h-8" />, title: "Residential", description: "Apartments, condos, gated communities" },
    { icon: <Building2 className="w-8 h-8" />, title: "Commercial", description: "Offices, retail, hospitality" },
    { icon: <Factory className="w-8 h-8" />, title: "Industrial", description: "Manufacturing, warehouses, factories" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Comprehensive Facility Management Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine maintenance to specialized services, we provide integrated solutions 
            tailored to your facility's unique needs.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialized Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Specialized Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Types */}
        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Types of Clients We Serve</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg text-primary mx-auto mb-4">
                    {client.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">{client.title}</h4>
                  <p className="text-muted-foreground">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;