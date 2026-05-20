import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Menu', id: 'menu' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-soft border-b border-border' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight text-foreground"
          >
            <Coffee className="w-6 h-6 text-primary" />
            KGF<span className="text-primary italic font-normal">RESTAURANT</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className="text-sm uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="hero" size="sm" onClick={() => scrollToSection('contact')}>
              Reserve
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted rounded-md uppercase text-sm tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
