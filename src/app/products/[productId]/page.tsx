
// // import Image from 'next/image';
// // import client from '@/sanity/lib/client';
// // import imageUrlBuilder from '@sanity/image-url';
// // import { SanityImageSource } from '@sanity/image-url/lib/types/types';
// // import { RiShoppingCart2Fill } from 'react-icons/ri';
// // import Link from 'next/link';
// // import Footer from '../../Component/Footer/Footer';
// // import Header from '../../Component/Header/Header';

// // const builder = imageUrlBuilder(client);

// // function urlFor(source: SanityImageSource) {
// //   return builder.image(source);
// // }

// // interface ProductPageProps {
// //   params: {
// //     productId: string;
// //   };
// // }

// // async function getProduct(productId: string) {
// //   return await client.fetch(`*[_type == "product" && _id == $productId][0]{
// //     _id,
// //     name,
// //     image {
// //       asset-> {
// //         _ref,
// //         _type,
// //         url
// //       },
// //       hotspot
// //     },
// //     price,
// //     description,
// //     discountPercentage,
// //     isFeaturedProduct,
// //     stockLevel,
// //     category
// //   }`, { productId });
// // }

// // async function getRelatedProducts(category: string, currentProductId: string) {
// //   // Increased the limit to 8 products
// //   return await client.fetch(`*[_type == "product" && category == $category && _id != $currentProductId][0...8]{
// //     _id,
// //     name,
// //     image {
// //       asset-> {
// //         _ref,
// //         _type,
// //         url
// //       }
// //     },
// //     price,
// //     category,
// //     stockLevel,
// //     discountPercentage
    
// //   }`,{ category, currentProductId });
// // }

// // function RelatedProducts({ products }: { products: any[] }) {
// //   return (
// //     <div className="mt-16">
// //       <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {products.map((product) => (
// //           <Link href={`/product/${product._id}`} key={product._id} className="block">
// //             <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
// //               <div className="relative aspect-square">
// //                 {product.image && product.image.asset ? (
// //                   <Image
// //                     src={urlFor(product.image)
// //                       .width(400)
// //                       .height(400)
// //                       .bg("ffffff")
// //                       .url()}
// //                     alt={product.name}
// //                     fill
// //                     className="object-cover group-hover:opacity-90 transition-opacity"
// //                   />
// //                 ) : (
// //                   <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
// //                     No Image
// //                   </div>
// //                 )}
// //                 {product.discountPercentage && (
// //                   <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
// //                     {product.discountPercentage}% OFF
// //                   </div>
// //                 )}
// //               </div>
// //               <div className="p-4">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
// //                   {product.name}
// //                 </h3>
// //                 <div className="flex justify-between items-center">
// //                   <p className="text-indigo-600 font-bold text-xl">${product.price}</p>
// //                   <span className={`text-sm font-medium ${product.stockLevel ? 'text-green-600' : 'text-red-600'}`}>
// //                     {product.stockLevel ? 'In Stock' : 'Out of Stock'}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default async function ProductPage({ params }: ProductPageProps) {
// //   const product = await getProduct(params.productId);

// //   if (!product) {
// //     return <div className="text-center text-xl text-gray-600">Product not found</div>;
// //   }

// //   const relatedProducts = await getRelatedProducts(product.category, params.productId);

// //   return (
// //     <div>
// //       <Header />
// //       <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-100">
// //         <div className="grid md:grid-cols-2 gap-12">
// //           {/* Product Image Section */}
// //           <div className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-2xl border-2 border-gray-100">
// //             {product.image && product.image.asset ? (
// //               <Image
// //                 src={urlFor(product.image)
// //                   .width(1000)
// //                   .height(1000)
// //                   .bg('ffffff')
// //                   .url()}
// //                 alt={product.name}
// //                 fill
// //                 className="object-cover"
// //                 priority
// //               />
// //             ) : (
// //               <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500 text-xl">
// //                 No Image Available
// //               </div>
// //             )}
// //           </div>

// //           {/* Product Details Section */}
// //           <div className="bg-white p-10 rounded-xl shadow-2xl border-2 border-gray-100">
// //             <h1 className="text-5xl text-gray-900 font-extrabold tracking-tight mb-6">{product.name}</h1>

// //             <div className="flex items-center justify-between mb-8">
// //               <p className="text-4xl text-indigo-600 font-bold">
// //                 ${product.price}
// //                 {product.discountPercentage && (
// //                   <span className="ml-4 text-xl text-red-500 line-through">
// //                     {`${product.discountPercentage}% off`}
// //                   </span>
// //                 )}
// //               </p>
// //               <span className="text-sm text-gray-600">In Stock: {product.stockLevel ?? 'Out of stock'}</span>
// //             </div>

