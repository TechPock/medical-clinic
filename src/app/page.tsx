import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { OnlineConsultationBanner } from "@/components/sections/OnlineConsultationBanner";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <OnlineConsultationBanner />
      <TestimonialSection />
    </>
  );
}
