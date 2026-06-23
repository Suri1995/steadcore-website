import { Header } from "@/components/sections/Header";
import { CareersCTA } from "./components/CareersCTA";
import { CareersHero } from "./components/CareersHero";
import { CareersProcess } from "./components/CareersProcess";
import { CareersRoles } from "./components/CareersRoles";
import { CareersWhyJoin } from "./components/CareersWhyJoin";
import { Footer } from "@/components/sections/Footer";


export const metadata = {
  title: 'Careers — Steadcore Industries',
  description:
    'Join Steadcore Industries — a PCB manufacturer founded in 2026 in Hyderabad. Open roles in manufacturing, engineering, quality, operations, and customer success.',
};

export default function Careers() {
  return (
    <main id="main-content">
      <Header />
      <CareersHero />
      <CareersWhyJoin />
      <CareersRoles />
      <CareersProcess />
      <CareersCTA />
      <Footer />
    </main>
  );
}