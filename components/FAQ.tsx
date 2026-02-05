"use client";

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
        question: "What can I expect from our first session?",
        answer:
            "Our first session is an opportunity to get to know each other. I'll ask about your history, what brings you to therapy, and your goals. It's also a chance for you to ask questions and see if we're a good fit.",
    },
    {
        question: "How long does therapy typically last?",
        answer:
            "The length varies for each person. Some find relief in a few months, while others benefit from longer-term work. We'll regularly check in on your progress and adjust as needed.",
    },
    {
        question: "Do you offer virtual sessions?",
        answer:
            "Yes! I offer secure video sessions for clients throughout California. Virtual therapy provides the same quality of care with added convenience.",
    },
    {
        question: "What are your fees and do you accept insurance?",
        answer:
            "I offer a free 15-minute consultation. I'm an out-of-network provider but can provide superbills for insurance reimbursement. I also offer a limited number of sliding scale spots.",
    },
    {
        question: "How do I know if therapy is right for me?",
        answer:
            "If you're feeling stuck, overwhelmed, or like something needs to change, therapy might help. You don't need a specific diagnosis. Therapy is for anyone who wants support in understanding themselves better and living more fully.",
    },
];

const FAQ = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-150px" });

    return (
        <section id="faq" className="py-24 bg-sand" ref={ref}>
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-16"
                >
                    <span className="text-sage font-medium text-xs uppercase tracking-widest mb-4 block">
                        FAQ
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-text-dark">
                        Common Questions
                    </h2>
                </motion.div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.0, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.35 + index * 0.15 }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="bg-cream rounded-lg shadow-sm border-none px-6"
                                >
                                    <AccordionTrigger className="text-left font-serif text-xl md:text-2xl font-normal text-text-dark hover:no-underline py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-text-medium leading-relaxed font-light text-base md:text-lg pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
