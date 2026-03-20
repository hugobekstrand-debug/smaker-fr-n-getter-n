import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import FoodShowcase from "@/components/sections/FoodShowcase";
import StorySection from "@/components/sections/StorySection";
import HoursSection from "@/components/sections/HoursSection";
import MapSection from "@/components/sections/MapSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <IntroSection />
      <FoodShowcase />
      <StorySection />
      <HoursSection />
      <MapSection />
      <FooterSection />
    </div>
  );
};

export default Index;
