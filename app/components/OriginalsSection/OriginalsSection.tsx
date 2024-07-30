import { sql } from '@vercel/postgres';
import { Fragment } from 'react';
import Product from './Product';
import SuggestionBanner from './SuggestionBanner';

const OriginalsSection = async () => {
  const { rows: products }: { rows: Product[] } =
    await sql`SELECT * FROM products WHERE original=true ORDER BY product_id`;

  return (
    <section className="container px-5 ">
      <h2 className="text-2xl font-semibold text-center mb-5 md:text-left md:mb-8">
        Products we are proud of
      </h2>
      <ul className="grid gap-x-4 gap-y-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: Product, idx: number) => {
          return idx === 4 ? (
            <Fragment key={product.product_id}>
              <SuggestionBanner />
              <Product
                thumbnail={product.details.thumbnail}
                title={product.title}
                price={product.price}
              />
            </Fragment>
          ) : (
            <Product
              key={product.product_id}
              thumbnail={product.details.thumbnail}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default OriginalsSection;
