import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Presentation } from '@/components/sections/Presentation';
import { BrandVoice } from '@/components/sections/BrandVoice';
import { BrandPillars } from '@/components/sections/BrandPillars';
import { Tone } from '@/components/sections/Tone';
import { Audience } from '@/components/sections/Audience';
import { Guidelines } from '@/components/sections/Guidelines';
import { DosAndDonts } from '@/components/sections/DosAndDonts';
import { Examples } from '@/components/sections/Examples';
import { Conclusions } from '@/components/sections/Conclusions';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MobileNav />
      
      <main className="flex-1 lg:pl-72">
        <Hero />
        <div id="introduccion" className="scroll-m-20">
          <Presentation />
        </div>
        <BrandVoice />
        <Tone />
        <BrandPillars />
        <Audience />
        <Guidelines />
        <DosAndDonts />
        <Examples />
        <Conclusions />
        
        <Footer />
      </main>
    </div>
  );
}
