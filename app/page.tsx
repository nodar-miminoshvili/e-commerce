import Banner from './components/Banner/Banner';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';
import LampsShowcase from './components/LampsShowcase/LampsShowcase';
import OriginalsSection from './components/OriginalsSection/OriginalsSection';
import TrendingSectionWrapper from './components/TrendingSection/TrendingSectionWrapper';

export default function Home() {
  return (
    <main className="py-3">
      <CategoriesSection />
      <LampsShowcase />
      <OriginalsSection />
      <Banner order="first" />
      <TrendingSectionWrapper />
      <Banner order="second" />
    </main>
  );
}
