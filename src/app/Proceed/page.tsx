"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Wallet } from 'lucide-react';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/sanity/lib/client';
import { Product } from '../components/ProductList';
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import Topheadder from '../Page/Topheadder/Topheadder'

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface CartProduct extends Product {
  quantity: number;
}

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [currentStep, setCurrentStep] = useState(1);
  const [address, setAddress] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'jazzcash' | 'creditcard' | null>(null);
  const [paymentDetails, setPaymentDetails] = useState({
    jazzcashNumber: '',
    creditCardNumber: '',
    creditCardExpiry: '',
    creditCardCVC: '',
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    setIsLoading(false);
  }, []);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    if (!address.name || !address.email || !address.street || !address.city || 
        !address.state || !address.country || !address.zip || !address.phone) {
      alert('Please fill in all required fields before confirming your order.');
      return;
    }
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    if (paymentMethod === 'jazzcash' && !paymentDetails.jazzcashNumber) {
      alert('Please enter your JazzCash number.');
      return;
    }
    if (paymentMethod === 'creditcard' && (!paymentDetails.creditCardNumber || 
        !paymentDetails.creditCardExpiry || !paymentDetails.creditCardCVC)) {
      alert('Please fill in all credit card details.');
      return;
    }
    alert('Order confirmed! Thank you for your purchase.');
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-4xl text-indigo-600 font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 ">
    {/* <div className="bg-gray-100"> */}
      <Topheadder/>
        <Header/>
    {/* <div className="min-h-screen bg-gray-100 "> */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium hover:text-indigo-900">Back to Shopping</span>
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <Link
              href="/List"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Cart Items */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-xl font-semibold mb-6 text-indigo-900">Shopping Cart</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item._id} className="flex items-center p-4 bg-gray-50 rounded-xl">
                      <div className="relative w-20 h-20 bg-white rounded-lg overflow-hidden">
                        {item.image && item.image.asset && (
                          <Image
                            src={urlFor(item.image).width(200).height(200).bg('ffffff').url() || ''}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        )}
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Information */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-xl font-semibold mb-6 text-indigo-900">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full outline-none px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 outline-none rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 outline-none  rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="street"
                    placeholder="Street Address"
                    className="w-full px-4 py-3 outline-none  rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="w-full px-4 py-3 outline-none  rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    className="w-full px-4 py-3 outline-none  rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="w-full px-4 py-3 outline-none  rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code"
                    className="w-full px-4 py-3 outline-none  rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-xl font-semibold mb-6 text-indigo-900">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setPaymentMethod('jazzcash')}
                      className={`flex-1 p-4 rounded-xl border-2 ${
                        paymentMethod === 'jazzcash'
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-center">
                        <Wallet className="w-6 h-6 text-indigo-600 mr-3" />
                        <span className="font-medium">JazzCash</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('creditcard')}
                      className={`flex-1 p-4 rounded-xl border-2 ${
                        paymentMethod === 'creditcard'
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-center">
                        <CreditCard className="w-6 h-6 text-indigo-600 mr-3" />
                        <span className="font-medium">Credit Card</span>
                      </div>
                    </button>
                  </div>

                  {paymentMethod === 'jazzcash' && (
                    <input
                      type="text"
                      name="jazzcashNumber"
                      placeholder="JazzCash Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      onChange={handlePaymentDetailsChange}
                    />
                  )}

                  {paymentMethod === 'creditcard' && (
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="creditCardNumber"
                        placeholder="Card Number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        onChange={handlePaymentDetailsChange}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="creditCardExpiry"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          onChange={handlePaymentDetailsChange}
                        />
                        <input
                          type="text"
                          name="creditCardCVC"
                          placeholder="CVC"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          onChange={handlePaymentDetailsChange}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>



            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-8">
                <h2 className="text-xl font-semibold mb-6 text-indigo-900">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  
                  <Link href="/Order">
                    <button
                      onClick={handleConfirmOrder}
                      className="w-full mt-9 py-2 bg-indigo-600 text-white font-bold text-xl rounded-lg hover:bg-indigo-700 transition"
                    >
                      Place Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

     
    {/* </div> */}

    <Footer/>
    </div>
  );
<<<<<<< HEAD
 }
=======
 }
>>>>>>> 98179ca0887f8a7c9630bd2675ce49963a117f6d
