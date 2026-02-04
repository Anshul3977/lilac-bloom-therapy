import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const credentials = [
  {
    title: "Education",
    items: [
      "Ph.D. in Clinical Psychology, Columbia University",
      "M.A. in Counseling Psychology, NYU",
      "B.A. in Psychology, UC Berkeley",
    ],
  },
  {
    title: "Licenses & Certifications",
    items: [
      "Licensed Clinical Psychologist, California (PSY 12345)",
      "Certified Cognitive Behavioral Therapist",
      "EMDR Trained Clinician",
      "Mindfulness-Based Stress Reduction (MBSR) Teacher",
    ],
  },
  {
    title: "Professional Memberships",
    items: [
      "American Psychological Association (APA)",
      "California Psychological Association",
      "Association for Behavioral and Cognitive Therapies",
    ],
  },
];

const ProfessionalBackground = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="professional" className="bg-cream" ref={ref}>
      {/* Credentials Section */}
      <div className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <span className="text-olive font-medium text-xs uppercase tracking-widest mb-4 block">
              Credentials
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-text-dark">
              Professional Background
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {credentials.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white rounded-lg shadow-sm border-none px-6"
                  >
                    <AccordionTrigger className="text-left font-serif text-xl md:text-2xl font-normal text-text-dark hover:no-underline py-6">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-text-medium font-light flex items-start gap-3 text-base md:text-lg"
                          >
                            <span className="w-1.5 h-1.5 bg-olive rounded-full mt-2.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-olive rounded-2xl p-10 md:p-12 lg:p-16 text-center"
          >
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight">
              Ready to begin your journey?
            </h3>
            <p className="text-white/90 mb-10 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed">
              Take the first step toward a more fulfilling life. Schedule a free 
              15-minute consultation to see if we're a good fit.
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/contact";
                }
              }}
              variant="outline"
              size="lg"
              className="rounded-full px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-olive uppercase tracking-widest text-xs md:text-sm font-medium bg-transparent"
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;
