import { MapPin, Clock, DollarSign, Users } from "lucide-react";

const details = [
  { icon: MapPin, label: "Location", value: "Ourland Community Centre", sub: "18 Ourland Ave, Etobicoke" },
  { icon: Clock, label: "Time", value: "Every Saturday", sub: "12:30 PM – 2:30 PM" },
  { icon: DollarSign, label: "Cost", value: "$7.00", sub: "Per drop-in session" },
  { icon: Users, label: "Capacity", value: "25 Players", sub: "First come, first served" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          WHEN & <span className="text-primary">WHERE</span>
        </h2>
        <div className="section-divider my-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {details.map((item) => (
            <div
              key={item.label}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-body text-muted-foreground text-sm mb-1">{item.label}</p>
              <p className="font-display text-2xl font-bold text-foreground">{item.value}</p>
              <p className="font-body text-muted-foreground text-sm mt-1">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Map embed */}
        <div className="mt-12 rounded-lg overflow-hidden border border-border">
          <iframe
            title="Ourland Community Centre location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2!2d-79.56!3d43.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM5JzAwLjAiTiA3OcKwMzMnMzYuMCJX!5e0!3m2!1sen!2sca!4v1600000000000"
            width="100%"
            height="300"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
