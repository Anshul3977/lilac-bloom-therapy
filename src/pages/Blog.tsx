import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
    excerpt:
      "Anxiety is a natural response to stress, but when it becomes overwhelming, it can interfere with daily life. Learn to recognize the signs and discover effective strategies for managing anxiety.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=450&fit=crop",
    date: "January 15, 2026",
    slug: "understanding-anxiety",
  },
  {
    title: "The Power of Mindfulness in Daily Life",
    excerpt:
      "Mindfulness isn't just meditation—it's a way of being present in each moment. Discover simple practices you can incorporate into your daily routine to reduce stress and increase well-being.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=450&fit=crop",
    date: "January 8, 2026",
    slug: "power-of-mindfulness",
  },
  {
    title: "Building Healthy Boundaries in Relationships",
    excerpt:
      "Boundaries are essential for healthy relationships, yet many of us struggle to set and maintain them. Learn why boundaries matter and how to communicate them effectively.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=450&fit=crop",
    date: "December 28, 2025",
    slug: "healthy-boundaries",
  },
  {
    title: "Navigating Life Transitions with Grace",
    excerpt:
      "Whether it's a career change, relationship shift, or personal growth journey, life transitions can be challenging. Here's how to navigate them with resilience and self-compassion.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=450&fit=crop",
    date: "December 15, 2025",
    slug: "navigating-transitions",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Insights & Resources
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thoughts, insights, and resources on mental health, well-being, 
              and personal growth. I hope these articles provide comfort and guidance 
              on your journey.
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

      <Footer />
    </div>
  );
};

export default Blog;
