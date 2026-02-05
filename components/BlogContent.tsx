"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";

const blogPosts = [
    {
        title: "Understanding Anxiety in High-Achievers",
        excerpt:
            "High-achieving individuals often experience anxiety differently. Learn to recognize the signs of perfectionism-driven anxiety and discover strategies for finding relief while maintaining your drive.",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=450&fit=crop",
        date: "January 15, 2026",
        slug: "understanding-anxiety-high-achievers",
    },
    {
        title: "EMDR for Trauma: What to Expect",
        excerpt:
            "EMDR therapy can be transformative for processing trauma. Here's what you can expect from the process, how it works, and why it's become one of the most effective treatments available.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=450&fit=crop",
        date: "January 8, 2026",
        slug: "emdr-for-trauma",
    },
    {
        title: "Breaking Free from Perfectionism",
        excerpt:
            "Perfectionism might feel like a strength, but it often leads to burnout and anxiety. Discover how to maintain high standards while letting go of the need to be perfect.",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=450&fit=crop",
        date: "December 28, 2025",
        slug: "breaking-free-perfectionism",
    },
    {
        title: "Burnout Recovery: A Therapist's Guide",
        excerpt:
            "Recovering from burnout takes more than a vacation. Learn evidence-based strategies for rebuilding your energy, setting boundaries, and creating a sustainable relationship with work.",
        image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=450&fit=crop",
        date: "December 15, 2025",
        slug: "burnout-recovery-guide",
    },
];

const BlogContent = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-sand-dark">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="text-sage font-medium text-sm uppercase tracking-wider mb-4 block">
                            Insights & Resources
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
                            Insights & Resources
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Thoughts on mental health, trauma recovery, and sustainable living
                            for high-achieving professionals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.slug} {...post} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogContent;
