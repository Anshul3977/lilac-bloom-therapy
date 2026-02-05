"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Introduction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-150px" });

    return (
        <section className="py-24 bg-cream relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Decorative circle behind image */}
                        <div className="absolute top-10 -left-10 w-48 h-48 bg-sage/20 rounded-full -z-10" />

                        <div className="aspect-[4/5] overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=750&fit=crop"
                                alt="Calm therapy office with natural light and plants"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.0, ease: "easeOut", delay: 0.25 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.35 }}
                            className="text-sage font-medium text-xs uppercase tracking-widest mb-4 block"
                        >
                            A Grounded Approach
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.0, delay: 0.45 }}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-text-dark mb-8 leading-[1.1]"
                        >
                            You&apos;re not <span className="italic underline decoration-sage/30 underline-offset-4">alone in this.</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.0, delay: 0.6 }}
                            className="space-y-5 text-text-medium leading-relaxed font-light text-base md:text-lg"
                        >
                            <p>
                                Many of my clients are high-achieving, thoughtful individuals who appear
                                &quot;functional&quot; on the outside—but internally feel exhausted, stuck in
                                overthinking, or emotionally on edge.
                            </p>
                            <p>
                                If you&apos;re quietly struggling with constant worry, tension, or a sense
                                that you&apos;re always bracing for something to go wrong, therapy can help
                                you find relief and reconnection.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
