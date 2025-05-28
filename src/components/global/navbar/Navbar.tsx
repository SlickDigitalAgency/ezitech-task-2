import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { navbarData } from '../../../constants/navbar/NavbarData';
import { NavbarProps, NavbarLink, LanguageOption } from '../../../types/navbar/NavbarTypes';

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(navbarData.languages[0]);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navbarRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, 
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (linkId: string) => {
    setActiveDropdown(activeDropdown === linkId ? null : linkId);
  };

  const handleLanguageChange = (language: LanguageOption) => {
    setSelectedLanguage(language);
    setActiveDropdown(null);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const renderNavLink = (link: NavbarLink, isMobile = false) => {
    const baseClasses = isMobile 
      ? "block px-4 py-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
      : "relative flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium";
    
    const activeClasses = isActiveLink(link.href) ? "text-gray-900" : "";

    if (link.hasDropdown) {
      return (
        <div key={link.id} className={isMobile ? "relative" : "relative group"}>
          <button
            onClick={() => toggleDropdown(link.id)}
            className={`${baseClasses} ${activeClasses} ${isMobile ? 'w-full text-left' : ''}`}
          >
            {link.label}
            <ChevronDown 
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                activeDropdown === link.id ? 'rotate-180' : ''
              }`} 
            />
          </button>

          <AnimatePresence>
            {(activeDropdown === link.id || (!isMobile && activeDropdown === link.id)) && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={
                  isMobile
                    ? "bg-gray-50 border-l-2 border-gray-200 ml-4"
                    : "absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-lg z-50"
                }
              >
                {link.dropdownItems?.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    onClick={() => {
                      setActiveDropdown(null);
                      if (isMobile) setIsMenuOpen(false);
                    }}
                    className={
                      isMobile
                        ? "block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                        : "block px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                    }
                  >
                    <div className="font-medium">{item.label}</div>
                    {!isMobile && item.description && (
                      <div className="text-xs text-gray-400 mt-1">{item.description}</div>
                    )}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        key={link.id}
        to={link.href}
        onClick={() => isMobile && setIsMenuOpen(false)}
        className={`${baseClasses} ${activeClasses}`}
      >
        {link.label}
      </Link>
    );
  };

  const renderLanguageDropdown = (isMobile = false) => (
    <div className={isMobile ? "relative" : "relative"}>
      <button
        onClick={() => toggleDropdown('language')}
        className={`flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 ${
          isMobile ? 'w-full justify-start' : 'rounded-lg hover:bg-gray-50'
        }`}
      >
        {!isMobile && <Globe className="h-4 w-4" />}
        <span className="font-medium">{selectedLanguage.label}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${
            activeDropdown === 'language' ? 'rotate-180' : ''
          }`} 
        />
      </button>

      <AnimatePresence>
        {activeDropdown === 'language' && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={
              isMobile
                ? "bg-gray-50 border-l-2 border-gray-200 ml-4"
                : "absolute top-full right-0 mt-2 w-32 bg-white border border-gray-100 rounded-lg shadow-lg z-50"
            }
          >
            {navbarData.languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                  selectedLanguage.code === language.code ? 'text-gray-900 bg-gray-50' : 'text-gray-600'
                } ${isMobile ? 'border-b border-gray-100 last:border-b-0' : ''}`}
              >
                <span className="flex items-center space-x-2">
                  <span>{language.flag}</span>
                  <span>{language.label}</span>
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.nav
      ref={navbarRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            ref={logoRef}
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">⚡</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {navbarData.logo.text}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navbarData.navigation.map((link) => renderNavLink(link))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {renderLanguageDropdown()}
            
            <div className="flex items-center space-x-3">
              {navbarData.buttons.map((button) => (
                <Link
                  key={button.id}
                  to={button.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    button.variant === 'primary'
                      ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <div className="py-4 space-y-2">
                {navbarData.navigation.map((link) => renderNavLink(link, true))}
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  {renderLanguageDropdown(true)}
                </div>
                
                <div className="flex flex-col space-y-2 pt-4 px-4">
                  {navbarData.buttons.map((button) => (
                    <Link
                      key={button.id}
                      to={button.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-2 rounded-lg font-medium text-center transition-all duration-200 ${
                        button.variant === 'primary'
                          ? 'bg-gray-900 text-white hover:bg-gray-800'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {button.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;