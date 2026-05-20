import { Coffee } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-serif text-xl font-semibold">
            <Coffee className="w-5 h-5 text-primary" />
            KGF Restaurant
          </div>
          <p className="text-sm text-muted-foreground tracking-wide">
            © {year} KGF Restaurant · Brewed with passion in Tamilnadu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
