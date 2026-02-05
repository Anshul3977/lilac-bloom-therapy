 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Button } from "@/components/ui/button";
 import drMayaImage from "@/assets/dr-maya-reynolds.png";
 
 const Hero = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-50px" });
 
   const scrollToContact = () => {
     const element = document.getElementById("contact");
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <section ref={ref} className="min-h-screen flex items-center pt-20 bg-sand relative overflow-hidden">
       {/* Decorative circles */}
       <div className="absolute top-20 left-10 w-64 h-64 bg-sage/20 rounded-full opacity-40 -z-10" />
       <div className="absolute bottom-40 right-20 w-40 h-40 bg-ocean/20 rounded-full opacity-30 -z-10" />
       
       <div className="container mx-auto px-6 lg:px-12">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Text Content */}
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
             className="order-2 lg:order-1"
           >
             <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.05] text-text-dark mb-8 tracking-tight">
               Therapy for Anxiety, Trauma, and Burnout
               <span className="block italic text-sage">in Santa Monica</span>
             </h1>
             <motion.p
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
               className="text-base md:text-lg text-text-medium mb-10 max-w-lg leading-relaxed font-light"
             >
               Compassionate support for adults navigating stress, perfectionism, and the lingering effects of past experiences.
             </motion.p>
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
               className="flex flex-col sm:flex-row gap-4"
             >
               <Button
                 onClick={scrollToContact}
                 size="lg"
                 className="rounded-full px-10 py-6 bg-sage text-white hover:bg-sage/90 uppercase tracking-widest text-xs md:text-sm font-medium"
               >
                 Schedule Free Consultation
               </Button>
               <Button
                 variant="outline"
                 size="lg"
                 onClick={() => {
                   const element = document.getElementById("about");
                   element?.scrollIntoView({ behavior: "smooth" });
                 }}
                 className="rounded-full px-10 py-6 border-2 border-text-dark text-text-dark hover:bg-card uppercase tracking-widest text-xs md:text-sm font-medium"
               >
                 Learn More
               </Button>
             </motion.div>
           </motion.div>
 
           {/* Arched Image */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={isInView ? { opacity: 1, scale: 1 } : {}}
             transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
             className="order-1 lg:order-2 flex justify-center"
           >
             <div className="relative w-full max-w-md">
               {/* Decorative circles behind image */}
               <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-sage/30 rounded-full -z-10" />
               <div className="absolute -top-6 -right-6 w-20 h-20 bg-terracotta/20 rounded-full -z-10" />
               
               {/* Arched container */}
               <div
                 className="relative overflow-hidden bg-card"
                 style={{
                   borderRadius: "50% 50% 0 0 / 35% 35% 0 0",
                   aspectRatio: "3/4",
                 }}
               >
                 <img
                   src={drMayaImage}
                   alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                   className="w-full h-full object-cover"
                   loading="eager"
                 />
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Hero;