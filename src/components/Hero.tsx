import { Mail, Linkedin, Github, Sparkles, Code2, Cpu } from "lucide-react";
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-accent/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 border-2 border-primary/20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Tech Icons Floating */}
        <div className="absolute top-1/3 right-10 text-primary/10 animate-float">
          <Code2 size={48} />
        </div>
        <div className="absolute bottom-1/3 left-20 text-accent/10 animate-float" style={{ animationDelay: '1s' }}>
          <Cpu size={64} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent animate-glow" />
              <span className="text-sm font-medium text-primary">AI/ML Engineer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Naga Ramya
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-accent opacity-50"></span>
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-muted-foreground">Vankayala</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Aspiring AI Engineer with{" "}
              <span className="text-accent font-semibold">7 years of experience</span> in data science, 
              specializing in fraud detection, credit risk analysis, and AI/ML project implementation across 
              multiple international banks and organizations.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-accent-glow group"
              >
                View Projects
                <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 backdrop-blur-sm"
              >
                Collaborate With Me
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="mailto:ramyav393@gmail.com"
                className="p-3 bg-card/50 backdrop-blur-sm rounded-full hover:bg-primary/10 transition-all border border-border hover:border-primary/30 hover:scale-110 hover:shadow-glow"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vnry"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card/50 backdrop-blur-sm rounded-full hover:bg-primary/10 transition-all border border-border hover:border-primary/30 hover:scale-110 hover:shadow-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/vankayalanagaramya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card/50 backdrop-blur-sm rounded-full hover:bg-primary/10 transition-all border border-border hover:border-primary/30 hover:scale-110 hover:shadow-glow"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-4 rounded-full border-2 border-accent/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
              
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-glow"></div>
              
              {/* Profile Image Container */}
              <div className="relative group">
                <img 
                  src={profileImage}
                  alt="Naga Ramya Vankayala"
                  className="relative rounded-2xl shadow-2xl border-4 border-primary/20 w-full transition-transform group-hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-accent-glow backdrop-blur-sm border border-accent/20 hover:scale-110 transition-transform">
                  <p className="font-bold text-lg">7+ Years</p>
                  <p className="text-sm opacity-90">Experience</p>
                </div>

                {/* Corner Accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
