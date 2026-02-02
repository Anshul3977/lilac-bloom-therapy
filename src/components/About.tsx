import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Overlapping Circular Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main large circle */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=500&fit=crop"
                  alt="Dr. Sarah Mitchell"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Smaller overlapping circle */}
              <div className="absolute -bottom-8 -right-4 md:right-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=300&fit=crop"
                  alt="Therapy office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative background circle */}
              <div className="absolute top-8 -left-8 w-32 h-32 bg-secondary rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Dr. Sarah Mitchell
            </h2>
            <p className="text-xl text-foreground/80 font-serif italic mb-6">
              Licensed Clinical Psychologist
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                With over 15 years of experience, I've dedicated my career to helping 
                individuals find healing and growth. I hold a Ph.D. in Clinical Psychology 
                from Columbia University and am licensed to practice in California.
              </p>
              <p>
                My approach integrates Cognitive Behavioral Therapy (CBT), 
                mindfulness-based techniques, and psychodynamic principles to provide 
                comprehensive, personalized care. I believe that everyone has the 
                capacity for growth and transformation.
              </p>
            </div>
            <Button
              onClick={() => {
                const element = document.getElementById("professional");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              className="rounded-full px-8 border-foreground/20 hover:bg-card"
            >
              View Credentials
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
