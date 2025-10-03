import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 border-t border-border overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {new Date().getFullYear()} Naga Ramya Vankayala. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-accent animate-pulse" fill="currentColor" /> for AI and innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
