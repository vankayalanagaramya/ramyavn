import { Card } from "@/components/ui/card";
import { Brain, Database, Eye, MessageSquare, LineChart, Network } from "lucide-react";

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
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in AI/ML technologies and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/30 transition-all hover:shadow-glow group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <skill.icon className={`w-6 h-6 ${skill.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-primary text-primary-foreground border-0">
            <div className="text-3xl font-bold mb-2">7+</div>
            <p className="text-sm opacity-90">Years of Experience</p>
          </Card>
          <Card className="p-6 bg-gradient-accent text-accent-foreground border-0">
            <div className="text-3xl font-bold mb-2">6+</div>
            <p className="text-sm opacity-90">Organizations</p>
          </Card>
          <Card className="p-6 bg-card border-primary/30">
            <div className="text-3xl font-bold mb-2 text-primary">10+</div>
            <p className="text-sm text-muted-foreground">Major Projects</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
