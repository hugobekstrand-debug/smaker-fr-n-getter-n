import byggnadImg from "@/assets/byggnad.jpg";
import logoImg from "@/assets/logo.png";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const ADDRESS = "Getterövägen 17, 432 93 Varberg";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;
const PHONE = "0760-06 76 36";
const EMAIL = "info@getteronsrokeri.se";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 hero-image"
          style={{ backgroundImage: `url(${byggnadImg})` }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <img
            src={logoImg}
            alt="Getteröns Fisk & Rökeri"
            className="w-64 md:w-80 mx-auto mb-8 animate-reveal-fade"
          />
          <p
            className="text-primary-foreground/80 text-lg md:text-xl font-light tracking-wide animate-reveal-up"
            style={{ animationDelay: "300ms" }}
          >
            Lokalt rökeri av fisk &amp; skaldjur på Getterön, Varberg
          </p>
        </div>
      </section>

      {/* Öppettider */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-2xl text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-accent" />
              <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-wide uppercase text-foreground">
                Öppettider
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 gap-6 text-foreground">
              <div>
                <p className="font-semibold text-lg">Torsdag – Fredag</p>
                <p className="text-muted-foreground text-lg">10 – 18</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Lördag</p>
                <p className="text-muted-foreground text-lg">10 – 14</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Om oss – Pierres text */}
      <section className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-2 text-balance leading-tight">
              Vad händer när 20 års hantverk möter ny energi och matglädje?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="w-16 h-0.5 bg-accent mt-4 mb-10" />
          </ScrollReveal>
          <div className="space-y-5 text-foreground/85 text-lg leading-relaxed text-pretty">
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
                Jag bjuder in er att följa med på denna resa och att vara en del av vårt gemenskap. Håll gärna koll på våra sociala medier för att ta del av vad som händer i butiken och i restaurangen. Varmt välkomna till Getterön – jag ser fram emot att träffa er alla!
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="font-heading text-xl font-semibold text-foreground italic">
                Varmt välkomna Pierre Martinsson
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hitta hit – karta */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-10">
              <MapPin className="w-5 h-5 text-accent" />
              <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-wide uppercase text-foreground">
                Hitta hit
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100} animation="reveal-scale">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <iframe
                  title="Getteröns Fisk & Rökeri karta"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.5!2d12.2375!3d57.1175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDA3JzAzLjAiTiAxMsKwMTQnMTUuMCJF!5e0!3m2!1ssv!2sse!4v1!5m2!1ssv!2sse&q=Getterövägen+17+Varberg"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-body text-sm font-medium shadow-md">
                    Öppna i kartor →
                  </span>
                </div>
              </div>
              <div className="bg-card px-6 py-4 text-center">
                <p className="text-foreground font-medium">{ADDRESS}</p>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-14">
        <div className="container max-w-4xl">
          <ScrollReveal animation="reveal-fade">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
              <div>
                <p className="font-heading text-xl font-semibold mb-2">Getteröns Fisk &amp; Rökeri</p>
                <a
                  href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  {ADDRESS}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mt-2"
                >
                  <Mail className="w-4 h-4" />
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <a
                  href="https://www.facebook.com/getteronsrokeri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/getteronsrokeri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
};

export default Index;
