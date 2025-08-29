import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IT Support Technician (Internship)",
      company: "HP",
      location: "Remote/Nairobi",
      period: "2024 – 2025",
      type: "Internship",
      responsibilities: [
        "Provided Tier 1/2 support for end-users, troubleshooting hardware, Windows 11, and network issues",
        "Assisted in deploying endpoint security updates and monitored system performance",
        "Resolved issues in Windows Server and Active Directory environments"
      ],
      tools: ["Windows Server", "Splunk", "Wireshark", "HP AI for Business"],
      color: "professional-blue"
    },
    {
      title: "Freelance Cybersecurity Projects",
      company: "Independent",
      location: "Nairobi",
      period: "2023 – 2024",
      type: "Freelance",
      responsibilities: [
        "Conducted vulnerability scans for small business networks using Nmap & OpenVAS",
        "Configured Snort IDS to detect abnormal network traffic patterns in test environments",
        "Set up pfSense firewall and improved endpoint security for a local startup"
      ],
      tools: ["Kali Linux", "Ubuntu", "Snort", "Burp Suite", "Metasploitable2"],
      color: "tech-accent"
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case "professional-blue": return "text-professional-blue border-professional-blue/20 bg-professional-blue/5";
      case "tech-accent": return "text-tech-accent border-tech-accent/20 bg-tech-accent/5";
      default: return "text-professional-blue border-professional-blue/20 bg-professional-blue/5";
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-professional bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey in cybersecurity and IT support
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <Badge 
                      variant="secondary" 
                      className={getColorClass(exp.color)}
                    >
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-professional-blue" />
                      <span className="font-semibold text-professional-blue">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-tech-accent" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-professional-gold" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3 text-foreground">
                        <div className="w-2 h-2 bg-professional-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Tools & Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, toolIndex) => (
                        <Badge 
                          key={toolIndex} 
                          variant="outline" 
                          className="border-professional-blue/30 text-professional-blue hover:bg-professional-blue/10"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;