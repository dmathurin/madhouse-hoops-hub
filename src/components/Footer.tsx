const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-display text-2xl font-bold text-primary mb-2">THE MADHOUSE BALLERS</h3>
        <p className="font-body text-muted-foreground text-sm mb-6">
          Etobicoke's hardest Saturday run. Every week. No off-season.
        </p>
        <div className="flex justify-center gap-8 text-muted-foreground font-body text-sm">
          <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
          <a href="#rules" className="hover:text-primary transition-colors">Rules</a>
          <a href="#reserve" className="hover:text-primary transition-colors">Reserve</a>
        </div>
        <p className="text-muted-foreground/50 text-xs font-body mt-8">
          © {new Date().getFullYear()} The Madhouse Ballers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
