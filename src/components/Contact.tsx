import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Send, MessageCircle } from "lucide-react";

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
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <MessageCircle className="absolute top-1/4 left-10 w-16 h-16 text-primary/5 animate-float" />
        <Send className="absolute bottom-1/3 right-10 w-12 h-12 text-accent/5 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <MessageCircle className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">Let's Talk</span>
            </div>
          </div>
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
              className="relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all hover:shadow-glow group overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors"></div>
              
              {info.link ? (
                <a 
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group/link relative z-10"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="font-medium group-hover/link:text-primary transition-colors break-all">
                      {info.value}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card className="relative p-8 md:p-12 bg-gradient-primary text-primary-foreground border-0 text-center overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Send className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Collaborate?</h3>
            <p className="mb-6 opacity-90 max-w-xl mx-auto leading-relaxed">
              Whether you have a project in mind or just want to discuss AI/ML opportunities, 
              feel free to reach out. I'm always excited to explore new challenges and collaborations.
            </p>
            <a 
              href="mailto:ramyav393@gmail.com"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-all shadow-accent-glow hover:scale-105 transform"
            >
              Send Me an Email
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
