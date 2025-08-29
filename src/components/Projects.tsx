import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Network, 
  Search, 
  Eye, 
  Lock,
  ExternalLink,
  GitBranch
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Network Vulnerability Assessment Lab",
      description: "Deployed Metasploitable2 in a virtual lab and used Nmap, OpenVAS, and Wireshark to identify vulnerabilities. Documented findings and applied remediation steps.",
      icon: <Search className="w-6 h-6" />,
      tools: ["Nmap", "OpenVAS", "Wireshark", "Metasploitable2", "Virtual Lab"],
      color: "professional-blue",
      category: "Vulnerability Assessment"
    },
    {
      title: "SIEM Threat Monitoring with Splunk & Wazuh",
      description: "Configured Splunk dashboards for log monitoring and alerts. Integrated Wazuh for endpoint threat detection and incident response.",
      icon: <Eye className="w-6 h-6" />,
      tools: ["Splunk", "Wazuh", "Log Analysis", "Dashboard", "Threat Detection"],
      color: "tech-accent",
      category: "SIEM & Monitoring"
    },
    {
      title: "Intrusion Detection with Snort",
      description: "Set up Snort IDS to capture and analyze traffic, creating custom rules for suspicious activity detection.",
      icon: <Shield className="w-6 h-6" />,
      tools: ["Snort", "IDS", "Custom Rules", "Traffic Analysis", "Network Security"],
      color: "professional-gold",
      category: "Network Security"
    },
    {
      title: "Web Application Security Testing",
      description: "Tested a demo vulnerable web app (DVWA) using Burp Suite & SQLi/XSS techniques, producing a vulnerability report with mitigation steps.",
      icon: <Lock className="w-6 h-6" />,
      tools: ["Burp Suite", "DVWA", "SQL Injection", "XSS", "Web Security"],
      color: "professional-blue",
      category: "Application Security"
    },
    {
      title: "Firewall & Network Segmentation Project",
      description: "Configured pfSense firewall, segmented a network with VLANs, and enabled IDS/IPS rules to block malicious traffic.",
      icon: <Network className="w-6 h-6" />,
      tools: ["pfSense", "VLANs", "IDS/IPS", "Network Segmentation", "Firewall Rules"],
      color: "tech-accent",
      category: "Network Infrastructure"
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
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-professional bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on cybersecurity projects demonstrating practical skills and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300 group h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${getColorClass(project.color)}`}>
                  {project.icon}
                </div>
                <div>
                  <Badge 
                    variant="secondary" 
                    className={`${getColorClass(project.color)} text-xs mb-2`}
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-professional-blue transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex} 
                        variant="outline" 
                        className="border-border/50 text-muted-foreground hover:border-professional-blue/50 hover:text-professional-blue transition-colors text-xs"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-professional-blue/30 text-professional-blue hover:bg-professional-blue/10"
                  >
                    <GitBranch className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-tech-accent/30 text-tech-accent hover:bg-tech-accent/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;