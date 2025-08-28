import React from "react";
import { Header } from "@/components/Landing/Header";
import { FeatureLayoutSection } from "@/components/Landing/FeatureLayoutSection";
import { HeroSection } from "@/components/Landing/HeroSection";
import { TestimonialSection } from "@/components/Landing/TestimonialSection";
import { CallToActionSection } from "@/components/Landing/CallToActionSection";

const HomePage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <Header />
      <main className="flex flex-col w-full">
        <HeroSection />
        <FeatureLayoutSection />
        <TestimonialSection />
        <CallToActionSection />
      </main>
    </div>
  );
};

export default HomePage;
