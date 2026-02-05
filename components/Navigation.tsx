"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show when near top of page
            if (currentScrollY < 100) {
                setIsVisible(true);
                setIsScrolled(false);
            } else {
                // Show on scroll up, hide on scroll down
                setIsVisible(currentScrollY < lastScrollY);
                setIsScrolled(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (sectionId: string) => {
        if (pathname !== "/") {
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { label: "About", action: () => scrollToSection("about") },
        { label: "Services", action: () => scrollToSection("specialties") },
        { label: "FAQ", action: () => scrollToSection("faq") },
        { label: "Contact", to: "/contact" },
    ];

    const navClasses = [
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    ].join(" ");

    return (
        <header className={navClasses}>
            <div className="container mx-auto px-6 lg:px-12">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-serif text-xl lg:text-2xl font-medium text-foreground hover:text-primary transition-colors"
                    >
                        Dr. Maya Reynolds, PsyD
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) =>
                            link.to ? (
                                <Link
                                    key={link.label}
                                    href={link.to}
                                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <button
                                    key={link.label}
                                    onClick={link.action}
                                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </button>
                            )
                        )}
                        <Button
                            onClick={() => scrollToSection("contact")}
                            className="bg-sage text-white hover:bg-sage/90 rounded-full px-6"
                        >
                            Book Consultation
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-t border-border"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) =>
                                link.to ? (
                                    <Link
                                        key={link.label}
                                        href={link.to}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={link.label}
                                        onClick={link.action}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 text-left"
                                    >
                                        {link.label}
                                    </button>
                                )
                            )}
                            <Button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    scrollToSection("contact");
                                }}
                                className="bg-sage text-white hover:bg-sage/90 rounded-full mt-2"
                            >
                                Book Consultation
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navigation;
