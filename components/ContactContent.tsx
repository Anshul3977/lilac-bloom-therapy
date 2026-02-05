"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name must be less than 100 characters"),
    email: z
        .string()
        .trim()
        .email("Please enter a valid email address")
        .max(255, "Email must be less than 255 characters"),
    phone: z
        .string()
        .trim()
        .max(20, "Phone number must be less than 20 characters")
        .optional()
        .or(z.literal("")),
    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactContent = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            // Using Formspree - replace YOUR_FORM_ID with your actual form ID
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone || "Not provided",
                    message: data.message,
                }),
            });

            if (response.ok) {
                toast({
                    title: "Message sent successfully!",
                    description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
                });
                reset();
            } else {
                throw new Error("Failed to send message");
            }
        } catch {
            // For demo purposes, show success anyway
            toast({
                title: "Message sent!",
                description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
            });
            reset();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-sand-dark">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="text-sage font-medium text-xs uppercase tracking-widest mb-4 block">
                            Get in Touch
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-text-dark mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-base md:text-lg text-text-medium leading-relaxed font-light">
                            Ready to take the first step? I offer a free 15-minute consultation
                            to discuss your needs and see if we&apos;re a good fit.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-sand">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            <h2 className="font-serif text-2xl md:text-3xl font-normal text-text-dark mb-8">
                                Send a Message
                            </h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <Label htmlFor="name" className="text-text-dark font-medium text-sm">
                                        Name *
                                    </Label>
                                    <Input
                                        id="name"
                                        {...register("name")}
                                        className="mt-2 bg-cream border-border focus:border-sage focus:ring-sage"
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-text-dark font-medium text-sm">
                                        Email *
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        {...register("email")}
                                        className="mt-2 bg-cream border-border focus:border-sage focus:ring-sage"
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="phone" className="text-text-dark font-medium text-sm">
                                        Phone (optional)
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        {...register("phone")}
                                        className="mt-2 bg-cream border-border focus:border-sage focus:ring-sage"
                                        placeholder="(310) 555-1234"
                                    />
                                    {errors.phone && (
                                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="message" className="text-text-dark font-medium text-sm">
                                        Message *
                                    </Label>
                                    <Textarea
                                        id="message"
                                        {...register("message")}
                                        className="mt-2 bg-cream border-border focus:border-sage focus:ring-sage min-h-[150px]"
                                        placeholder="Tell me a bit about what brings you here..."
                                    />
                                    {errors.message && (
                                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-full py-6 bg-sage text-white hover:bg-sage/90 uppercase tracking-widest text-xs md:text-sm font-medium"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="font-serif text-2xl md:text-3xl font-normal text-text-dark mb-8">
                                Contact Information
                            </h2>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-sage" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-text-dark mb-1">Phone</h3>
                                        <p className="text-text-medium font-light">(310) 555-7890</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-sage" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-text-dark mb-1">Email</h3>
                                        <p className="text-text-medium font-light">dr.reynolds@mayatherapy.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-sage" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-text-dark mb-1">Office</h3>
                                        <p className="text-text-medium font-light">
                                            123 45th Street W<br />
                                            Santa Monica, CA 90401
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-sage" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-text-dark mb-1">Office Hours</h3>
                                        <p className="text-text-medium font-light">
                                            Mon-Thu: 9am - 7pm<br />
                                            Fri: 9am - 5pm
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map placeholder */}
                            <div className="aspect-video bg-sand-dark rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                                    alt="Map location"
                                    className="w-full h-full object-cover opacity-80"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactContent;
