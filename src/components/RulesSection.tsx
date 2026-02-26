import { Check, AlertTriangle } from "lucide-react";

const rules = [
  { text: "Non-marking athletic shoes are mandatory — no exceptions.", type: "must" },
  { text: "Bring your own basketball for warm-ups.", type: "must" },
  { text: "Dark and white shirts required — teams split by colour.", type: "must" },
  { text: "Call your own fouls. Keep it clean, keep it moving.", type: "rule" },
  { text: "Games to 11 or 15 — losers sit, winners stay.", type: "rule" },
  { text: "No hanging on rims. Respect the facility.", type: "must" },
  { text: "Show up on time. Late arrivals forfeit their spot.", type: "rule" },
  { text: "$7 paid at the door — exact change appreciated.", type: "rule" },
];

const RulesSection = () => {
  return (
    <section id="rules" className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          HOUSE <span className="text-primary">RULES</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-4">
          Respect the game. Respect the house.
        </p>
        <div className="section-divider my-8" />

        <div className="grid gap-3 mt-12">
          {rules.map((rule, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
            >
              <div className="mt-0.5">
                {rule.type === "must" ? (
                  <AlertTriangle className="w-5 h-5 text-primary" />
                ) : (
                  <Check className="w-5 h-5 text-primary" />
                )}
              </div>
              <p className="font-body text-foreground/90">{rule.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
