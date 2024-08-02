import { sql } from '@vercel/postgres';
import TrendingSection from './TrendingSection';

const TrendingSectionWrapper = async () => {
  const { rows: products }: { rows: Product[] } =
    await sql`SELECT * FROM products WHERE trending=true ORDER BY product_id`;

  return (
    <section className="container px-5 py-12">
      <h2 className="text-2xl font-semibold text-center mb-5 md:text-left md:mb-8">Trending Now</h2>
      <TrendingSection trendingProducts={products} />
    </section>
  );
};

export default TrendingSectionWrapper;
