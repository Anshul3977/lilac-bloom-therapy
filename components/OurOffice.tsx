"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, Leaf } from "lucide-react";
import Image from "next/image";

const OurOffice = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-sage/10" ref={ref}>
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
                            Visit Us
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-text-dark mb-8 leading-[1.1]"
                        >
                            A Calm Space for Healing
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="space-y-5 text-text-medium leading-relaxed font-light text-base md:text-lg mb-10"
                        >
                            <p>
                                My office is located in Santa Monica at 123 45th Street W, CA 90401.
                                The space is designed to feel calm and grounding, with natural light
                                and a comfortable, uncluttered environment.
                            </p>
                            <p>
                                Many clients share that the space itself helps them feel more at ease
                                when they arrive. I offer both in-person sessions and secure telehealth
                                for clients throughout California.
                            </p>
                        </motion.div>

                        {/* Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-sage" />
                                </div>
                                <span className="text-text-dark font-medium">
                                    123 45th Street W, Santa Monica, CA 90401
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                                    <Building2 className="w-5 h-5 text-sage" />
                                </div>
                                <span className="text-text-dark font-medium">
                                    In-person & telehealth available
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                                    <Leaf className="w-5 h-5 text-sage" />
                                </div>
                                <span className="text-text-dark font-medium">
                                    Private, comfortable, welcoming environment
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Images */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-5 gap-4">
                            {/* Large image */}
                            <div className="col-span-3 aspect-[4/5] overflow-hidden rounded-lg relative">
                                <Image
                                    src="/office1.jpeg"
                                    alt="Therapy office with comfortable seating and natural light"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                            {/* Smaller overlapping image */}
                            <div className="col-span-2 aspect-[4/5] overflow-hidden rounded-lg mt-12 relative">
                                <Image
                                    src="/office2.jpeg"
                                    alt="Cozy therapy space with plants and bookshelf"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage/30 rounded-full -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurOffice;
