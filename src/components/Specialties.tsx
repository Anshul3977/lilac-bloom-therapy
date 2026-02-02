import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const specialties = [
  {
    title: "Anxiety & Stress",
    description:
      "Learn to manage overwhelming feelings and develop coping strategies for a calmer, more centered life.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop",
  },
  {
    title: "Depression",
    description:
      "Find hope and healing as we work together to understand the root causes and build a path forward.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop",
  },
  {
    title: "Relationships",
    description:
      "Improve communication, set healthy boundaries, and cultivate deeper connections with those you love.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop",
  },
];

const Specialties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="specialties" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Areas of Focus
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            How I Can Help
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              {/* Circular Image */}
              <div className="relative mx-auto mb-6 w-48 h-48">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-secondary group-hover:border-primary transition-colors duration-300">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {specialty.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
