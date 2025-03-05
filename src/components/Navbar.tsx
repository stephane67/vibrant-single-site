
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass-effect' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-foreground">
              SaaSify
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 right-0 p-4 animate-fade-in">
          <div className="flex flex-col space-y-4 py-2">
            <a 
              href="#features" 
              onClick={closeMenu}
              className="text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={closeMenu}
              className="text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              onClick={closeMenu}
              className="text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="btn-primary text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
