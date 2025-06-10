
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Demo", href: "/demo" },
    { name: "Pricing", href: "/pricing" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-brand-navy' : 'text-white'
            }`}>
              StratMind.ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.href}
                className={`transition-colors duration-300 hover:text-brand-teal ${
                  location.pathname === link.href 
                    ? 'text-brand-teal font-medium' 
                    : isScrolled ? 'text-brand-gray' : 'text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button 
                variant="ghost" 
                className={`transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-brand-navy hover:text-brand-blue' 
                    : 'text-white hover:text-brand-teal'
                }`}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/try-free">
              <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 rounded-lg">
                Try Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-brand-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-brand-navy' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href}
                  className="text-brand-gray hover:text-brand-blue transition-colors duration-300 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <Link to="/signin">
                  <Button variant="ghost" className="justify-start text-brand-navy w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/try-free">
                  <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white w-full">
                    Try Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
