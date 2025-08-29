import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { 
  Menu, 
  User, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Mail,
  ChevronDown,
  Shield,
  Search,
  Network
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const skillCategories = [
    { name: "Network Security", icon: <Shield className="w-4 h-4" />, id: "skills" },
    { name: "Vulnerability Assessment", icon: <Search className="w-4 h-4" />, id: "skills" },
    { name: "System Administration", icon: <Network className="w-4 h-4" />, id: "skills" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-professional rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Mandeq Mohamud</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection("hero")}
            className="text-foreground hover:text-professional-blue"
          >
            <User className="w-4 h-4 mr-2" />
            About
          </Button>
          
          {/* Skills Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-professional-blue"
              >
                Skills
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-56 bg-card border-border shadow-lg z-[60]"
              align="center"
            >
              {skillCategories.map((category, index) => (
                <DropdownMenuItem 
                  key={index}
                  onClick={() => scrollToSection(category.id)}
                  className="flex items-center gap-3 text-foreground hover:bg-professional-blue/10 hover:text-professional-blue cursor-pointer"
                >
                  {category.icon}
                  {category.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem 
                onClick={() => scrollToSection("skills")}
                className="text-professional-gold hover:bg-professional-gold/10 cursor-pointer"
              >
                View All Skills
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="ghost" 
            onClick={() => scrollToSection("experience")}
            className="text-foreground hover:text-professional-blue"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Experience
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection("projects")}
            className="text-foreground hover:text-professional-blue"
          >
            <Code className="w-4 h-4 mr-2" />
            Projects
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection("education")}
            className="text-foreground hover:text-professional-blue"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            Education
          </Button>
          
          <Button 
            variant="default" 
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-professional hover:shadow-elegant transition-all duration-300"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className="md:hidden">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-48 bg-card border-border shadow-lg z-[60]"
              align="end"
            >
              <DropdownMenuItem 
                onClick={() => scrollToSection("hero")}
                className="flex items-center gap-3 text-foreground hover:bg-professional-blue/10 hover:text-professional-blue cursor-pointer"
              >
                <User className="w-4 h-4" />
                About
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => scrollToSection("skills")}
                className="flex items-center gap-3 text-foreground hover:bg-professional-blue/10 hover:text-professional-blue cursor-pointer"
              >
                <Shield className="w-4 h-4" />
                Skills
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => scrollToSection("experience")}
                className="flex items-center gap-3 text-foreground hover:bg-professional-blue/10 hover:text-professional-blue cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                Experience
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => scrollToSection("projects")}
                className="flex items-center gap-3 text-foreground hover:bg-professional-blue/10 hover:text-professional-blue cursor-pointer"
              >
                <Code className="w-4 h-4" />
                Projects
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => scrollToSection("education")}
                className="flex items-center gap-3 text-foreground hover:bg-professional-blue/10 hover:text-professional-blue cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                Education
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem 
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-3 text-professional-gold hover:bg-professional-gold/10 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Contact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;