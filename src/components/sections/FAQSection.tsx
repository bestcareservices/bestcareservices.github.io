import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What facility management services do you offer in Nairobi?",
      answer: "We provide comprehensive facility management services including cleaning, maintenance, pest control, security, landscaping, HVAC maintenance, electrical and plumbing services, waste management, and integrated facility management solutions for residential, commercial, and industrial properties."
    },
    {
      question: "How much do cleaning services cost in Nairobi?",
      answer: "Our cleaning services range from KSh 15-25 per square meter for daily office cleaning, KSh 3,000-8,000 for residential cleaning per visit, and KSh 30-50 per square meter for deep cleaning. Final costs depend on the specific requirements, frequency, and size of the property."
    },
    {
      question: "Do you provide 24/7 emergency facility management services?",
      answer: "Yes, we offer 24/7 emergency support services for all our clients. Our response team is available round-the-clock to handle urgent maintenance issues, plumbing emergencies, electrical problems, and security concerns across all our coverage areas in Kenya."
    },
    {
      question: "Which areas in Nairobi do you serve?",
      answer: "We serve all areas within Nairobi County including Westlands, Karen, Lavington, Kilimani, Parklands, Upperhill, Kileleshwa, Gigiri, Runda, Muthaiga, Riverside, Hurlingham, South B, South C, Langata, Embakasi, Kasarani, and many more areas across the county."
    },
    {
      question: "How effective is your pest control service?",
      answer: "Our pest control services are highly effective with a 95%+ success rate. We use safe, environmentally friendly treatments and provide guaranteed results. Residential pest control costs KSh 2,500-5,000 per treatment, while commercial pest control ranges from KSh 5,000-15,000 depending on the property size and infestation level."
    },
    {
      question: "Do you provide facility management services outside Nairobi?",
      answer: "Yes, we provide facility management services across all 47 counties in Kenya. We have support centers in Westlands, Nairobi CBD, Nakuru, Eldoret, Kisumu, Mombasa, and all county headquarters to ensure nationwide coverage and prompt service delivery."
    },
    {
      question: "What is included in your integrated facility management package?",
      answer: "Our integrated facility management includes soft services (cleaning, security, landscaping, waste management), hard services (HVAC, electrical, plumbing, mechanical maintenance), strategic planning, cost optimization, quality assurance, regular reporting, and dedicated account management."
    },
    {
      question: "How quickly can you start providing services?",
      answer: "We can typically start providing services within 24-48 hours of contract signing for standard cleaning and maintenance services. For specialized services or large-scale contracts, we may need 3-7 days for proper planning and resource allocation."
    },
    {
      question: "Do you work with residential clients or only commercial?",
      answer: "We serve both residential and commercial clients. Our residential services include house cleaning, pest control, appliance repairs, garden maintenance, and security services. We work with individual homeowners, apartment complexes, gated communities, and residential estates."
    },
    {
      question: "What makes Bestcare different from other facility management companies?",
      answer: "We are Kenya's leading facility management company with nationwide coverage across all 47 counties, 24/7 support, competitive pricing, experienced local staff, comprehensive service offerings, quality assurance programs, and over 1000+ satisfied clients. We focus on building long-term partnerships with transparent communication and reliable service delivery."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Frequently Asked Questions</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Common Questions About Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most frequently asked questions about facility management 
            services in Nairobi and across Kenya.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-2">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Contact our team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+254722566999" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors"
              >
                Call +254722566999
              </a>
              <a 
                href="mailto:info@bestcareservices.co.ke"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary bg-background rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;