// //             {product.description && (
// //               <div className="mb-8">
// //                 <h2 className="text-3xl text-gray-800 font-bold mb-4">Product Description</h2>
// //                 <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
// //               </div>
// //             )}

// //             <div className="mb-10">
// //               <h3 className="text-3xl text-gray-800 font-bold mb-4">Product Details</h3>
// //               <ul className="space-y-4">
// //                 <li>
// //                   <span className="text-xl text-gray-600">Category:</span>{' '}
// //                   <span className="text-gray-900 font-semibold">{product.category}</span>
// //                 </li>
// //                 <li>
// //                   <span className="text-xl text-gray-600">Stock Level:</span>{' '}
// //                   <span className={`font-semibold ${product.stockLevel ? 'text-green-600' : 'text-red-600'}`}>
// //                     {product.stockLevel ?? 'Out of stock'}
// //                   </span>
// //                 </li>
// //                 {product.isFeaturedProduct && (
// //                   <li>
// //                     <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-lg font-medium">
// //                       Featured Product
// //                     </span>
// //                   </li>
// //                 )}
// //               </ul>
// //             </div>

// //             {/* Add to Cart Button */}
// //             <div className="flex gap-6 mt-10">
// //   <Link href="/Cart ">
// //     <button className="w-full py-4 px-8   bg-indigo-700 hover:bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white text-xl font-bold flex rounded-xl relative overflow-hidden duration-300 ease-in-out shadow-lg">
// //     <div className="hover:animate-pulse flex">
// //         <RiShoppingCart2Fill className="text-2xl" />
// //       Add to Cart
// //       </div>
// //     </button>
// //   </Link>
// // </div>
// //           </div>
// //         </div>

// //         {/* Related Products Section */}
// //         <div>
// //         {relatedProducts && relatedProducts.length > 0 && (
// //           <RelatedProducts products={relatedProducts} />
// //         )}
        
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }
// // 
// // 








// import Image from 'next/image';
// import client from '@/sanity/lib/client';
// import imageUrlBuilder from '@sanity/image-url';
// import { SanityImageSource } from '@sanity/image-url/lib/types/types';
// import { RiShoppingCart2Fill } from 'react-icons/ri';
// import Link from 'next/link';
// import Footer from '../../Component/Footer/Footer';
// import Header from '../../Component/Header/Header';

// const builder = imageUrlBuilder(client);

// function urlFor(source: SanityImageSource) {
//   return builder.image(source);
// }

// interface Product {
//   _id: string;
//   name: string;
//   image: {
//     asset: {
//       _ref: string;
//       _type: string;
//       url?: string;
//     };
//     hotspot?: boolean;
//   };
//   price: number;
//   category: string;
//   stockLevel?: number;
//   discountPercentage?: number;
//   description?: string;
//   isFeaturedProduct?: boolean;
// }

// interface ProductPageProps {
//   params: {
//     productId: string;
//   };
// }

// async function getProduct(productId: string): Promise<Product | null> {
//   return await client.fetch(
//     `*[_type == "product" && _id == $productId][0]{
//       _id,
//       name,
//       image {
//         asset-> {
//           _ref,
//           _type,
//           url
//         },
//         hotspot
//       },
//       price,
//       description,
//       discountPercentage,
//       isFeaturedProduct,
//       stockLevel,
//       category
//     }`,
//     { productId }
//   );
// }

// async function getRelatedProducts(category: string, currentProductId: string): Promise<Product[]> {
//   return await client.fetch(
//     `*[_type == "product" && category == $category && _id != $currentProductId][0...8]{
//       _id,
//       name,
//       image {
//         asset-> {
//           _ref,
//           _type,
//           url
//         }
//       },
//       price,
//       category,
//       stockLevel,
//       discountPercentage
//     }`,
//     { category, currentProductId }
//   );
// }

