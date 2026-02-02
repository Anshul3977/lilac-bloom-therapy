import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
              Find Peace Within
              <span className="block italic text-primary">Yourself</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Compassionate therapy to help you navigate life's challenges, 
              heal from the past, and build a more fulfilling future. 
              You don't have to do this alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById("about");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full px-8 border-foreground/20 hover:bg-card"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Arched Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Arched container */}
              <div
                className="relative overflow-hidden bg-card"
                style={{
                  borderRadius: "50% 50% 0 0 / 30% 30% 0 0",
                  aspectRatio: "3/4",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                  alt="Therapist in a peaceful setting"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
