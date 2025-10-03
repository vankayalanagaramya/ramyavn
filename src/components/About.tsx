import { GraduationCap, Briefcase, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "MS in Artificial Intelligence",
      institution: "New Jersey Institute of Technology, USA",
      year: "2025",
    },
    {
      degree: "MTech in Computer Science & Information Engineering",
      institution: "JNTUH, India",
      year: "2017",
    },
    {
      degree: "BTech in Computer Science & Engineering",
      institution: "JNTUH, India",
      year: "2014",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about solving complex problems through AI and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card border-border hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
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
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
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
          </Card>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/30 transition-all hover:shadow-glow"
              >
                <div className="text-accent font-bold mb-2">{edu.year}</div>
                <h4 className="font-bold mb-2">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
