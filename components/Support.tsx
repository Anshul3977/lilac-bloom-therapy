"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const supportItems = [
    "Evidence-based methods: CBT, EMDR, mindfulness",
    "Trauma-informed and body-oriented techniques",
    "Focus on safety, stabilization, and regulation",
    "Practical tools + depth-oriented work",
    "Support for professional burnout and high internal pressure",
    "Both in-person (Santa Monica) and telehealth available",
];

const Support = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-sand" ref={ref}>
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
                            className="text-sage font-medium text-xs uppercase tracking-widest mb-4 block"
                        >
                            My Approach
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-text-dark mb-6 leading-[1.1]"
                        >
                            Collaborative, Evidence-Based Therapy
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-text-medium font-light text-base md:text-lg mb-8"
                        >
                            I believe therapy works best when you feel respected, understood, and actively involved in the process.
                        </motion.p>
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
                                    <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-sage" />
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
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=750&fit=crop"
                                alt="Peaceful therapy office space"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ocean/20 rounded-full -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Support;
