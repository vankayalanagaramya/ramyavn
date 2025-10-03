import { Card } from "@/components/ui/card";
import { FileSearch, TrendingUp, Shield, CreditCard } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: FileSearch,
      title: "Document Q&A Search System",
      description: "Integrated Milvus vector database with GPT-4 using advanced few-shot prompting techniques for intelligent document querying and semantic search.",
      technologies: ["GPT-4", "Milvus", "Few-shot Learning", "Vector Search"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Fraud Detection ML Pipeline",
      description: "Built comprehensive fraud detection systems for multiple banking clients including HSBC and US Bank, achieving high accuracy in real-time transaction monitoring.",
      technologies: ["Machine Learning", "Real-time Analytics", "Risk Modeling"],
      color: "accent"
    },
    {
      icon: CreditCard,
      title: "Credit Risk Analysis Platform",
      description: "Developed sophisticated credit risk assessment models for Equitable Bank, improving loan approval accuracy and reducing default rates.",
      technologies: ["Predictive Analytics", "Risk Modeling", "Statistical Analysis"],
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "UPI Transaction Analytics",
      description: "Created comprehensive analytics dashboards for NPCI's UPI platform using Grafana and Kibana, monitoring millions of daily transactions.",
      technologies: ["Grafana", "Kibana", "Big Data", "Real-time Monitoring"],
      color: "accent"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing impactful AI/ML solutions that drive business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/30 transition-all hover:shadow-glow group"
            >
              <div className={`inline-block p-3 rounded-lg mb-4 ${
                project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
              }`}>
                <project.icon className={`w-8 h-8 ${
                  project.color === 'primary' ? 'text-primary' : 'text-accent'
                }`} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-primary/30 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Open to <span className="text-accent">Collaborations</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in collaborating on innovative AI projects. Whether you're looking 
            to implement machine learning solutions, build intelligent systems, or explore cutting-edge 
            AI technologies, let's connect and create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:ramyav393@gmail.com"
              className="px-6 py-3 bg-gradient-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-accent-glow"
            >
              Start a Conversation
            </a>
            <a 
              href="https://www.linkedin.com/in/vnry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors border border-primary/20"
            >
              Connect on LinkedIn
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
