import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Specialties from "@/components/Specialties";
import Support from "@/components/Support";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Introduction />
      <Specialties />
      <Support />
      <About />
      <FAQ />
      <ProfessionalBackground />
      <Footer />
    </div>
  );
};

export default Index;
