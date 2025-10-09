import { Card } from "@/components/ui/card";
import { Briefcase, TrendingUp, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "US Bank",
      period: "Current",
      description: "Leading fraud risk management initiatives, building ML pipelines and RAG pipelines for advanced AI applications.",
      highlights: [
        "Fraud risk management system development",
        "ML pipeline architecture and implementation",
        "RAG pipeline development for intelligent systems"
      ]
    },
    {
      title: "Data Scientist",
      company: "Saiana Technologies",
      period: "2022 - 2023",
      description: "Developed personal finance solutions and credit card analytics systems.",
      highlights: [
        "Personal finance application development",
        "Credit card fraud detection",
        "Customer behavior analysis"
      ]
    },
    {
      title: "Data Scientist",
      company: "Virtusa",
      period: "Mar 2022 - Dec 2022",
      description: "Implemented fraud detection and customer segmentation solutions for HSBC.",
      highlights: [
        "Advanced fraud detection algorithms",
        "Customer segmentation models",
        "Banking analytics solutions"
      ]
    },
    {
      title: "Data Scientist",
      company: "Cigniti Technologies",
      period: "Apr 2021 - Feb 2022",
      description: "Developed credit risk analysis models for Equitable Bank.",
      highlights: [
        "Credit risk modeling",
        "Predictive analytics",
        "Risk assessment frameworks"
      ]
    },
    {
      title: "Data Analyst",
      company: "NPCI (National Payments Corporation of India)",
      period: "Jul 2016 - Apr 2021",
      description: "Worked on UPI project, fraud detection systems, and developed comprehensive dashboards.",
      highlights: [
        "UPI transaction analysis",
        "Fraud detection systems using Grafana/Kibana",
        "Real-time monitoring dashboards"
      ]
    },
    {
      title: "Intern",
      company: "Tata Consultancy Services (TCS)",
      period: "Dec 2015 - Jun 2016",
      description: "Gained foundational experience in data analysis and software development.",
      highlights: [
        "Data analysis projects",
        "Software development basics",
        "Team collaboration"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Timeline Connector */}
        <div className="absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Career Journey</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            7+ years of delivering impactful AI/ML solutions across leading organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all hover:shadow-glow group"
            >
              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row md:items-start gap-4 relative z-10">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                      <p className="text-accent font-medium flex items-center gap-2">
                        {exp.company}
                        {index === 0 && (
                          <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full">Current</span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-1 font-bold">▸</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
