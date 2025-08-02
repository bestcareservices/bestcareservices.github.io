import Navigation from '@/components/Navigation';
import FloatingButtons from '@/components/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CoverageSection from '@/components/sections/CoverageSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Coverage Section */}
      <CoverageSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Bestcare Facilities Management</h3>
              <p className="text-primary-foreground/80 mb-4">
                Leading facility management services company in Kenya with coverage 
                across all 47 counties.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Mpaka Plaza, Westlands, Nairobi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+254722566999" className="hover:text-white transition-colors">
                    +254722566999
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@bestcareservices.co.ke" className="hover:text-white transition-colors">
                    info@bestcareservices.co.ke
                  </a>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Soft Facility Management</li>
                <li>Hard Facility Management</li>
                <li>Integrated FM Solutions</li>
                <li>Pest Control Services</li>
                <li>Cleaning Services</li>
                <li>Security Services</li>
              </ul>
            </div>
            
            {/* Coverage */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Coverage</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>All 47 Counties</li>
                <li>Nairobi Metropolitan</li>
                <li>Mombasa & Coast</li>
                <li>Kisumu & Western</li>
                <li>Nakuru & Rift Valley</li>
                <li>Eldoret & Northern</li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-primary-foreground/80 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/coverage" className="text-primary-foreground/80 hover:text-white transition-colors">
                    Coverage
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://bestcareservices.co.ke" className="text-primary-foreground/80 hover:text-white transition-colors">
                    Main Website
                  </a>
                </li>
                <li>
                  <a href="https://bestcare.co.ke" className="text-primary-foreground/80 hover:text-white transition-colors">
                    Affiliate Site
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="text-sm text-primary-foreground/80">
              © 2024 Bestcare Facilities Management. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      <FloatingButtons />
    </div>
  );
};

export default Index;
