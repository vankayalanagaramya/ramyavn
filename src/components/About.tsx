import { GraduationCap, Briefcase, Heart, Award, Target, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "MS in Artificial Intelligence",
      institution: "New Jersey Institute of Technology, USA",
      year: "2025",
      icon: Award,
    },
    {
      degree: "MTech in Computer Science & Information Engineering",
      institution: "JNTUH, India",
      year: "2017",
      icon: Target,
    },
    {
      degree: "BTech in Computer Science & Engineering",
      institution: "JNTUH, India",
      year: "2014",
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Get to know me</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about solving complex problems through AI and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">My Passion</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm deeply passionate about leveraging AI and machine learning to solve real-world 
                problems. My expertise spans across implementing sophisticated ML algorithms, building 
                intelligent systems for fraud detection, and developing data-driven solutions that 
                drive business value. I thrive on challenges that push the boundaries of what's 
                possible with AI technology.
              </p>
            </div>
          </Card>

          <Card className="relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/30 transition-all group overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Over the past 7 years, I've had the privilege of working with leading organizations 
                including TCS, NPCI, Cigniti Technologies, Virtusa, ValueLabs, and currently US Bank. 
                My journey has taken me from India to Abu Dhabi and now the United States, where I've 
                tackled diverse challenges in fintech, banking, and AI implementation.
              </p>
            </div>
          </Card>
        </div>

        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all hover:shadow-glow group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-accent font-bold text-lg">{edu.year}</div>
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:rotate-12 transition-transform">
                      <edu.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
