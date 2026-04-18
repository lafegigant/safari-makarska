import Hero from '@/components/Hero';
import Tours from '@/components/Tours';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Safari Makarska | Biokovo Mountain Tours',
  description: 'Experience unforgettable hiking adventures on Mount Biokovo with Safari Makarska. Expert guides, stunning views, and memories that last a lifetime.',
  keywords: 'Biokovo, hiking tours, mountain adventure, Makarska, Croatia',
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Tours />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
