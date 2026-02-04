import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative circle behind image */}
            <div className="absolute top-10 -left-10 w-48 h-48 bg-light-lilac rounded-full -z-10" />
            
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=750&fit=crop"
                alt="Peaceful therapy setting with plants and natural light"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-olive font-medium text-xs uppercase tracking-widest mb-4 block"
            >
              My Approach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-text-dark mb-8 leading-[1.1]"
            >
              Lately it feels like <span className="italic underline decoration-olive/30 underline-offset-4">too much.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-5 text-text-medium leading-relaxed font-light text-base md:text-lg"
            >
              <p>
                You're holding it all together—at work, at home, in your relationships—but 
                underneath the surface, you're tired, stretched thin, and unsure what you 
                need anymore.
              </p>
              <p className="font-medium text-text-dark">
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
