 import { Link } from "react-router-dom";
 import { Phone, Mail, MapPin, Clock } from "lucide-react";
 
 const Footer = () => {
   const scrollToSection = (sectionId: string) => {
     const element = document.getElementById(sectionId);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <footer id="contact" className="bg-text-dark text-white py-16">
       <div className="container mx-auto px-6 lg:px-12">
         <div className="grid md:grid-cols-3 gap-12 mb-12">
           {/* Brand */}
           <div>
             <h3 className="font-serif text-2xl font-medium mb-4">
               Dr. Maya Reynolds, PsyD
             </h3>
             <p className="text-white/70 font-light leading-relaxed">
               Compassionate therapy for anxiety, trauma, and burnout in Santa Monica, CA.
             </p>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
               Quick Links
             </h4>
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
                   Services
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
             <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
               Contact
             </h4>
             <ul className="space-y-3">
               <li className="flex items-center gap-3">
                 <Phone className="w-4 h-4 text-sage" />
                 <span className="text-white/70 font-light">(310) 555-7890</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="w-4 h-4 text-sage" />
                 <span className="text-white/70 font-light">dr.reynolds@mayatherapy.com</span>
               </li>
               <li className="flex items-start gap-3">
                 <MapPin className="w-4 h-4 text-sage mt-1" />
                 <span className="text-white/70 font-light">
                   123 45th Street W<br />
                   Santa Monica, CA 90401
                 </span>
               </li>
               <li className="flex items-start gap-3">
                 <Clock className="w-4 h-4 text-sage mt-1" />
                 <span className="text-white/70 font-light">
                   Mon-Thu: 9am - 7pm<br />
                   Fri: 9am - 5pm
                 </span>
               </li>
             </ul>
           </div>
         </div>
 
         {/* Bottom */}
         <div className="border-t border-white/10 pt-8 text-center">
           <p className="text-white/50 font-light text-sm">
             © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;