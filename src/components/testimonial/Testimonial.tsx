import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialCard from './TestimonialCard';
import { testimonialData } from '../../constants/testimonial/TestimonialData';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Testimonial: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const decorativeShapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const decorativeShape = decorativeShapeRef.current;

    if (!section || !title || !subtitle || !decorativeShape) return;

    // GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(subtitle, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(title, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 
      "-=0.4"
    )
    .fromTo(decorativeShape,
      { opacity: 0, scale: 0.8, rotation: -10 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: "power2.out" },
      "-=0.6"
    );

    // Floating animation for decorative shape
    gsap.to(decorativeShape, {
      y: "20px",
      rotation: "5deg",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const leftColumnTestimonials = testimonialData.testimonials.filter(t => t.category === 'left');
  const rightTopTestimonials = testimonialData.testimonials.filter(t => t.category === 'right-top');
  const rightBottomTestimonials = testimonialData.testimonials.filter(t => t.category === 'right-bottom');

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <motion.p 
            ref={subtitleRef}
            className="text-red-500 text-sm font-bold tracking-wider uppercase mb-4 opacity-0"
          >
            {testimonialData.sectionSubtitle}
          </motion.p>
          
          <motion.h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto opacity-0"
          >
            {testimonialData.sectionTitle}
          </motion.h2>

          {/* Decorative arrow */}
          <div 
            ref={decorativeShapeRef}
            className="absolute -top-8 right-0 md:right-20 opacity-0"
          >
            <div className="w-24 h-16 relative">
              <svg 
                viewBox="0 0 100 60" 
                className="w-full h-full text-gray-400"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path 
                  d="M10 30 Q50 10 90 30" 
                  className="stroke-current"
                />
                <path 
                  d="M80 25 L90 30 L80 35" 
                  className="stroke-current fill-current"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative"
        >
          {/* Left Column */}
          <div className="space-y-8">
            {leftColumnTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8 relative">
            {/* Top section */}
            <div className="space-y-8">
              {rightTopTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                  index={index + leftColumnTestimonials.length}
                />
              ))}
            </div>

            {/* Decorative shape */}
            <div className="flex justify-end mb-8">
              <motion.div 
                className="w-32 h-24 relative"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 1, delay: 0.8 }
                }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-green-300 to-emerald-400 rounded-2xl transform rotate-12 opacity-80">
                  <div className="w-full h-full bg-gradient-to-tl from-teal-400 to-green-300 rounded-2xl shadow-lg" />
                </div>
                <motion.div 
                  className="absolute inset-2 bg-white rounded-xl flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="text-teal-600 text-2xl">🌊</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom section */}
            <div className="space-y-8">
              {rightBottomTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                  index={index + leftColumnTestimonials.length + rightTopTestimonials.length}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;