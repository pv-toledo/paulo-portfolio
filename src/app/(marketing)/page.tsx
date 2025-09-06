import { About } from "@/components/about";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex flex-col pb-40">
      <Header />
      <HeroSection />
      <About />
    </main>
  );
}
