import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Building, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-team.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-light to-background py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="inline-flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Leading FM Company in Kenya
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Professional
                <span className="block text-primary-hover">Facility Management</span>
                <span className="block text-2xl lg:text-3xl font-medium text-muted-foreground">
                  Services in Kenya
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Comprehensive integrated facility management services for residential, 
                commercial, and industrial facilities across all 47 counties in Kenya.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">47</p>
                <p className="text-sm text-muted-foreground">Counties Covered</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#services">Explore Services</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+254722566999">Call +254722566999</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            <img
              src={heroImage}
              alt="Professional facility management team"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;