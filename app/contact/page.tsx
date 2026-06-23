import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ScrollReveal } from '@/components/animated/ScrollReveal';
import { ContactHero } from '@/app/contact/components/ContactHero';
import { ContactMap } from './components/ContactMap';
import { ContactSection } from './components/ContactSection';

export const metadata = {
  title: 'Contact Us | Steadcore Industries',
  description:
    'Get in touch with Steadcore Industries for PCB manufacturing inquiries, quotations, technical support, and partnerships.',
};

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Steadcore Industries',
  url: 'https://www.steadcore.in',
  email: 'info@steadcore.in',
  telephone: '+91-72330-22460',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Survey No. 22A1, Ramdaspally, Ibrahimpatnam Mandal',
    addressLocality: 'Rangareddy District',
    addressRegion: 'Telangana',
    postalCode: '501510',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
};

export default function ContactPage() {
  return (
    <main className="w-full overflow-hidden">
      <Header />

      <section aria-hidden="true" className="relative overflow-hidden inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">

        <div className="relative z-10">
          <ContactHero />

          <ScrollReveal>
  <ContactSection />
</ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-7xl px-4 sm:px-10 mx-auto py-10 sm:py-20">
              <ContactMap />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
      />
    </main>
  );
}