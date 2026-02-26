import heroImage from "@/assets/hero-basketball.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Basketball court with dramatic orange lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-body text-primary font-semibold tracking-[0.3em] text-sm md:text-base mb-4 animate-slide-up">
          ETOBICOKE'S PREMIER DROP-IN BASKETBALL
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 text-glow animate-slide-up text-primary">
          THE MADHOUSE<br />BALLERS
        </h1>
        <p className="font-body text-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Every Saturday. 25 spots. No excuses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#reserve"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-md hover:brightness-110 transition-all border-glow"
          >
            RESERVE YOUR SPOT
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground/30 text-foreground font-display text-lg tracking-wider rounded-md hover:border-primary/60 hover:text-primary transition-all"
          >
            VIEW SCHEDULE
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-glow">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
