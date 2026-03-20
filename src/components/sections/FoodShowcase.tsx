import ScrollReveal from "@/components/ScrollReveal";
import roktFiskImg from "@/assets/rokt-fisk.jpg";
import skaldjurImg from "@/assets/skaldjur.jpg";

const FoodShowcase = () => {
  return (
    <section className="py-0">
      {/* Full-width parallax divider */}
      <div
        className="parallax-panel h-[50vh] min-h-[300px] relative flex items-center justify-center"
        style={{ backgroundImage: `url(${roktFiskImg})` }}
      >
        <div className="absolute inset-0 bg-primary/50" />
        <ScrollReveal animation="reveal-scale" className="relative z-10 text-center px-6">
          <p className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-light leading-[1.05]" style={{ lineHeight: '1.1' }}>
            Rökt med kärlek<br />
            <span className="text-primary-foreground/70 text-3xl md:text-4xl lg:text-5xl italic font-light">sedan generationer</span>
          </p>
        </ScrollReveal>
      </div>

      {/* Two-column food grid */}
      <div className="container max-w-6xl py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card: Rökt Fisk */}
          <ScrollReveal animation="reveal-up" delay={0} className="group">
            <div className="img-zoom rounded-sm overflow-hidden shadow-xl mb-6">
              <img
                src={roktFiskImg}
                alt="Rökt fisk på rustik bräda"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-2">
              Rökt fisk
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Traditionellt halländskt hantverk. Varje filé röks långsamt över al och bok 
              för den perfekta smaken.
            </p>
          </ScrollReveal>

          {/* Card: Skaldjur */}
          <ScrollReveal animation="reveal-up" delay={120} className="group md:mt-16">
            <div className="img-zoom rounded-sm overflow-hidden shadow-xl mb-6">
              <img
                src={skaldjurImg}
                alt="Skaldjursfat vid havet"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-2">
              Skaldjur
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Fångad längs Hallandskusten. Räkor, kräftor och ostron — 
              serverat med västkustens bästa ingredienser.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
