import Banner from './components/Banner/Banner';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';
import LampsShowcase from './components/LampsShowcase/LampsShowcase';
import OriginalsSection from './components/OriginalsSection/OriginalsSection';

export default function Home() {
  return (
    <main className="py-3">
      <CategoriesSection />
      <LampsShowcase />
      <OriginalsSection />
      <Banner order="first" />
      <Banner order="second" />
    </main>
  );
}
