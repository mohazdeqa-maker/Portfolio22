import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Network, 
  Search, 
  Eye, 
  Terminal, 
  Monitor, 
  Lock, 
  Bug,
  Server,
  HardDrive
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Network Security & Administration",
      icon: <Network className="w-6 h-6" />,
      skills: ["Network Security", "Firewall Configuration", "IDS/IPS Setup", "Network Segmentation"],
      color: "professional-blue"
    },
    {
      title: "Threat Detection & Response",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Splunk", "Snort", "Wazuh", "SIEM Monitoring", "Incident Response"],
      color: "tech-accent"
    },
    {
      title: "Vulnerability Assessment",
      icon: <Search className="w-6 h-6" />,
      skills: ["Nmap", "Burp Suite", "OpenVAS", "Penetration Testing", "Risk Assessment"],
      color: "professional-gold"
    },
    {
      title: "Analysis & Monitoring",
      icon: <Eye className="w-6 h-6" />,
      skills: ["Wireshark", "Log Analysis", "Traffic Analysis", "Packet Inspection"],
      color: "professional-blue"
    },
    {
      title: "System Administration",
      icon: <Server className="w-6 h-6" />,
      skills: ["Windows Server", "Linux/Ubuntu", "Active Directory", "Endpoint Security"],
      color: "tech-accent"
    },
    {
      title: "Development & Scripting",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Python", "Bash Scripting", "Automation", "Kali Linux", "Metasploitable2"],
      color: "professional-gold"
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case "professional-blue": return "text-professional-blue border-professional-blue/20 bg-professional-blue/5";
      case "tech-accent": return "text-tech-accent border-tech-accent/20 bg-tech-accent/5";
      case "professional-gold": return "text-professional-gold border-professional-gold/20 bg-professional-gold/5";
      default: return "text-professional-blue border-professional-blue/20 bg-professional-blue/5";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-professional bg-clip-text text-transparent mb-4">
            Core Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across cybersecurity tools, technologies, and methodologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${getColorClass(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-professional-blue transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className={`${getColorClass(category.color)} hover:shadow-sm transition-all`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;