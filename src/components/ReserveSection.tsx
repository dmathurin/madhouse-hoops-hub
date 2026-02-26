import { useState } from "react";
import { toast } from "sonner";

const ReserveSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [spotsLeft] = useState(18); // placeholder

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success(`You're in, ${name.split(" ")[0]}! See you Saturday. 🏀`);
    setName("");
    setEmail("");
  };

  return (
    <section id="reserve" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          RESERVE <span className="text-primary">YOUR SPOT</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-4">
          Only 25 spots each Saturday. Don't get locked out.
        </p>
        <div className="section-divider my-8" />

        {/* Spots counter */}
        <div className="text-center mb-10">
          <span className="font-display text-6xl font-bold text-primary text-glow">{spotsLeft}</span>
          <p className="font-body text-muted-foreground mt-2">spots remaining this week</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-body text-sm text-muted-foreground mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-card border border-border rounded-md px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-body text-sm text-muted-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full bg-card border border-border rounded-md px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-display text-lg tracking-wider py-4 rounded-md hover:brightness-110 transition-all border-glow mt-4"
          >
            LOCK IN MY SPOT
          </button>
        </form>

        <p className="text-center text-muted-foreground text-xs font-body mt-6">
          Walk-ins accepted only if space permits. Reserve to guarantee your spot.
        </p>
      </div>
    </section>
  );
};

export default ReserveSection;
