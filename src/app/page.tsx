
import ProductList from './components/ProductList';
import client from '@/sanity/lib/client';


export interface Product {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    hotspot?: boolean;
  };
  price: string;
  description?: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  stockLevel?: number;
  category: 'Chair' | 'Sofa';
}

export default async function Home() {
  // Fetch products from Sanity
  const products: Product[] = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    image {
      asset-> {
        _ref,
        _type,
        url
      },
      hotspot
    },
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }`);

  return (
    <div>
    
      <ProductList products={products} />

    </div>
  );
}