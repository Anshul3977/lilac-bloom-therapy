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
import { Button } from "@/components/ui/button";

const credentials = [
    {
        title: "Education",
        items: [
            "Ph.D. in Clinical Psychology, UCLA",
            "M.A. in Counseling Psychology, Pepperdine University",
            "B.A. in Psychology, UC Santa Barbara",
        ],
    },
    {
        title: "Licenses & Certifications",
        items: [
            "Licensed Clinical Psychologist, California (PSY 29847)",
            "EMDR Trained Clinician",
            "Certified in Cognitive Behavioral Therapy (CBT)",
            "Mindfulness-Based Stress Reduction (MBSR) Certified",
        ],
    },
    {
        title: "Professional Memberships",
        items: [
            "American Psychological Association (APA)",
            "California Psychological Association",
            "International Society for Traumatic Stress Studies",
        ],
    },
];

const ProfessionalBackground = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="professional" className="py-24 bg-sand" ref={ref}>
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-16"
                >
                    <span className="text-sage font-medium text-xs uppercase tracking-widest mb-4 block">
                        Credentials
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-text-dark">
                        Professional Background
                    </h2>
                </motion.div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {credentials.map((credential, index) => (
                            <motion.div
                                key={credential.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="bg-cream rounded-lg shadow-sm border-none px-6"
                                >
                                    <AccordionTrigger className="text-left font-serif text-xl md:text-2xl font-normal text-text-dark hover:no-underline py-6">
                                        {credential.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6">
                                        <ul className="space-y-2">
                                            {credential.items.map((item, itemIndex) => (
                                                <li
                                                    key={itemIndex}
                                                    className="text-text-medium font-light text-base md:text-lg leading-relaxed"
                                                >
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

                {/* CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-terracotta rounded-2xl p-8 md:p-12 text-center"
                >
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                        Ready to Begin Your Journey?
                    </h3>
                    <p className="text-white/90 font-light text-base md:text-lg mb-8 max-w-2xl mx-auto">
                        Take the first step toward a more fulfilling life. Schedule a free 15-minute
                        consultation to see if we&apos;re a good fit.
                    </p>
                    <Button
                        onClick={scrollToContact}
                        className="bg-white text-terracotta hover:bg-white/90 rounded-full px-10 py-6 uppercase tracking-widest text-xs md:text-sm font-medium"
                    >
                        Schedule Consultation
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProfessionalBackground;
