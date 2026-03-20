import ScrollReveal from "@/components/ScrollReveal";
import { Clock } from "lucide-react";

const HoursSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-xl text-center">
        <ScrollReveal animation="reveal-fade">
          <Clock className="w-6 h-6 text-accent mx-auto mb-5" />
        </ScrollReveal>
        <ScrollReveal animation="reveal-up" delay={60}>
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground mb-10">
            Öppettider
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="reveal-up" delay={140}>
          <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-20">
            <div>
              <p className="font-heading text-xl font-medium text-foreground">Torsdag – Fredag</p>
              <p className="text-muted-foreground text-lg mt-1">10:00 – 18:00</p>
            </div>
            <div>
              <p className="font-heading text-xl font-medium text-foreground">Lördag</p>
              <p className="text-muted-foreground text-lg mt-1">10:00 – 14:00</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="reveal-fade" delay={240}>
          <div className="w-24 h-[1px] bg-border mx-auto mt-10" />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HoursSection;
