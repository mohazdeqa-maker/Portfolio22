import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "mohazdeqa@gmail.com",
      href: "mailto:mohazdeqa@gmail.com",
      color: "professional-blue"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "0700806481",
      href: "tel:0700806481",
      color: "tech-accent"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
      color: "professional-gold"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mandeq-mohamud",
      href: "https://linkedin.com/in/mandeq-mohamud",
      color: "professional-blue"
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case "professional-blue": return "text-professional-blue hover:bg-professional-blue/10";
      case "tech-accent": return "text-tech-accent hover:bg-tech-accent/10";
      case "professional-gold": return "text-professional-gold hover:bg-professional-gold/10";
      default: return "text-professional-blue hover:bg-professional-blue/10";
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-professional bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to secure your digital infrastructure? Let's discuss how I can help protect your organization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="p-8 bg-gradient-card shadow-card border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className={`flex items-center gap-4 p-4 rounded-lg border border-border/50 transition-all duration-300 ${getColorClass(contact.color)} group`}
                >
                  <div className="p-2 rounded-lg bg-current/10">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium text-foreground group-hover:text-current transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Card>
          
          {/* Call to Action */}
          <Card className="p-8 bg-gradient-card shadow-card border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">Let's Collaborate</h3>
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                I'm actively seeking opportunities in cybersecurity and IT support roles. 
                Whether you need vulnerability assessments, security monitoring, or system administration support, 
                I'm ready to contribute to your team's success.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-professional-blue">Available for:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                    Full-time positions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-professional-blue rounded-full"></div>
                    Contract work
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-professional-gold rounded-full"></div>
                    Consulting projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                    Security assessments
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  className="flex-1 bg-gradient-professional hover:shadow-elegant transition-all duration-300"
                  asChild
                >
                  <a href="mailto:mohazdeqa@gmail.com">
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-primary-foreground"
                  asChild
                >
                  <a href="https://linkedin.com/in/mandeq-mohamud" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;