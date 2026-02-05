import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, image, date, slug }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/blog/${slug}`} className="block">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div>
          <time className="text-sm text-muted-foreground">{date}</time>
          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
