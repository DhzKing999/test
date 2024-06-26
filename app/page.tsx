import HeroSection from "@/components/landingpage/hero-section";
import HowItWorksSection from "@/components/landingpage/how-it-works";
import JoinToday from "@/components/landingpage/join-today";
import KeyFeature from "@/components/landingpage/key-feature";
import Image from "next/image";

export default function Home()
{
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-10  px-40 py-10">
      <HeroSection />
      <KeyFeature />
      <HowItWorksSection />
      <JoinToday />
    </main>
  );
}
