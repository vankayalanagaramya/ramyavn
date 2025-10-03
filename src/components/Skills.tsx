import { Card } from "@/components/ui/card";
import { Brain, Database, Eye, MessageSquare, LineChart, Network, Sparkles, Boxes } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Supervised & unsupervised learning algorithms, model optimization, and deployment",
      color: "text-primary"
    },
    {
      icon: Network,
      title: "Deep Learning",
      description: "Neural networks, CNNs, RNNs, and advanced architectures for complex problems",
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Reinforcement Learning",
      description: "Agent development, reward systems, and feedback-based learning models",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Text processing with regex, GPT integration, sentiment analysis, and language models",
      color: "text-accent"
    },
    {
      icon: LineChart,
      title: "Data Visualization",
      description: "Advanced analytics with Pandas, NumPy, Matplotlib, and interactive dashboards",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Object detection, image classification, OCR, and visual recognition systems",
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <Boxes className="absolute top-1/4 right-10 w-24 h-24 text-primary/5 animate-float" />
        <Sparkles className="absolute bottom-1/3 left-10 w-16 h-16 text-accent/5 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-accent animate-glow" />
              <span className="text-sm font-medium text-primary">Technical Expertise</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in AI/ML technologies and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all hover:shadow-glow group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Corner Accent */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <skill.icon className={`w-6 h-6 ${skill.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </div>

              {/* Bottom Shine Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="relative p-6 bg-gradient-primary text-primary-foreground border-0 overflow-hidden group">
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform inline-block">7+</div>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div>
          </Card>
          <Card className="relative p-6 bg-gradient-accent text-accent-foreground border-0 overflow-hidden group">
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform inline-block">6+</div>
              <p className="text-sm opacity-90">Organizations</p>
            </div>
          </Card>
          <Card className="relative p-6 bg-card/50 backdrop-blur-sm border-primary/30 overflow-hidden group hover:shadow-glow transition-all">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-4xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform inline-block">10+</div>
              <p className="text-sm text-muted-foreground">Major Projects</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
