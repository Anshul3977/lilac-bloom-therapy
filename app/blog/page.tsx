import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <BlogContent />
            <Footer />
        </div>
    );
}
