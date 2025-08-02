import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building2, Users, Phone } from 'lucide-react';
import coverageImage from '@/assets/nairobi-coverage.jpg';

const CoverageSection = () => {
  const supportCenters = [
    "Westlands (Nairobi)", "Nairobi CBD", "Nakuru", "Eldoret", 
    "Kisumu", "Mombasa", "All 47 County Headquarters"
  ];

  const nairobiAreas = [
    "Westlands", "Karen", "Lavington", "Kilimani", "Parklands", "Upperhill",
    "Kileleshwa", "Spring Valley", "Loresho", "Gigiri", "Runda", "Muthaiga",
    "Riverside", "Hurlingham", "South B", "South C", "Langata", "Embakasi",
    "Kasarani", "Ruaka", "Thindigua", "Kiambu Road", "Thika Road", "Mombasa Road"
  ];

  const counties = [
    "Nairobi", "Mombasa", "Nakuru", "Uasin Gishu", "Kisumu", "Kiambu", "Machakos", 
    "Kajiado", "Murang'a", "Nyeri", "Meru", "Laikipia", "Nyandarua", "Kirinyaga",
    "Embu", "Tharaka-Nithi", "Kitui", "Makueni", "Kwale", "Kilifi", "Tana River",
    "Lamu", "Taita-Taveta", "Garissa", "Wajir", "Mandera", "Marsabit", "Isiolo",
    "Samburu", "Trans Nzoia", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma",
    "Busia", "Siaya", "Kisii", "Nyamira", "Narok", "Baringo", "Elgeyo-Marakwet",
    "Nandi", "West Pokot", "Turkana", "Homa Bay", "Migori"
  ];

  return (
    <section id="coverage" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Coverage Areas</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Nationwide Coverage Across Kenya
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With support centers strategically located across Kenya, we provide 
            reliable facility management services nationwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coverage Map/Image */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={coverageImage} 
                alt="Kenya coverage areas"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">47 Counties Covered</h3>
                  <p className="text-sm opacity-90">Professional services across all of Kenya</p>
                </div>
              </div>
            </div>

            {/* Support Centers */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Support Centers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {supportCenters.map((center, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <MapPin className="w-3 h-3 text-primary" />
                      {center}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Coverage */}
          <div className="space-y-6">
            {/* Nairobi Areas */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Nairobi County Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  {nairobiAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {area}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* All Counties */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  All 47 Counties of Kenya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-1 text-xs">
                  {counties.map((county, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {county}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="border-0 shadow-soft bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Need Service in Your Area?</h4>
                    <p className="text-sm text-muted-foreground">Call us to confirm coverage and get a quote</p>
                    <p className="font-medium text-primary">+254722566999</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;