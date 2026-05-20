import { Mail, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactSection = () => {
  const info = [
    { icon: MapPin, label: 'Visit', value: 'Tamilnadu, India' },
    { icon: Phone, label: 'Call', value: '+91 8825607013', link: 'tel:+918825607013' },
    { icon: Mail, label: 'Email', value: 'guhanguhan5070@gmail.com', link: 'mailto:guhanguhan5070@gmail.com' },
    { icon: Clock, label: 'Hours', value: 'Mon–Sun · 8 AM – 11 PM' },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Reservations</p>
            <h2 className="font-serif text-5xl lg:text-6xl font-semibold mb-4">
              Reserve your <em className="text-primary font-normal">table.</em>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              We'd love to host you. Drop us a note and we'll confirm shortly.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {info.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-background border border-border">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-lg hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.instagram.com/jerry.x_efx?igsh=MTUyaWJvNTF5N2l2NQ%3D%3D&utm_source=qr" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                </Button>
              </div>
            </div>

            <form
              className="lg:col-span-3 bg-background p-8 lg:p-10 rounded-sm shadow-soft border border-border space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Name: ${data.get('name')}%0AGuests: ${data.get('guests')}%0ADate: ${data.get('date')}%0AMessage: ${data.get('message')}`;
                window.location.href = `mailto:hello@kgfrestaurant.com?subject=Reservation Request&body=${body}`;
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Name</label>
                  <Input name="name" required placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Guests</label>
                  <Input name="guests" type="number" min="1" required placeholder="2" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Date & Time</label>
                <Input name="date" type="datetime-local" required />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Special Requests</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Birthday, dietary preferences, seating..."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Request Reservation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
