import ScrollReveal from "@/components/ScrollReveal";
import vastkustImg from "@/assets/vastkust-sunset.jpg";

const IntroSection = () => {
  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <ScrollReveal animation="reveal-left" delay={0}>
              <p className="text-accent text-sm font-medium tracking-[0.25em] uppercase mb-4">
                Västkusten kallar
              </p>
            </ScrollReveal>
            <ScrollReveal animation="reveal-left" delay={80}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] text-balance mb-8">
                Från glöd till gemenskap
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="reveal-left" delay={160}>
              <div className="w-20 h-[1px] bg-accent/50 mb-8" />
            </ScrollReveal>
            <ScrollReveal animation="reveal-up" delay={240}>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Det handlar inte bara om fisk — det handlar om gemenskap. 
                Om kvällar vid havet, salta vindar och den där känslan 
                av att vara hemma på västkusten.
              </p>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal animation="reveal-right" delay={200} className="img-zoom rounded-sm overflow-hidden shadow-2xl">
            <img
              src={vastkustImg}
              alt="Solnedgång vid västkusten"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
