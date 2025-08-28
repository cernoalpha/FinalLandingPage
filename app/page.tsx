import React from "react";
import { Header } from "@/components/Header";
import { FeatureLayoutSection } from "@/components/FeatureLayoutSection";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CallToActionSection } from "@/components/CallToActionSection";

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
