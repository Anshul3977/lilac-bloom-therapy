import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=750&fit=crop"
                alt="Peaceful therapy setting with plants and natural light"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Overlay accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              My Approach
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Healing happens in connection
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I believe that true healing happens when we feel truly seen and understood. 
                My approach combines evidence-based techniques with deep compassion, 
                creating a safe space where you can explore your thoughts and feelings 
                without judgment.
              </p>
              <p>
                Whether you're struggling with anxiety, depression, relationship issues, 
                or life transitions, I'm here to walk alongside you on your journey 
                toward wellness. Together, we'll uncover your innate strengths and 
                develop practical tools for lasting change.
              </p>
              <p>
                Every person's path is unique, and I tailor my approach to meet you 
                exactly where you are. Your story matters, and I'm honored to be 
                part of your healing journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
