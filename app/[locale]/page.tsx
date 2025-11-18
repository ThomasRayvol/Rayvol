import { Header } from '@/components/cv/Header';
import { Intro } from '@/components/cv/Intro';
import { Achievements } from '@/components/cv/Achievements';
import { TechStack } from '@/components/cv/TechStack';
import { Experience } from '@/components/cv/Experience';
import { Projects } from '@/components/cv/Projects';
import { Education } from '@/components/cv/Education';
import { SoftSkills } from '@/components/cv/SoftSkills';
import { Languages } from '@/components/cv/Languages';
import { Interests } from '@/components/cv/Interests';
import { Contact } from '@/components/cv/Contact';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(250,248,241)] print:bg-white relative">
      {/* Vertical decorative bar */}
      <div className="fixed top-0 left-0 w-[2.1cm] h-full bg-gradient-to-b from-[#9bd5f7]/30 to-[#96f085]/30 -z-10 print:absolute print:h-[1000mm]" />

      {/* Language switcher */}
      <LanguageSwitcher />

      {/* Content */}
      <div className="max-w-[21cm] mx-auto px-8 py-12 print:p-0 print:pt-12 space-y-6">
        <Header />
        <Intro />
        <Achievements />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <SoftSkills />

        {/* Contact and additional info in a two-column layout on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Languages />
          <Interests />
        </div>

        <Contact />
      </div>
    </main>
  );
}
