import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { CheckCircle, Phone } from 'lucide-react';

const PricingSection = () => {
  const pricingData = [
    { service: "Office Cleaning (per sqm)", price: "KSh 15-25", frequency: "Daily" },
    { service: "Deep Cleaning (per sqm)", price: "KSh 30-50", frequency: "Monthly" },
    { service: "Residential Cleaning", price: "KSh 3,000-8,000", frequency: "Per visit" },
    { service: "Pest Control (Residential)", price: "KSh 2,500-5,000", frequency: "Per treatment" },
    { service: "Pest Control (Commercial)", price: "KSh 5,000-15,000", frequency: "Per treatment" },
    { service: "HVAC Maintenance", price: "KSh 8,000-25,000", frequency: "Per service" },
    { service: "Plumbing Services", price: "KSh 2,000-10,000", frequency: "Per job" },
    { service: "Electrical Services", price: "KSh 1,500-8,000", frequency: "Per job" },
    { service: "Security Guard (per month)", price: "KSh 18,000-25,000", frequency: "Monthly" },
    { service: "Landscaping & Gardening", price: "KSh 3,000-12,000", frequency: "Monthly" },
  ];

  const packages = [
    {
      title: "Basic Package",
      price: "From KSh 5,000",
      period: "/month",
      description: "Essential cleaning and maintenance",
      features: [
        "Weekly cleaning service",
        "Basic maintenance",
        "Emergency support",
        "Quality assurance"
      ],
      popular: false
    },
    {
      title: "Professional Package", 
      price: "From KSh 15,000",
      period: "/month",
      description: "Comprehensive facility management",
      features: [
        "Daily cleaning service",
        "Preventive maintenance",
        "24/7 emergency support",
        "Monthly reporting",
        "Pest control included",
        "Quality inspections"
      ],
      popular: true
    },
    {
      title: "Enterprise Package",
      price: "Custom Quote",
      period: "",
      description: "Full-scale integrated solutions",
      features: [
        "Integrated FM services",
        "Dedicated account manager",
        "Custom SLA agreements",
        "Advanced reporting",
        "Cost optimization",
        "Strategic planning"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Transparent & Competitive Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get exceptional value with our competitive rates. All prices are estimates 
            and final quotes depend on specific requirements and scope of work.
          </p>
        </div>

        {/* Service Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative border-0 shadow-soft hover:shadow-elegant transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary shadow-elegant' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="bg-primary">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-primary">{pkg.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.popular ? "default" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <a href="tel:+254722566999">Get Quote</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Pricing Table */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="text-center">Estimated Service Costs</CardTitle>
            <CardDescription className="text-center">
              *Prices may vary based on location, frequency, and specific requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Estimated Cost (KSh)</TableHead>
                    <TableHead>Frequency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.service}</TableCell>
                      <TableCell className="text-primary font-semibold">{item.price}</TableCell>
                      <TableCell>{item.frequency}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="border-0 shadow-soft bg-primary/5 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Need a Custom Quote?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us for personalized pricing based on your specific needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" asChild>
                  <a href="tel:+254722566999">Call +254722566999</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:info@bestcareservices.co.ke">Email Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;