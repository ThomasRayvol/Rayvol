import { Header } from '@/components/cv/Header';
import { Intro } from '@/components/cv/Intro';
import { Achievements } from '@/components/cv/Achievements';
import { TechStack } from '@/components/cv/TechStack';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(250,248,241)] print:bg-white relative">
      {/* Vertical decorative bar */}
      <div className="fixed top-0 left-0 w-[2.1cm] h-full bg-gradient-to-b from-[#9bd5f7]/30 to-[#96f085]/30 -z-10 print:absolute print:h-[1000mm]" />

      {/* Language switcher */}
      <LanguageSwitcher />

      {/* Content */}
      <div className="max-w-[21cm] mx-auto px-8 py-12 print:p-0 print:pt-12">
        <Header />
        <Intro />
        <Achievements />
        <TechStack />

        {/* TODO: Add more sections */}
        <div className="mt-8 text-center text-slate-500">
          <p>More sections coming soon...</p>
        </div>
      </div>
    </main>
  );
}
