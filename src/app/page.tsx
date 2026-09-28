import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { CoreMechanics } from "@/components/CoreMechanics";
import { Footer } from "@/components/Footer";
import { DirectAccess } from "@/components/DirectAccess";

export default function Home() {
  return (
    <div className="space-y-20 py-8">
      <Hero />
      <Philosophy />
      <CoreMechanics />
      <DirectAccess />
      <Footer />
    </div>
  );
}
