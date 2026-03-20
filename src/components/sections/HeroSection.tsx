import byggnadImg from "@/assets/byggnad.jpg";
import logoImg from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end justify-center overflow-hidden">
      <div
        className="absolute inset-0 hero-image scale-105"
        style={{ backgroundImage: `url(${byggnadImg})` }}
      />
      {/* Warm golden overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/80" />

      <div className="relative z-10 text-center px-6 pb-20 md:pb-28 max-w-3xl">
        <img
          src={logoImg}
          alt="Getteröns Fisk & Rökeri"
          className="w-56 md:w-72 mx-auto mb-8 animate-reveal-fade drop-shadow-2xl"
        />
        <p
          className="text-primary-foreground/90 text-base md:text-lg font-light tracking-[0.2em] uppercase animate-reveal-up"
          style={{ animationDelay: "400ms" }}
        >
          Fisk · Skaldjur · Rökeri
        </p>
        <p
          className="text-primary-foreground/60 text-sm mt-3 tracking-wider animate-reveal-up"
          style={{ animationDelay: "600ms" }}
        >
          Getterön, Varberg
        </p>

        {/* Scroll indicator */}
        <div
          className="mt-12 animate-reveal-fade"
          style={{ animationDelay: "1000ms" }}
        >
          <div className="w-px h-12 bg-primary-foreground/30 mx-auto animate-[float-gentle_3s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
