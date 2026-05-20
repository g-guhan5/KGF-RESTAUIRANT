import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/cafe-hero.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px) brightness(0.7)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <p className="text-sm uppercase tracking-[0.4em] text-primary-foreground/80 mb-6">
            Est. 2024 · Made with Taste
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-[1.05]">
            KGF <em className="font-normal italic text-[hsl(35_65%_70%)]">Restaurant</em>
          </h1>
          <div className="w-24 h-px bg-white/40 mx-auto mb-6" />
          <p className="font-serif italic text-2xl sm:text-3xl text-[hsl(35_65%_78%)] mb-4">
            "Made with Taste"
          </p>
          <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Where every cup tells a story and every plate is crafted with passion.
            A modern cafe experience rooted in warmth, flavor and timeless hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" onClick={() => scrollToSection('menu')}>
              Explore Menu
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-transparent text-white border-white/40 hover:bg-white hover:text-foreground"
            >
              Book a Table
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Scroll to About"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
