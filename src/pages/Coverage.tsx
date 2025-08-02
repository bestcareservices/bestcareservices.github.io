import Navigation from '@/components/Navigation';
import FloatingButtons from '@/components/FloatingButtons';
import CoverageSection from '@/components/sections/CoverageSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Building2, Phone, Clock } from 'lucide-react';

const Coverage = () => {
  const regions = [
    {
      name: "Central Kenya",
      counties: ["Nairobi", "Kiambu", "Murang'a", "Nyeri", "Kirinyaga", "Nyandarua"],
      description: "Our primary coverage area with fastest response times"
    },
    {
      name: "Coast Region", 
      counties: ["Mombasa", "Kilifi", "Kwale", "Lamu", "Tana River", "Taita-Taveta"],
      description: "Comprehensive services along the coastal region"
    },
    {
      name: "Western Kenya",
      counties: ["Kisumu", "Kakamega", "Bungoma", "Busia", "Vihiga", "Siaya"],
      description: "Full facility management across western counties"
    },
    {
      name: "Rift Valley",
      counties: ["Nakuru", "Uasin Gishu", "Nandi", "Kericho", "Bomet", "Kajiado", "Narok", "Laikipia"],
      description: "Extensive coverage throughout the Rift Valley region"
    },
    {
      name: "Eastern Kenya",
      counties: ["Machakos", "Kitui", "Makueni", "Embu", "Tharaka-Nithi", "Meru", "Isiolo"],
      description: "Reliable services across eastern Kenya"
    },
    {
      name: "Northern Kenya",
      counties: ["Turkana", "West Pokot", "Samburu", "Marsabit", "Mandera", "Wajir", "Garissa"],
      description: "Specialized services for remote and challenging areas"
    }
  ];

  const supportCenters = [
    {
      city: "Nairobi (Westlands)",
      address: "Mpaka Plaza, Westlands, Nairobi",
      phone: "+254722566999",
      email: "westlands@bestcareservices.co.ke",
      coverage: "Central Kenya, Nairobi Metropolitan",
      hours: "24/7"
    },
    {
      city: "Nairobi CBD",
      address: "Central Business District, Nairobi",
      phone: "+254722566999",
      email: "cbd@bestcareservices.co.ke", 
      coverage: "Nairobi City Center, Industrial Area",
      hours: "24/7"
    },
    {
      city: "Mombasa",
      address: "Mombasa Island, Coast Region",
      phone: "+254722566999",
      email: "mombasa@bestcareservices.co.ke",
      coverage: "Coast Region, Port Areas",
      hours: "24/7"
    },
    {
      city: "Kisumu",
      address: "Kisumu City, Nyanza Region",
      phone: "+254722566999",
      email: "kisumu@bestcareservices.co.ke",
      coverage: "Western Kenya, Lake Region",
      hours: "24/7"
    },
    {
      city: "Nakuru",
      address: "Nakuru Town, Rift Valley",
      phone: "+254722566999",
      email: "nakuru@bestcareservices.co.ke",
      coverage: "Rift Valley, Central Highlands",
      hours: "24/7"
    },
    {
      city: "Eldoret",
      address: "Eldoret Town, Uasin Gishu",
      phone: "+254722566999",
      email: "eldoret@bestcareservices.co.ke",
      coverage: "North Rift, Western Highlands",
      hours: "24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Coverage Areas</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Nationwide Coverage Across All 47 Counties
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              With strategically located support centers and a dedicated team, we provide 
              reliable facility management services throughout Kenya, from urban centers 
              to remote areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#coverage-map">View Coverage Map</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+254722566999">Check Your Area</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Coverage Section */}
      <CoverageSection />

      {/* Regional Coverage */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Regional Coverage Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We organize our services by region to ensure efficient coverage and 
              quick response times across Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-primary">
                    <MapPin className="w-5 h-5" />
                    {region.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{region.description}</p>
                  <div className="space-y-1">
                    <p className="font-medium text-sm mb-2">Counties Covered:</p>
                    {region.counties.map((county, countyIndex) => (
                      <div key={countyIndex} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {county}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Centers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Support Centers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategically located centers ensure we can respond quickly to your 
              facility management needs anywhere in Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCenters.map((center, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-primary">
                    <Building2 className="w-5 h-5" />
                    {center.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">{center.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href={`tel:${center.phone}`} className="text-sm text-primary hover:underline">
                      {center.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground">{center.hours}</p>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <p className="text-xs font-medium text-primary mb-1">Coverage Area:</p>
                    <p className="text-xs text-muted-foreground">{center.coverage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Service Response Times
              </h2>
              <p className="text-lg text-muted-foreground">
                Our commitment to quick response across all coverage areas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-soft text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-2">2-4 hrs</div>
                  <h3 className="font-semibold text-primary mb-2">Emergency Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Urgent issues in major cities and support center areas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-2">24-48 hrs</div>
                  <h3 className="font-semibold text-primary mb-2">Standard Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular service requests in all covered areas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-2">3-7 days</div>
                  <h3 className="font-semibold text-primary mb-2">Remote Areas</h3>
                  <p className="text-sm text-muted-foreground">
                    Service deployment in remote or challenging locations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="border-0 shadow-soft bg-gradient-to-r from-primary/5 to-primary/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Need Service in Your Area?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact us to confirm coverage and get a customized quote for your location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <a href="tel:+254722566999">Call +254722566999</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:info@bestcareservices.co.ke">Email Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
};

export default Coverage;