import Reveal from '@/components/Reveal';
import coffee from '@/assets/menu-coffee.jpg';
import breakfast from '@/assets/menu-breakfast.jpg';
import main from '@/assets/menu-main.jpg';
import dessert from '@/assets/menu-dessert.jpg';

const MenuSection = () => {
  const categories = [
    {
      img: coffee,
      tag: 'Coffee Bar',
      title: 'Signature Brews',
      items: [
        { name: 'House Cappuccino', desc: 'Espresso, steamed milk, velvet foam', price: '₹180' },
        { name: 'Cold Brew Tonic', desc: '24-hr steeped, citrus, tonic', price: '₹220' },
        { name: 'Spiced Mocha', desc: 'Dark chocolate, cardamom, espresso', price: '₹240' },
      ],
    },
    {
      img: breakfast,
      tag: 'Breakfast',
      title: 'Morning Plates',
      items: [
        { name: 'Avocado Sourdough', desc: 'Poached egg, microgreens, chili oil', price: '₹320' },
        { name: 'Belgian Waffles', desc: 'Maple butter, berries, mascarpone', price: '₹280' },
        { name: 'Shakshuka', desc: 'Spiced tomato, eggs, feta, herbs', price: '₹340' },
      ],
    },
    {
      img: main,
      tag: 'Mains',
      title: 'From the Kitchen',
      items: [
        { name: 'Truffle Pasta', desc: 'Hand-rolled fettuccine, parmesan', price: '₹480' },
        { name: 'Wood-Fired Pizza', desc: 'Buffalo mozzarella, basil, EVOO', price: '₹420' },
        { name: 'Smoked Chicken Bowl', desc: 'Quinoa, greens, tahini', price: '₹460' },
      ],
    },
    {
      img: dessert,
      tag: 'Desserts',
      title: 'Sweet Finale',
      items: [
        { name: 'Molten Chocolate', desc: 'Vanilla bean ice cream, raspberry', price: '₹260' },
        { name: 'Tiramisu', desc: 'Mascarpone, espresso-soaked savoiardi', price: '₹240' },
        { name: 'Crème Brûlée', desc: 'Madagascar vanilla, caramelized sugar', price: '₹220' },
      ],
    },
  ];

  return (
    <section id="menu" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Our Menu</p>
            <h2 className="font-serif text-5xl lg:text-6xl font-semibold mb-4">
              Made fresh, <em className="text-primary font-normal">every day.</em>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A curated selection of café classics and chef-driven creations.
            </p>
          </Reveal>

          <div className="space-y-20">
            {categories.map((cat, idx) => (
              <Reveal
                key={cat.tag}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-medium">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">{cat.tag}</p>
                  <h3 className="font-serif text-4xl font-semibold mb-8">{cat.title}</h3>
                  <ul className="space-y-5">
                    {cat.items.map((item) => (
                      <li key={item.name} className="flex justify-between gap-6 pb-4 border-b border-border/60">
                        <div>
                          <p className="font-medium text-lg">{item.name}</p>
                          <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                        <p className="font-serif text-xl text-primary whitespace-nowrap">{item.price}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
