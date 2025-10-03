import { Card } from "@/components/ui/card";
import { FileSearch, TrendingUp, Shield, CreditCard, Rocket, Star } from "lucide-react";

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
    <section id="projects" className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <Star className="absolute top-20 right-20 w-12 h-12 text-accent/10 animate-float" />
        <Rocket className="absolute bottom-20 left-20 w-16 h-16 text-primary/10 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Rocket className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Portfolio Showcase</span>
            </div>
          </div>
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
              className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all hover:shadow-glow group overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Top Corner Decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors"></div>
              
              <div className="relative z-10">
                <div className={`inline-block p-3 rounded-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all ${
                  project.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'
                }`}>
                  <project.icon className={`w-8 h-8 ${
                    project.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Shine */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>

        <Card className="relative p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/30 text-center overflow-hidden group hover:shadow-glow transition-all">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
          
          <div className="relative z-10">
            <div className="inline-block p-3 bg-accent/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Star className="w-8 h-8 text-accent" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Open to <span className="text-accent">Collaborations</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in collaborating on innovative AI projects. Whether you're looking 
              to implement machine learning solutions, build intelligent systems, or explore cutting-edge 
              AI technologies, let's connect and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:ramyav393@gmail.com"
                className="px-6 py-3 bg-gradient-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-accent-glow hover:scale-105 transform"
              >
                Start a Conversation
              </a>
              <a 
                href="https://www.linkedin.com/in/vnry"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors border border-primary/20 hover:border-primary/30 hover:scale-105 transform"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
