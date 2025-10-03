import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

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
      company: "ValueLabs, Abu Dhabi",
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
    <section id="experience" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
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
              className="p-6 bg-card border-border hover:border-primary/30 transition-all hover:shadow-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-1">▸</span>
                        <span>{highlight}</span>
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
