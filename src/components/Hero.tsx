import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-medium text-primary">AI/ML Engineer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Naga Ramya Vankayala
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aspiring AI Engineer with 7 years of experience in data science, specializing in 
              fraud detection, credit risk analysis, and AI/ML project implementation across 
              multiple international banks and organizations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-accent-glow"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
              >
                Collaborate With Me
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="mailto:ramyav393@gmail.com"
                className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors border border-border"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vnry"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors border border-border"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/vankayalanagaramya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors border border-border"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-glow"></div>
              <img 
                src={profileImage}
                alt="Naga Ramya Vankayala"
                className="relative rounded-2xl shadow-2xl border-4 border-primary/20 w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-accent-glow">
                <p className="font-bold">7+ Years</p>
                <p className="text-sm">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
