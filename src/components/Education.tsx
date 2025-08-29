import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = {
    institution: "Moringa School",
    degree: "Certificate in Cybersecurity",
    location: "Nairobi, Kenya",
    description: "Comprehensive cybersecurity training covering threat detection, vulnerability assessment, and security operations."
  };

  const certifications = [
    {
      name: "Cybersecurity Fundamentals",
      year: "2024",
      color: "professional-blue"
    },
    {
      name: "HP AI for Business Professionals",
      year: "2024–2025",
      color: "tech-accent"
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Swahili", level: "Fluent" }
  ];

  const hobbies = ["Reading", "Traveling", "Music", "Gaming"];

  const getColorClass = (color: string) => {
    switch(color) {
      case "professional-blue": return "text-professional-blue border-professional-blue/20 bg-professional-blue/5";
      case "tech-accent": return "text-tech-accent border-tech-accent/20 bg-tech-accent/5";
      default: return "text-professional-blue border-professional-blue/20 bg-professional-blue/5";
    }
  };

  return (
    <section id="education" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-professional bg-clip-text text-transparent mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="p-8 bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-professional-blue/10 border border-professional-blue/20">
                <GraduationCap className="w-6 h-6 text-professional-blue" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-professional-blue mb-2">
                  {education.degree}
                </h4>
                <p className="text-lg text-foreground font-medium mb-1">
                  {education.institution}
                </p>
                <p className="text-muted-foreground mb-4">{education.location}</p>
                <p className="text-foreground leading-relaxed">
                  {education.description}
                </p>
              </div>
            </div>
          </Card>
          
          {/* Certifications */}
          <Card className="p-8 bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-tech-accent/10 border border-tech-accent/20">
                <Award className="w-6 h-6 text-tech-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {cert.name}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.year}</span>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={getColorClass(cert.color)}
                  >
                    Certified
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <Card className="p-6 bg-gradient-card shadow-card border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-4">Languages</h3>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{lang.name}</span>
                  <Badge variant="secondary" className="bg-professional-gold/10 text-professional-gold border-professional-gold/20">
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Hobbies */}
          <Card className="p-6 bg-gradient-card shadow-card border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-4">Hobbies & Interests</h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-border/50 text-muted-foreground hover:border-professional-blue/50 hover:text-professional-blue transition-colors"
                >
                  {hobby}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;