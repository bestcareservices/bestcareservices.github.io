import Navigation from '@/components/Navigation';
import FloatingButtons from '@/components/FloatingButtons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, MapPin, Clock, Shield, Handshake } from 'lucide-react';
import heroImage from '@/assets/hero-team.jpg';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "We maintain the highest standards in all our services with rigorous quality control processes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Team",
      description: "Our experienced and trained professionals deliver reliable facility management solutions."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock emergency support ensures your facilities are always well-maintained."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Customer Focus",
      description: "We build lasting relationships through exceptional service and transparent communication."
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "1000+", label: "Happy Clients" },
    { icon: <MapPin className="w-6 h-6" />, number: "47", label: "Counties Covered" },
    { icon: <Award className="w-6 h-6" />, number: "10+", label: "Years Experience" },
    { icon: <Clock className="w-6 h-6" />, number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">About Bestcare</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                Leading Facility Management Company in Kenya
              </h1>
              <p className="text-lg text-muted-foreground">
                Bestcare Facilities Management has been at the forefront of providing 
                comprehensive facility management services across Kenya. With our commitment 
                to excellence and nationwide coverage, we've become the trusted partner for 
                over 1000 clients.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto text-primary">
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-bold text-primary">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={heroImage}
                alt="Bestcare team"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional facility management services that enhance the 
                  operational efficiency, safety, and comfort of our clients' facilities 
                  while maintaining the highest standards of quality and professionalism 
                  across Kenya.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative facility management company in 
                  East Africa, setting industry standards through cutting-edge solutions, 
                  sustainable practices, and unparalleled customer service.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our operations and define our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg text-primary mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Building Kenya's premier facility management company
              </p>
            </div>
            
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Bestcare Facilities Management was founded with a simple yet ambitious vision: 
                    to transform how facility management services are delivered across Kenya. 
                    Starting from our headquarters in Westlands, Nairobi, we recognized the need 
                    for reliable, professional, and comprehensive facility management solutions.
                  </p>
                  
                  <p>
                    Over the years, we have grown from a local service provider to Kenya's leading 
                    facility management company, with support centers strategically located in major 
                    cities including Nairobi CBD, Nakuru, Eldoret, Kisumu, and Mombasa. Our expansion 
                    to all 47 county headquarters demonstrates our commitment to serving every corner 
                    of Kenya.
                  </p>
                  
                  <p>
                    Today, Bestcare serves over 1000 satisfied clients across residential, commercial, 
                    and industrial sectors. Our integrated approach combines soft facility management 
                    (cleaning, security, landscaping) with hard facility management (maintenance, HVAC, 
                    electrical, plumbing) to provide holistic solutions that optimize our clients' 
                    operations.
                  </p>
                  
                  <p>
                    What sets us apart is our unwavering commitment to quality, our investment in 
                    professional training for our team, and our adoption of modern technology to 
                    enhance service delivery. We don't just maintain facilities; we enhance them 
                    to create environments where businesses and communities thrive.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
};

export default About;