"use client";

import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import { FaFilter, FaHeart } from "react-icons/fa";
import { TbTrashX } from "react-icons/tb";
import Link from 'next/link';

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface Product {
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

interface CartProduct extends Product {
  quantity: number; // Add quantity to the product in the cart
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products: initialProducts }: ProductListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | string>('');
  const [maxPrice, setMaxPrice] = useState<number | string>('');
  const [showFilters, setShowFilters] = useState(false); // State to toggle filter visibility
  const [cart, setCart] = useState<CartProduct[]>([]); // State to manage cart
  const [products, setProducts] = useState<Product[]>(initialProducts); // State to manage products
  const [wishlist, setWishlist] = useState<Product[]>([]); // State to manage wishlist
  const [showWishlist, setShowWishlist] = useState(false); // State to toggle wishlist visibility

  // Load cart and wishlist from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Debounced search handler
  const handleSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query);
    }, 300),
    []
  );

  // Add to cart handler
  const handleAddToCart = (product: Product) => {
    if (product.stockLevel && product.stockLevel > 0) {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item._id === product._id);
        if (existingProduct) {
          // If the product already exists in the cart, increase its quantity
          return prevCart.map((item) =>
            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // If the product is not in the cart, add it with a quantity of 1
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });

      // Update the stock level of the product in the products array
      const updatedProducts = products.map((p) =>
        p._id === product._id ? { ...p, stockLevel: (p.stockLevel || 0) - 1 } : p
      );
      setProducts(updatedProducts); // Update the state
    } else {
      alert("This product is out of stock!");
    }
  };

  // Remove from cart handler
  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => {
      const removedProduct = prevCart.find((product) => product._id === productId);
      if (removedProduct) {
        // Restore the stock level of the removed product
        const updatedProducts = products.map((p) =>
          p._id === productId ? { ...p, stockLevel: (p.stockLevel || 0) + removedProduct.quantity } : p
        );
        setProducts(updatedProducts); // Update the state
      }
      return prevCart.filter((product) => product._id !== productId);
    });
  };

  // Increase quantity of a product in the cart
  const handleIncreaseQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item._id === productId && item.stockLevel && item.stockLevel > 0) {
          // Decrease stock level when increasing quantity in cart
          const updatedProducts = products.map((p) =>
            p._id === productId ? { ...p, stockLevel: (p.stockLevel || 0) - 1 } : p
          );
          setProducts(updatedProducts); // Update the state
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  // Decrease quantity of a product in the cart
  const handleDecreaseQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item._id === productId && item.quantity > 1) {
          // Increase stock level when decreasing quantity in cart
          const updatedProducts = products.map((p) =>
            p._id === productId ? { ...p, stockLevel: (p.stockLevel || 0) + 1 } : p
          );
          setProducts(updatedProducts); // Update the state
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  // Add to wishlist handler
  const handleAddToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const isProductInWishlist = prevWishlist.some((item) => item._id === product._id);
      if (isProductInWishlist) {
        // If the product is already in the wishlist, remove it
        return prevWishlist.filter((item) => item._id !== product._id);
      } else {
        // If the product is not in the wishlist, add it
        return [...prevWishlist, product];
      }
    });
  };

  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  // Filter products based on search query, selected category, and price range  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;

    const matchesPrice =
      (minPrice ? product.price >= Number(minPrice) : true) &&
      (maxPrice ? product.price <= Number(maxPrice) : true);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-100 px-10">
        {/* Filter and Wishlist Icons */}
        <div className="container mx-auto px-3 py-2 flex justify-end gap-4">
          {/* Wishlist Icon */}
          <button
            onClick={() => setShowWishlist(!showWishlist)}
            className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition duration-300"
          >
            <FaHeart />
          </button>

          {/* Filter Icon */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-black text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            <FaFilter />
          </button>
        </div>

        {/* Wishlist Menu */}
        {showWishlist && (
          <div className="container mx-auto px-3 py-8 border-t-2 border-blue-200">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Wishlist</h2>
            {wishlist.length === 0 ? (
              <p className="text-gray-600">Your wishlist is empty.</p>
            ) : (
              <ul className="space-y-4">
                {wishlist.map((product) => (
                  <li
                    key={product._id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="flex items-center">
                      {product.image && product.image.asset && (
                        <Image
                          src={urlFor(product.image)
                            .width(100)
                            .height(100)
                            .bg('ffffff')
                            .url() || ''}
                          alt={product.name}
                          width={50}
                          height={50}
                          className="object-contain mr-4"
                        />
                      )}
                      <div>
                        <span className="text-blue-900 font-semibold">
                          {product.name}
                        </span>
                        <p className="text-sm text-gray-600">${product.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddToWishlist(product)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <TbTrashX className="text-red-600 hover:text-red-800 text-4xl duration-200 hover:underline" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Filter Menu */}
        {showFilters && (
          <div className="container mx-auto px-3 py-8 border-t-2 border-blue-200">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-6 py-3 text-blue-700 rounded-lg border-2 border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-300 pr-12"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      handleSearch('');
                    }}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-cyan-700 hover:text-cyan-300 focus:outline-none"
                  >
                    ✖
                  </button>
                )}
              </div>

              {/* Category Dropdown */}
              <select
                className="flex-1 max-w-xs px-6 py-3 text-blue-700 rounded-lg border-2 border-blue-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
              >
                <option value="">All Categories</option>
                <option value="Sofa">Sofa</option>
                <option value="Chair">Chair</option>
              </select>
            </div>

            {/* Advanced Price Filter */}
            <div className="mb-8 flex gap-4">
              <div className="flex-1">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="Min Price"
                  className="w-full px-6 py-3 text-blue-700 rounded-lg border-2 border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="Max Price"
                  className="w-full px-6 py-3 text-blue-700 rounded-lg border-2 border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                />
              </div>
            </div>

            {/* Cart Section */}
            <div className="mb-8 border-t-2 pt-4">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Cart</h2>
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((product) => (
                    <li
                      key={product._id}
                      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
                    >
                      <div className="flex items-center">
                        {product.image && product.image.asset && (
                          <Image
                            src={urlFor(product.image)
                              .width(100)
                              .height(100)
                              .bg('ffffff')
                              .url() || ''}
                            alt={product.name}
                            width={50}
                            height={50}
                            className="object-contain mr-4"
                          />
                        )}
                        <div>
                          <span className="text-blue-900 font-semibold">
                            {product.name}
                          </span>
                          <p className="text-sm text-gray-600">${product.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => handleDecreaseQuantity(product._id)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              -
                            </button>
                            <span className="text-gray-700">{product.quantity}</span>
                            <button
                              onClick={() => handleIncreaseQuantity(product._id)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(product._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <TbTrashX className="text-red-600 hover:text-red-800 text-4xl duration-200 hover:underline" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {/* Total Price */}
              {cart.length > 0 && (
                <div className="mt-6 text-right">
                  <h3 className="text-xl font-bold text-blue-800">
                    Total: ${totalPrice.toFixed(2)}
                  </h3>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center text-3xl text-gray-600 py-52">
            <p className="mb-8">No products found matching your search or filter!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 group border-2 border-blue-200 hover:border-blue-500 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full bg-blue-50">
                  {product.image && product.image.asset ? (
                    <Image
                      src={urlFor(product.image)
                        .width(800)
                        .height(600)
                        .bg('ffffff')
                        .url() || ''}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain border-b-4 border-b-blue-400"
                      priority={index < 4}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-blue-200 text-blue-700">
                      No Image Available
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-extrabold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h2>
                  {product.description && (
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  )}
                  <p className="text-2xl font-bold text-blue-700 mb-3">
                    ${product.price}{' '}
                    {product.discountPercentage && (
                      <span className="text-lg text-red-500 line-through">
                        {`${product.discountPercentage}% off`}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Category:{' '}
                    <span className="font-semibold text-gray-700">
                      {product.category}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Stock:{' '}
                    <span
                      className={`font-semibold ${
                        product.stockLevel ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {product.stockLevel ?? 'Out of stock'}
                    </span>
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`w-full text-white py-2 px-4 rounded-lg transition duration-300 ${
                        product.stockLevel && product.stockLevel > 0
                          ? "bg-blue-800 hover:bg-gradient-to-r to-blue-600 via-sky-600 from-cyan-400"
                          : "bg-red-700 cursor-not-allowed"
                      }`}
                      disabled={!product.stockLevel || product.stockLevel <= 0}
                    >
                      {product.stockLevel && product.stockLevel > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>
                    <button
                      onClick={() => handleAddToWishlist(product)}
                      className={`p-2 rounded-lg transition duration-300 ${
                        wishlist.some((item) => item._id === product._id)
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
                      }`}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}