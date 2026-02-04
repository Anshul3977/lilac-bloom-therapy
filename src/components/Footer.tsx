import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-text-dark text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h4 className="font-serif text-2xl md:text-3xl mb-4">Lilac Therapy</h4>
            <p className="text-white/70 leading-relaxed font-light text-base">
              Compassionate therapy for adults navigating anxiety, 
              depression, and life transitions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-medium text-xs uppercase tracking-widest mb-6">
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("specialties")}
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                  Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                  FAQ
                </button>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-medium text-xs uppercase tracking-widest mb-6">
              Contact
            </h5>
            <ul className="space-y-3 text-white/70 font-light">
              <li>(555) 123-4567</li>
              <li>hello@lilactherapy.com</li>
              <li>
                123 Wellness Street<br />
                San Francisco, CA 94102
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm font-light">
            © {new Date().getFullYear()} Lilac Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
