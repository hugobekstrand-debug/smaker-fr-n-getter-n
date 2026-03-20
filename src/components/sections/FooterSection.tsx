import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const ADDRESS = "Getterövägen 17, 432 93 Varberg";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;
const PHONE = "0760-06 76 36";
const EMAIL = "info@getteronsrokeri.se";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container max-w-4xl">
        <ScrollReveal animation="reveal-fade">
          <div className="text-center mb-10">
            <p className="font-heading text-2xl md:text-3xl font-light tracking-wide">
              Getteröns Fisk &amp; Rökeri
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-sm">
            <div className="space-y-2">
              <a
                href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
                className="flex items-center justify-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail className="w-3.5 h-3.5" />
                {EMAIL}
              </a>
            </div>

            <div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {ADDRESS}
              </a>
            </div>

            <div className="flex items-center justify-center gap-5">
              <a
                href="https://www.facebook.com/getteronsrokeri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/getteronsrokeri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
            <p className="text-primary-foreground/30 text-xs tracking-wider uppercase">
              © {new Date().getFullYear()} Getteröns Fisk &amp; Rökeri
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default FooterSection;
