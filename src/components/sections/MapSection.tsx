import ScrollReveal from "@/components/ScrollReveal";
import { MapPin } from "lucide-react";

const ADDRESS = "Getterövägen 17, 432 93 Varberg";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;

const MapSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-3xl text-center">
        <ScrollReveal animation="reveal-fade">
          <MapPin className="w-5 h-5 text-accent mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl font-light tracking-wide text-foreground mb-8">
            Hitta hit
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="reveal-scale" delay={100}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
          >
            <div className="relative">
              <iframe
                title="Getteröns Fisk & Rökeri karta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.5!2d12.2375!3d57.1175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDA3JzAzLjAiTiAxMsKwMTQnMTUuMCJF!5e0!3m2!1ssv!2sse!4v1!5m2!1ssv!2sse&q=Getterövägen+17+Varberg"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-medium shadow-md">
                  Öppna i kartor →
                </span>
              </div>
            </div>
            <div className="bg-card px-6 py-4">
              <p className="text-foreground text-sm font-medium">{ADDRESS}</p>
            </div>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MapSection;
