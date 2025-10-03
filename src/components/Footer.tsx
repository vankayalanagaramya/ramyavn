const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Naga Ramya Vankayala. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion for AI and innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
