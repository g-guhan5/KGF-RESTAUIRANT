import { Coffee, Utensils, Leaf } from 'lucide-react';
import Reveal from '@/components/Reveal';

const AboutSection = () => {
  const values = [
    {
      icon: Coffee,
      title: 'Artisan Coffee',
      description: 'Single-origin beans, roasted in-house and brewed by passionate baristas.',
    },
    {
      icon: Utensils,
      title: 'Crafted Cuisine',
      description: 'Seasonal menus inspired by local ingredients and global flavors.',
    },
    {
      icon: Leaf,
      title: 'Fresh & Local',
      description: 'Partnering with regional farmers for the freshest, most sustainable produce.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Our Story</p>
              <h2 className="font-serif text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                A place where <em className="text-primary font-normal">flavor</em> meets feeling.
              </h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                KGF Restaurant began with a simple idea — bring people together over honest
                food and exceptional coffee. From sunrise breakfasts to late-night desserts,
                every detail is designed to make you feel at home.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Step inside and find a warm corner, soft music, and the comforting aroma of
                freshly brewed espresso. This is our craft. This is your table.
              </p>
            </Reveal>

            <Reveal delay={150} className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-medium">
                <img
                  src={new URL('@/assets/menu-coffee.jpg', import.meta.url).href}
                  alt="Freshly brewed cappuccino"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 hidden sm:block shadow-medium">
                <p className="font-serif text-4xl font-semibold">10+</p>
                <p className="text-sm uppercase tracking-widest mt-1">Years of craft</p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
            {values.map((item, index) => (
              <Reveal key={index} delay={index * 120} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-secondary mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