// function RelatedProducts({ products }: { products: Product[] }) {
//   return (
//     <div className="mt-16">
//       <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <Link href={`/product/${product._id}`} key={product._id} className="block">
//             <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
//               <div className="relative aspect-square">
//                 {product.image && product.image.asset ? (
//                   <Image
//                     src={urlFor(product.image)
//                       .width(400)
//                       .height(400)
//                       .bg("ffffff")
//                       .url()}
//                     alt={product.name}
//                     fill
//                     className="object-cover group-hover:opacity-90 transition-opacity"
//                   />
//                 ) : (
//                   <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
//                     No Image
//                   </div>
//                 )}
//                 {product.discountPercentage && (
//                   <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                     {product.discountPercentage}% OFF
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
//                   {product.name}
//                 </h3>
//                 <div className="flex justify-between items-center">
//                   <p className="text-indigo-600 font-bold text-xl">${product.price}</p>
//                   <span className={`text-sm font-medium ${product.stockLevel ? 'text-green-600' : 'text-red-600'}`}>
//                     {product.stockLevel ? 'In Stock' : 'Out of Stock'}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const product: Product | null = await getProduct(params.productId);

//   if (!product) {
//     return <div className="text-center text-xl text-gray-600">Product not found</div>;
//   }

//   const relatedProducts: Product[] = await getRelatedProducts(product.category, params.productId);

//   return (
//     <div>
//       <Header />
//       <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-100">
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Product Image Section */}
//           <div className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-2xl border-2 border-gray-100">
//             {product.image && product.image.asset ? (
//               <Image
//                 src={urlFor(product.image)
//                   .width(1000)
//                   .height(1000)
//                   .bg('ffffff')
//                   .url()}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500 text-xl">
//                 No Image Available
//               </div>
//             )}
//           </div>

//           {/* Product Details Section */}
//           <div className="bg-white p-10 rounded-xl shadow-2xl border-2 border-gray-100">
//             <h1 className="text-5xl text-gray-900 font-extrabold tracking-tight mb-6">{product.name}</h1>

//             <div className="flex items-center justify-between mb-8">
//               <p className="text-4xl text-indigo-600 font-bold">
//                 ${product.price}
//                 {product.discountPercentage && (
//                   <span className="ml-4 text-xl text-red-500 line-through">
//                     {`${product.discountPercentage}% off`}
//                   </span>
//                 )}
//               </p>
//               <span className="text-sm text-gray-600">In Stock: {product.stockLevel ?? 'Out of stock'}</span>
//             </div>

//             {product.description && (
//               <div className="mb-8">
//                 <h2 className="text-3xl text-gray-800 font-bold mb-4">Product Description</h2>
//                 <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
//               </div>
//             )}

//             <div className="mb-10">
//               <h3 className="text-3xl text-gray-800 font-bold mb-4">Product Details</h3>
//               <ul className="space-y-4">
//                 <li>
//                   <span className="text-xl text-gray-600">Category:</span>{' '}
//                   <span className="text-gray-900 font-semibold">{product.category}</span>
//                 </li>
//                 <li>
//                   <span className="text-xl text-gray-600">Stock Level:</span>{' '}
//                   <span className={`font-semibold ${product.stockLevel ? 'text-green-600' : 'text-red-600'}`}>
//                     {product.stockLevel ?? 'Out of stock'}
//                   </span>
//                 </li>
//                 {product.isFeaturedProduct && (
//                   <li>
//                     <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-lg font-medium">
//                       Featured Product
//                     </span>
//                   </li>
//                 )}
//               </ul>
//             </div>

//             {/* Add to Cart Button */}
//             <div className="flex gap-6 mt-10">
//               <Link href="/Cart">
//                 <button className="w-full py-4 px-8 bg-indigo-700 hover:bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white text-xl font-bold flex rounded-xl relative overflow-hidden duration-300 ease-in-out shadow-lg">
//                   <div className="hover:animate-pulse flex">
//                     <RiShoppingCart2Fill className="text-2xl" />
//                     Add to Cart
//                   </div>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Related Products Section */}
//         <div>
//           {relatedProducts && relatedProducts.length > 0 && (
//             <RelatedProducts products={relatedProducts} />
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }


// ProductPage.tsx




// import Image from 'next/image';
// import client from '@/sanity/lib/client';
// import imageUrlBuilder from '@sanity/image-url';
// import { SanityImageSource } from '@sanity/image-url/lib/types/types';
// import { RiShoppingCart2Fill } from 'react-icons/ri';
// import Link from 'next/link';
// import Footer from '../../Component/Footer/Footer';
// import Header from '../../Component/Header/Header';

// const builder = imageUrlBuilder(client);

// function urlFor(source: SanityImageSource) {
//   return builder.image(source);
// }

// interface Product {
//   _id: string;
//   name: string;
//   image: {
//     asset: {
//       _ref: string;
//       _type: string;
//       url?: string;
//     };
//     hotspot?: boolean;
//   };
//   price: number;
//   category: string;
//   stockLevel?: number;
//   discountPercentage?: number;
//   description?: string;
//   isFeaturedProduct?: boolean;
// }

