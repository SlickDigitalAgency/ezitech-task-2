import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClientLogoSectionProps } from '@/types/client/ClientTypes';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ClientLogo = ({ logos }: ClientLogoSectionProps) => {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logosRef.current) return;

    const logoElements = logosRef.current.querySelectorAll('.client-logo');

    gsap.fromTo(
      logoElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: logosRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const firstRow = logos.slice(0, 6);
  const secondRow = logos.slice(6, 10);

  return (
    <motion.div
      ref={logosRef}
      className="max-w-8xl mx-auto py-20 space-y-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* First Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
        {firstRow.map((logo) => (
          <motion.div
            key={logo.id}
            className="client-logo w-full h-20 relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <div className="bg-white rounded-xl p-4 w-full h-full flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <img
                src={logo.imageSrc}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
        {secondRow.map((logo) => (
          <motion.div
            key={logo.id}
            className="client-logo w-full h-20 relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <div className="bg-white rounded-xl p-4 w-full h-full flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <img
                src={logo.imageSrc}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ClientLogo;
