import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import RulesSection from "@/components/RulesSection";
import ReserveSection from "@/components/ReserveSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScheduleSection />
      <RulesSection />
      <ReserveSection />
      <Footer />
    </div>
  );
};

export default Index;