// interface ProductPageProps {
//   params: {
//     productId: string;
//   };
// }

// async function getProduct(productId: string): Promise<Product | null> {
//   return await client.fetch(
//     `*[_type == "product" && _id == $productId][0]{
//       _id,
//       name,
//       image {
//         asset-> {
//           _ref,
//           _type,
//           url
//         },
//         hotspot
//       },
//       price,
//       description,
//       discountPercentage,
//       isFeaturedProduct,
//       stockLevel,
//       category
//     }`,
//     { productId }
//   );
// }

// async function getRelatedProducts(category: string, currentProductId: string): Promise<Product[]> {
//   return await client.fetch(
//     `*[_type == "product" && category == $category && _id != $currentProductId][0...8]{
//       _id,
//       name,
//       image {
//         asset-> {
//           _ref,
//           _type,
//           url
//         },
//         hotspot
//       },
//       price,
//       category,
//       stockLevel,
//       discountPercentage
//     }`,
//     { category, currentProductId }
//   );
// }

// function RelatedProducts({ products }: { products: Product[] }) {
//   return (
//     <div className="mt-16">
//       <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <Link href={`/product/${product._id}`} key={product._id} className="block">
//             <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
//               <div className="relative aspect-square">
//                 {product.image && product.image.asset ? (
//                   <Image
//                     src={urlFor(product.image)
//                       .width(400)
//                       .height(400)
//                       .bg("ffffff")
//                       .url()}
//                     alt={product.name}
//                     fill
//                     className="object-cover group-hover:opacity-90 transition-opacity"
//                   />
//                 ) : (
//                   <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
//                     No Image
//                   </div>
//                 )}
//                 {product.discountPercentage && (
//                   <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                     {product.discountPercentage}% OFF
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
//                   {product.name}
//                 </h3>
//                 <div className="flex justify-between items-center">
//                   <p className="text-indigo-600 font-bold text-xl">${product.price}</p>
//                   <span className={`text-sm font-medium ${product.stockLevel ? 'text-green-600' : 'text-red-600'}`}>
//                     {product.stockLevel ? 'In Stock' : 'Out of Stock'}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const product: Product | null = await getProduct(params.productId);

//   if (!product) {
//     return <div className="text-center text-xl text-gray-600">Product not found</div>;
//   }

//   const relatedProducts: Product[] = await getRelatedProducts(product.category, params.productId);

//   return (
//     <div>
//       <Header />
//       <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-100">
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Product Image Section */}
//           <div className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-2xl border-2 border-gray-100">
//             {product.image && product.image.asset ? (
//               <Image
//                 src={urlFor(product.image)
//                   .width(1000)
//                   .height(1000)
//                   .bg('ffffff')
//                   .url()}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500 text-xl">
//                 No Image Available
//               </div>
//             )}
//           </div>

//           {/* Product Details Section */}
//           <div className="bg-white p-10 rounded-xl shadow-2xl border-2 border-gray-100">
//             <h1 className="text-5xl text-gray-900 font-extrabold tracking-tight mb-6">{product.name}</h1>

//             <div className="flex items-center justify-between mb-8">
//               <p className="text-4xl text-indigo-600 font-bold">
//                 ${product.price}
//                 {product.discountPercentage && (
//                   <span className="ml-4 text-xl text-red-500 line-through">
//                     {`${product.discountPercentage}% off`}
//                   </span>
//                 )}
//               </p>
//               <span className="text-sm text-gray-600">In Stock: {product.stockLevel ?? 'Out of stock'}</span>
//             </div>

//             {product.description && (
//               <div className="mb-8">
//                 <h2 className="text-3xl text-gray-800 font-bold mb-4">Product Description</h2>
//                 <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
//               </div>
//             )}

//             <div className="mb-10">
//               <h3 className="text-3xl text-gray-800 font-bold mb-4">Product Details</h3>
//               <ul className="space-y-4">
//                 <li>
//                   <span className="text-xl text-gray-600">Category:</span>{' '}
//                   <span className="text-gray-900 font-semibold">{product.category}</span>
//                 </li>
//                 <li>
//                   <span className="text-xl text-gray-600">Stock Level:</span>{' '}
//                   <span className={`font-semibold ${product.stockLevel ? 'text-green-600' : 'text-red-600'}`}>
//                     {product.stockLevel ?? 'Out of stock'}
//                   </span>
//                 </li>
//                 {product.isFeaturedProduct && (
//                   <li>
//                     <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-lg font-medium">
//                       Featured Product
//                     </span>
//                   </li>
//                 )}
//               </ul>
//             </div>

