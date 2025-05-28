import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Copy, Lightbulb, Network } from 'lucide-react';
import { AboutSectionProps } from '@/types/home/about/AboutTypes';
import { aboutFeatures } from '@/constants/home/about/AboutData';
import { cn } from '@/lib/utils';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const getIconComponent = (iconName: string) => {
  const icons = {
    send: Send,
    copy: Copy,
    lightbulb: Lightbulb,
    network: Network,
  };
  const IconComponent = icons[iconName as keyof typeof icons];
  return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
};

export const About = ({ className }: AboutSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (!containerRef.current) return;

    const features = containerRef.current.querySelectorAll('.feature-card');
    
    gsap.fromTo(features, 
      { 
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center+=100",
          toggleActions: "play none none none"
        }
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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      ref={containerRef}
      className={cn(
        "w-full py-20 md:py-28 relative overflow-hidden bg-[#F8FAFC]",
        className
      )}
    >
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-yellow-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-40 h-40 bg-green-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-left max-w-3xl mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="text-red-500 text-sm font-medium mb-4 block uppercase tracking-wide"
          >
            WE ARE THE ULTIMATE
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            A Technology Approach
          </motion.h2>
          
        </motion.div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
  {/* Text Column */}
  <motion.p
    variants={itemVariants}
    className="text-gray-600 text-lg leading-relaxed mb-6 md:w-3/5"
  >
    Pellen tesque in ipsum id orci porta dapibus. Sed port titor nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula.
  </motion.p>

  {/* Button Column */}
  <div className="mr-auto md:w-auto">
    <button
      className="px-8 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-sm font-medium"
    >
      All Features
    </button>
  </div>
</div>
          

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              className="feature-card group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={cn(
                "p-6 rounded-2xl transition-all duration-300",
                feature.bgColor,
                "hover:shadow-lg"
              )}>
                <div className="mb-4">
                  {getIconComponent(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
