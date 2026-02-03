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
    content: `
      • Ph.D. in Clinical Psychology, Columbia University (2008)
      • M.A. in Psychology, University of California, Berkeley (2004)
      • B.A. in Psychology, Stanford University (2002)
    `,
  },
  {
    title: "Licenses & Certifications",
    content: `
      • Licensed Clinical Psychologist, California (PSY 28542)
      • Certified in Cognitive Behavioral Therapy (CBT)
      • Certified EMDR Practitioner
      • Mindfulness-Based Stress Reduction (MBSR) Trained
    `,
  },
  {
    title: "Professional Memberships",
    content: `
      • American Psychological Association (APA)
      • California Psychological Association
      • Anxiety and Depression Association of America (ADAA)
      • International Association for Cognitive Psychotherapy
    `,
  },
  {
    title: "Specialized Training",
    content: `
      • Trauma-Focused Cognitive Behavioral Therapy
      • Dialectical Behavior Therapy (DBT)
      • Attachment-Based Therapy
      • Couples and Family Therapy
    `,
  },
];

const ProfessionalBackground = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="professional" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Credentials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground">
              Professional Background
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-16"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {credentials.map((credential, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:no-underline text-foreground font-normal">
                    {credential.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {credential.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-primary rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary-foreground mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
              Taking the first step is often the hardest. I'm here to support you 
              every step of the way.
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="secondary"
              size="lg"
              className="rounded-full px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Schedule a Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;
