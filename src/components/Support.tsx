import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const supportPoints = [
  "Develop healthier coping mechanisms",
  "Process difficult emotions safely",
  "Build stronger relationships",
  "Increase self-awareness and confidence",
  "Navigate life transitions with support",
  "Create lasting positive changes",
];

const Support = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Your Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Together, we can help you
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Therapy is a collaborative process. I'll provide guidance and support 
              while honoring your unique experiences and goals. Here's what we can 
              work on together:
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {supportPoints.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=600&fit=crop"
                alt="Supportive therapy environment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-background rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
