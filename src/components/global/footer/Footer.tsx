import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FooterProps } from '../../../types/footer/FooterTypes';
import { socialLinks, contactInfo } from '../../../constants/footer/FooterData';

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const decorativeShapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (decorativeShapesRef.current) {
      const shapes = decorativeShapesRef.current.children;
      
      gsap.to(shapes, {
        y: "random(-10, 10)",
        x: "random(-15, 15)",
        rotation: "random(-20, 20)",
        duration: 5,
        ease: "power2.inOut",
        stagger: 0.4,
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className={`bg-black text-white relative overflow-hidden ${className}`}>
      {/* Decorative Background Shapes */}
      <div ref={decorativeShapesRef} className="absolute inset-0 pointer-events-none">
        {/* Bottom left blue shape */}
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-blue-400 rounded-full opacity-30"></div>
        
        {/* Top right green layered shapes */}
        <div className="absolute top-16 right-16 w-20 h-20 bg-green-300 rounded-3xl opacity-40"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-green-400 rounded-2xl opacity-50"></div>
        
        {/* Bottom right yellow shape */}
        <div className="absolute bottom-16 right-24 w-32 h-32 bg-yellow-300 rounded-full opacity-25"></div>
      </div>

      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="w-full max-w-6xl mx-auto px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Logo */}
              <motion.div 
                className="flex items-center gap-3"
                variants={itemVariants}
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">Spydea</span>
              </motion.div>
              
              {/* Newsletter Form */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
                variants={itemVariants}
              >
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 px-5 py-3 text-base border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-transparent text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-white text-black text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Get A Quote
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="w-full max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-4">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact us</a></li>
                <li><a href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
              </ul>
            </motion.div>

            {/* Resources Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
              <ul className="space-y-4">
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="/career" className="text-gray-400 hover:text-white transition-colors text-sm">Career</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
              </ul>
            </motion.div>

            {/* Email Us Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white">Email US</h3>
              <div className="space-y-4">
                <a href={`mailto:${contactInfo.email}`} className="text-orange-400 hover:text-orange-300 transition-colors text-sm block">
                  {contactInfo.email}
                </a>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.id}
                      href={social.href} 
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Us Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white">Contact US</h3>
              <div className="space-y-4">
                <a href={`tel:${contactInfo.phone}`} className="text-orange-400 hover:text-orange-300 transition-colors text-sm block">
                  {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800">
          <div className="w-full max-w-6xl mx-auto px-8 py-6">
            <motion.p 
              className="text-center text-gray-500 text-sm"
              variants={itemVariants}
            >
              © 2023 Design and Developed by{' '}
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors underline">
                Themefisher
              </a>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;