
// import ProductList from './components/ProductList';
// import client from '@/sanity/lib/client';

import Footer from '../app/Component/Footer/Footer';
import Header from '../app/Component/Header/Header';
import HomeComponent from './Page/Home/Home'
import Leatest from './Page/Home/Leatest'
import Productss from './Page/Home/Productss'
import Offer from './Page/Home/Offer'
import Trending1 from './Page/Home/Trending1'
import Trending2 from './Page/Home/Trending2'
import Discount from './Page/Home/Discount'
import Categories from './Page/Home/Ctegories'
import Image from 'next/image';
import Blog from './Page/Home/Blog'
import Topheadder from './Page/Topheadder/Topheadder'

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
  price: number ;
  description?: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  stockLevel?: number;
  category: 'Chair' | 'Sofa';
}

export default async function Home() {
  // Fetch products from Sanity
  // const products: Product[] = await client.fetch(`*[_type == "product"]{
  //   _id,
  //   name,
  //   image {
  //     asset-> {
  //       _ref,
  //       _type,
  //       url
  //     },
  //     hotspot
  //   },
  //   price,
  //   description,
  //   discountPercentage,
  //   isFeaturedProduct,
  //   stockLevel,
  //   category
  // }`);

  return (
    // <div>
    <div>
      <Topheadder/>
<Header/>
<HomeComponent/>
<Productss/>
<Leatest/>
<Offer/>
<Trending1/>
<Trending2/>
<Discount/>
<Categories/>
<br/>

{/* letaest updte */}
<div className="relative">
  <Image
    src="/26.png"
    alt="update"
    width={1930}
    height={462}
    className="w-full h-auto"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6">

    <h3 className="text-sm sm:text-2xl md:text-4xl text-[#151875] font-extrabold mb-2 sm:mb-4 text-center">
      Get Latest Update By Subscribing to Our Newsletter
    </h3>
    

    <button className="px-2 sm:px-6 py-2 sm:py-3 bg-[#FB2E86] text-white text-xs sm:text-xl rounded-sm sm:rounded-lg hover:bg-[#FB2f98] transition duration-200">
      Shop Now
    </button>
  </div>
</div>

{/* logos image */}
<div className="flex justify-center items-center py-18 sm:py-24">
  <Image
  src="/27.png"
  width={904}
  height={93}
  alt="logoos"
  />
</div>
<br/>
<Blog/>








<Footer/>
</div>
    
  );
}
