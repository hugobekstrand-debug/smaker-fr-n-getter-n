import ScrollReveal from "@/components/ScrollReveal";
import byggnadImg from "@/assets/byggnad.jpg";

const StorySection = () => {
  return (
    <section className="py-24 md:py-36 bg-secondary overflow-hidden">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Image column */}
          <div className="lg:col-span-2">
            <ScrollReveal animation="reveal-clip-up" className="rounded-sm overflow-hidden shadow-2xl sticky top-24">
              <img
                src={byggnadImg}
                alt="Getteröns Rökeri"
                className="w-full h-[350px] lg:h-[500px] object-cover"
              />
            </ScrollReveal>
          </div>

          {/* Text column */}
          <div className="lg:col-span-3">
            <ScrollReveal animation="reveal-right" delay={0}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.1] text-balance mb-4">
                Vad händer när 20 års hantverk möter ny energi och matglädje?
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="reveal-right" delay={80}>
              <div className="w-16 h-[1px] bg-accent/50 my-8" />
            </ScrollReveal>

            <div className="space-y-6 text-foreground/80 text-[1.05rem] leading-[1.8] text-pretty">
              <ScrollReveal delay={120}>
                <p>
                  Jag heter Pierre och det är med stor glädje och stolthet som jag tar över Getterönsrökeri efter Ingo.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p>
                  Min passion för mat och gastronomi har alltid varit en stor del av mitt liv, och nu får jag chansen att förvalta och utveckla en tradition som ligger mig varmt om hjärtat.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p>
                  Getterön har en fantastisk röktradition, och jag ser det som en ära att få fortsätta den. Jag vill inte bara bevara det som redan finns utan också skapa en plats där matglädjen får stå i focus.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <p>
                  Jag drömmer om en plats där vi alla kan samlas, njuta av god mat och dryck, och dela äkta stunder tillsammans.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={280}>
                <p>
                  Rökerihantverket har jag bokstavligen levt med i snart tjugo år.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={320}>
                <p>
                  Det handlar om mer än bara mat; det handlar om att skapa minnen och upplevelser som förenar oss. Jag lovar att lägga ner hela min själ i detta arbete, för jag vill att ni ska känna den kärlek och omtanke som ligger bakom varje bit av vår rökta fisk och varje tallrik vi serverar.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={360}>
                <p>
                  Jag bjuder in er att följa med på denna resa och att vara en del av vårt gemenskap. Varmt välkomna till Getterön – jag ser fram emot att träffa er alla!
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p className="font-heading text-xl md:text-2xl font-medium text-foreground italic pt-4">
                  Varmt välkomna<br />Pierre Martinsson
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
