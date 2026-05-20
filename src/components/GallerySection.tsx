import Reveal from '@/components/Reveal';
import hero from '@/assets/cafe-hero.jpg';
import coffee from '@/assets/menu-coffee.jpg';
import breakfast from '@/assets/menu-breakfast.jpg';
import main from '@/assets/menu-main.jpg';
import dessert from '@/assets/menu-dessert.jpg';

const GallerySection = () => {
  const images = [
    { src: hero, alt: 'Café interior', span: 'md:col-span-2 md:row-span-2' },
    { src: coffee, alt: 'Latte art' },
    { src: breakfast, alt: 'Avocado toast' },
    { src: main, alt: 'Truffle pasta' },
    { src: dessert, alt: 'Molten chocolate' },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Moments</p>
            <h2 className="font-serif text-5xl lg:text-6xl font-semibold">
              A taste of <em className="text-primary font-normal">KGF</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
            {images.map((img, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className={`overflow-hidden rounded-sm shadow-soft group ${img.span ?? ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
