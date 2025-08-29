import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-tech">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Info */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-cyber animate-pulse-glow">
                <img 
                  src={profileAvatar} 
                  alt="Mandeq Mohamud - Cybersecurity Analyst" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2">
                <Badge variant="secondary" className="bg-cyber-green text-primary-foreground animate-pulse">
                  Available
                </Badge>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
              Mandeq Mohamud
            </h1>
            
            <h2 className="text-2xl text-cyber-blue font-semibold mb-6">
              Cybersecurity Analyst | IT Support Technician
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyber-green" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyber-blue" />
                <span>mohazdeqa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyber-purple" />
                <span>0700806481</span>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="default" 
                className="bg-gradient-cyber hover:shadow-glow transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-primary-foreground"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          {/* Profile Summary Card */}
          <Card className="p-8 bg-gradient-card shadow-card border-border/50 animate-float">
            <h3 className="text-2xl font-bold text-cyber-blue mb-6">Profile Summary</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Cybersecurity and IT Support professional with hands-on experience in vulnerability assessment, 
              incident response, and system administration. Skilled in using industry-standard tools such as 
              <span className="text-cyber-green font-semibold"> Splunk, Snort, Wireshark, and Nmap </span> 
              for threat detection and analysis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Adept at troubleshooting across Windows, Linux, and Ubuntu environments, with a strong focus 
              on building secure systems and mitigating risks.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;