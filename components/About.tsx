"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 bg-cream relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Images */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative"
                    >
                        {/* Decorative circles */}
                        <div className="absolute -top-8 -left-8 w-24 h-24 bg-sage/20 rounded-full -z-10" />
                        <div className="absolute bottom-20 -right-4 w-16 h-16 bg-terracotta/20 rounded-full -z-10" />
                        <div className="absolute -bottom-4 left-20 w-20 h-20 bg-ocean/20 rounded-full -z-10" />

                        {/* Main circular image */}
                        <div className="relative">
                            <div className="w-72 h-72 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden relative">
                                <Image
                                    src="/dr-maya-reynolds.png"
                                    alt="Dr. Maya Reynolds, PsyD"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Overlapping smaller circle */}
                            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop"
                                    alt="Therapy office exterior"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-sage font-medium text-xs uppercase tracking-widest mb-4 block"
                        >
                            About Me
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-text-dark mb-4 leading-[1.1]"
                        >
                            Dr. Maya Reynolds, PsyD
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-sage font-medium text-lg mb-6"
                        >
                            Licensed Clinical Psychologist
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="space-y-5 text-text-medium leading-relaxed font-light text-base md:text-lg mb-8"
                        >
                            <p>
                                With over a decade of experience, I specialize in helping adults navigate
                                anxiety, trauma, and burnout. My clients are often high-achieving professionals
                                who feel exhausted beneath a &quot;functional&quot; exterior.
                            </p>
                            <p>
                                I integrate evidence-based approaches—including CBT, EMDR, mindfulness, and
                                body-oriented techniques—to address both the emotional and physiological sides
                                of what you&apos;re experiencing. My work emphasizes safety, stabilization, and
                                helping you develop sustainable ways to live and work.
                            </p>
                            <p>
                                I offer both in-person therapy from my Santa Monica office and secure telehealth
                                sessions throughout California.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.45 }}
                        >
                            <Button
                                variant="outline"
                                className="rounded-full px-10 py-6 border-2 border-text-dark text-text-dark hover:bg-card uppercase tracking-widest text-xs md:text-sm font-medium"
                                onClick={() => {
                                    const element = document.getElementById("professional");
                                    element?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                View Credentials
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
