import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import {type Locale} from '@/i18n';

export default async function HomePage({
  params
}: {
  params: {locale: Locale};
}) {
  const {locale} = params;

  return (
    <main>
      <Hero />
      <About />
      <Projects locale={locale} />
      <Skills />
      <Contact />
    </main>
  );
}
