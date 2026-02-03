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
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block"
            >
              My Approach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6 leading-tight"
            >
              Lately it feels like <span className="italic underline decoration-primary/30">too much.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 text-muted-foreground leading-relaxed font-light"
            >
              <p>
                You're holding it all together—at work, at home, in your relationships—but 
                underneath the surface, you're tired, stretched thin, and unsure what you 
                need anymore.
              </p>
              <p className="font-medium text-foreground">
                You're not alone—and you're in the right place.
              </p>
              <p>
                Therapy can help you reconnect with yourself, feel more grounded, 
                and finally make space for your own needs. Let's figure it out together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
