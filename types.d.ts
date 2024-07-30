type Theme = 'dark' | 'light' | 'system';

type Product = {
  product_id: number;
  title: string;
  price: string;
  details: {
    images: string[];
    thumbnail: string;
    description: string;
  };
  original: boolean;
  trending: boolean;
};
