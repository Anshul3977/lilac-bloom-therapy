import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What can I expect in our first session?",
    answer:
      "Our first session is an opportunity for us to get to know each other. I'll ask about your background, what brings you to therapy, and your goals. It's also a chance for you to ask questions and see if we're a good fit. There's no pressure to share more than you're comfortable with.",
  },
  {
    question: "How long does therapy typically last?",
    answer:
      "The duration of therapy varies greatly depending on your individual needs and goals. Some clients find relief in a few months, while others benefit from longer-term work. We'll regularly check in on your progress and adjust our approach as needed.",
  },
  {
    question: "Do you offer virtual sessions?",
    answer:
      "Yes! I offer secure video sessions for clients who prefer the convenience of meeting from home or can't make it to the office. Virtual sessions are conducted through a HIPAA-compliant platform to ensure your privacy.",
  },
  {
    question: "What are your fees and do you accept insurance?",
    answer:
      "I offer a sliding scale based on income and financial circumstances. I am an out-of-network provider, which means I can provide you with a superbill to submit to your insurance for potential reimbursement. Please contact me to discuss fees and payment options.",
  },
  {
    question: "How often should we meet?",
    answer:
      "Most clients start with weekly sessions to build momentum and establish a strong therapeutic relationship. As you progress, we may adjust the frequency to biweekly or monthly, depending on your needs and preferences.",
  },
  {
    question: "Is everything I share confidential?",
    answer:
      "Yes, confidentiality is the cornerstone of therapy. Everything you share is kept strictly confidential, with a few legal exceptions (such as imminent risk of harm to yourself or others). I'll explain these limits in detail during our first session.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:no-underline text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