//             {/* Add to Cart Button */}
//             <div className="flex gap-6 mt-10">
//               <Link href="/Cart">
//                 <button className="w-full py-4 px-8 bg-indigo-700 hover:bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white text-xl font-bold flex rounded-xl relative overflow-hidden duration-300 ease-in-out shadow-lg">
//                   <div className="hover:animate-pulse flex">
//                     <RiShoppingCart2Fill className="text-2xl" />
//                     Add to Cart
//                   </div>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Related Products Section */}
//         <div>
//           {relatedProducts && relatedProducts.length > 0 && (
//             <RelatedProducts products={relatedProducts} />
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );}


"use client";

import Image from 'next/image';
import client from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import Link from 'next/link';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface Product {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
      url?: string;
    };
    hotspot?: boolean;
  };
  price: number;
  category: string;
  stockLevel?: number;
  discountPercentage?: number;
  description?: string;
  isFeaturedProduct?: boolean;
}

interface ProductPageProps {
  params: {
    productId: string;
  };
}

async function getProduct(productId: string): Promise<Product | null> {
  return await client.fetch(
    `*[_type == "product" && _id == $productId][0]{
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
    }`,
    { productId }
  );
}

async function getRelatedProducts(category: string, currentProductId: string): Promise<Product[]> {
  return await client.fetch(
    `*[_type == "product" && category == $category && _id != $currentProductId][0...8]{
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
      category,
      stockLevel,
      discountPercentage
    }`,
    { category, currentProductId }
  );
}

function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/product/${product._id}`} key={product._id} className="block">
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative aspect-square">
                {product.image && product.image.asset ? (
                  <Image
                    src={urlFor(product.image)
                      .width(400)
                      .height(400)
                      .bg("ffffff")
                      .url()}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                    No Image
                  </div>
                )}
                {product.discountPercentage && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.discountPercentage}% OFF
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-indigo-600 font-bold text-xl">${product.price}</p>
                  <span className={`text-sm font-medium ${product.stockLevel ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stockLevel ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product: Product | null = await getProduct(params.productId);

  if (!product) {
    return <div className="text-center text-xl text-gray-600">Product not found</div>;
  }

  const relatedProducts: Product[] = await getRelatedProducts(product.category, params.productId);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image Section */}
          <div className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-2xl border-2 border-gray-100">
            {product.image && product.image.asset ? (
              <Image
                src={urlFor(product.image)
                  .width(1000)
                  .height(1000)
                  .bg('ffffff')
                  .url()}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500 text-xl">
                No Image Available
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="bg-white p-10 rounded-xl shadow-2xl border-2 border-gray-100">
            <h1 className="text-5xl text-gray-900 font-extrabold tracking-tight mb-6">{product.name}</h1>

            <div className="flex items-center justify-between mb-8">
              <p className="text-4xl text-indigo-600 font-bold">
                ${product.price}
                {product.discountPercentage && (
                  <span className="ml-4 text-xl text-red-500 line-through">
                    {`${product.discountPercentage}% off`}
                  </span>
                )}
              </p>
              <span className="text-sm text-gray-600">In Stock: {product.stockLevel ?? 'Out of stock'}</span>
            </div>

            {product.description && (
              <div className="mb-8">
                <h2 className="text-3xl text-gray-800 font-bold mb-4">Product Description</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
              </div>
            )}

            <div className="mb-10">
              <h3 className="text-3xl text-gray-800 font-bold mb-4">Product Details</h3>
              <ul className="space-y-4">
                <li>
                  <span className="text-xl text-gray-600">Category:</span>{' '}
                  <span className="text-gray-900 font-semibold">{product.category}</span>
                </li>
                <li>
                  <span className="text-xl text-gray-600">Stock Level:</span>{' '}
                  <span className={`font-semibold ${product.stockLevel ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stockLevel ?? 'Out of stock'}
                  </span>
                </li>
                {product.isFeaturedProduct && (
                  <li>
                    <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-lg font-medium">
                      Featured Product
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-6 mt-10">
              <Link href="/Cart">
                <button className="w-full py-4 px-8 bg-indigo-700 hover:bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white text-xl font-bold flex rounded-xl relative overflow-hidden duration-300 ease-in-out shadow-lg">
                  <div className="hover:animate-pulse flex">
                    <RiShoppingCart2Fill className="text-2xl" />
                    Add to Cart
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div>
          {relatedProducts && relatedProducts.length > 0 && (
            <RelatedProducts products={relatedProducts} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
