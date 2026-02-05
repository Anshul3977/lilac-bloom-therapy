 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 
 const specialties = [
   {
     title: "Anxiety & Panic",
     description: "Work through overwhelming worry, racing thoughts, and physical tension using evidence-based approaches like CBT, mindfulness, and body-oriented techniques.",
     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
   },
   {
     title: "Trauma & EMDR",
     description: "Process single-incident or complex trauma at a pace that feels safe. I specialize in EMDR and trauma-focused therapy to help you feel more regulated and grounded.",
     image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
   },
   {
     title: "Burnout & Perfectionism",
     description: "For entrepreneurs, creatives, and professionals feeling disconnected after years of pushing through stress. Develop sustainable ways of living and working.",
     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
   },
 ];
 
 const Specialties = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="specialties" className="py-24 bg-sand-dark" ref={ref}>
       <div className="container mx-auto px-6 lg:px-12">
         {/* Header */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
           className="text-center mb-16"
         >
           <span className="text-sage font-medium text-xs uppercase tracking-widest mb-4 block">
             How I Can Support You
           </span>
           <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-text-dark">
             Areas of Focus
           </h2>
         </motion.div>
 
         {/* Cards */}
         <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
           {specialties.map((specialty, index) => (
             <motion.div
               key={specialty.title}
               initial={{ opacity: 0, y: 50 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{
                 duration: 0.6,
                 delay: 0.15 + index * 0.1,
                 ease: [0.25, 0.46, 0.45, 0.94],
               }}
               className="group text-center"
             >
               {/* Circular Image */}
               <div className="relative mx-auto w-48 h-48 mb-8">
                 <div
                   className="w-full h-full rounded-full overflow-hidden border-4 border-sage/30 group-hover:border-sage transition-colors duration-300"
                 >
                   <img
                     src={specialty.image}
                     alt={specialty.title}
                     className="w-full h-full object-cover"
                     loading="lazy"
                   />
                 </div>
               </div>
               
               {/* Content */}
               <h3 className="font-serif text-2xl md:text-3xl font-normal text-text-dark mb-4">
                 {specialty.title}
               </h3>
               <p className="text-text-medium font-light leading-relaxed">
                 {specialty.description}
               </p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Specialties;