import React from 'react'
import ProductList, { Product } from '../components/ProductList';
import client from "@/sanity/lib/client";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

export default async function page() {

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

        <Header/>
                    <ProductList products={products} />

<Footer/>


    </div>
  )
}
