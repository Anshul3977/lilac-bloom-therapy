import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const supportItems = [
  "Understanding and managing anxiety and panic attacks",
  "Processing grief, loss, and major life transitions",
  "Building self-esteem and self-compassion",
  "Improving relationships and communication skills",
  "Developing healthy coping mechanisms for stress",
  "Working through depression and low mood",
];

const Support = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-olive font-medium text-xs uppercase tracking-widest mb-4 block"
            >
              Support
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-text-dark mb-8 leading-[1.1]"
            >
              I can help you with
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
            >
              {supportItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-light-lilac flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-olive" />
                  </div>
                  <span className="text-text-medium font-light text-base md:text-lg leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                alt="Supportive therapy session"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-light-lilac rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
