import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ramyav393@gmail.com",
      link: "mailto:ramyav393@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vnry",
      link: "https://www.linkedin.com/in/vnry"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vankayalanagaramya",
      link: "https://github.com/vankayalanagaramya"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "United States",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating on AI projects or discussing opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/30 transition-all hover:shadow-glow"
            >
              {info.link ? (
                <a 
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-primary text-primary-foreground border-0 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Collaborate?</h3>
          <p className="mb-6 opacity-90">
            Whether you have a project in mind or just want to discuss AI/ML opportunities, 
            feel free to reach out. I'm always excited to explore new challenges and collaborations.
          </p>
          <a 
            href="mailto:ramyav393@gmail.com"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-accent-glow"
          >
            Send Me an Email
          </a>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
