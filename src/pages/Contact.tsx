import Navigation from '@/components/Navigation';
import FloatingButtons from '@/components/FloatingButtons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Globe,
  Building2
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+254722566999"],
      description: "Call us anytime - 24/7 support available"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@bestcareservices.co.ke"],
      description: "Send us your inquiries and requirements"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      details: ["Mpaka Plaza, Westlands", "Nairobi, Kenya"],
      description: "Visit our main office for consultations"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      details: ["bestcareservices.co.ke", "bestcare.co.ke"],
      description: "Visit our websites for more information"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency calls only" },
    { day: "Emergency Services", hours: "24/7 Available" }
  ];

  const supportCenters = [
    { city: "Nairobi Westlands", address: "Mpaka Plaza, Westlands" },
    { city: "Nairobi CBD", address: "Central Business District" },
    { city: "Mombasa", address: "Mombasa Island" },
    { city: "Kisumu", address: "Kisumu City Center" },
    { city: "Nakuru", address: "Nakuru Town" },
    { city: "Eldoret", address: "Eldoret Town Center" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Get In Touch With Bestcare
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your facility management? Contact our team of experts 
              for personalized solutions and competitive quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+254722566999">Call Now</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact-form">Send Message</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-soft text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg text-primary mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="font-medium text-foreground">
                      {info.title === "Phone" ? (
                        <a href={`tel:${detail}`} className="hover:text-primary transition-colors">
                          {detail}
                        </a>
                      ) : info.title === "Email" ? (
                        <a href={`mailto:${detail}`} className="hover:text-primary transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                  <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Additional Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card id="contact-form" className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+254..." />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <select id="service" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Select a service</option>
                      <option>Cleaning Services</option>
                      <option>Pest Control</option>
                      <option>Maintenance Services</option>
                      <option>Security Services</option>
                      <option>Integrated FM</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your facility management needs..."
                      rows={5}
                    />
                  </div>
                  
                  <Button variant="default" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours & Support Centers */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-primary">
                    <Clock className="w-5 h-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Support Centers */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-primary">
                    <Building2 className="w-5 h-5" />
                    Support Centers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {supportCenters.map((center, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-primary mt-1" />
                        <div>
                          <p className="font-medium">{center.city}</p>
                          <p className="text-sm text-muted-foreground">{center.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <Card className="border-0 shadow-soft bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-4">Prefer to talk directly?</h3>
                  <div className="space-y-3">
                    <Button variant="default" className="w-full" asChild>
                      <a href="tel:+254722566999">
                        <Phone className="w-4 h-4 mr-2" />
                        Call +254722566999
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a 
                        href="https://wa.me/254722566999?text=Hello%20Bestcare,%20I'm%20interested%20in%20your%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Chat
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <Card className="border-0 shadow-soft max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg text-red-600 mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Emergency Services Available 24/7
              </h2>
              <p className="text-muted-foreground mb-6">
                For urgent facility management emergencies, our team is available 
                around the clock to provide immediate assistance.
              </p>
              <Button variant="destructive" size="lg" asChild>
                <a href="tel:+254722566999">Emergency Hotline: +254722566999</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
};

export default Contact;