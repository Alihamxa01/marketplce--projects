import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneVolume, FaChevronDown, FaRegHeart } from 'react-icons/fa6';
import { FiUser } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="hidden sm:block">
      <div className="2xl:w-[1920px] h-[44px] w-full bg-[#7E33E0] text-[#f1f1f1] flex justify-center items-center">
        <div className="w-[1177px] 2xl:w-[1177px] flex flex-col justify-center lg:flex-row md:justify-between items-center">
          
          {/* Left Section (Contacts) */}
          <div className="w-[30%] lg:w-[380px] flex items-center justify-center lg:justify-start">
            
            {/* Email */}
            <div className="flex items-center gap-3 mr-10">
              <MdOutlineEmail className="w-4 h-4 text-white" />
              <Link href="mailto:mhhasanul@gmail.com" className="sm:w-[171px] h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">
                mhhasanul@gmail.com
              </Link>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhoneVolume className="w-4 h-4 text-white" />
              <Link href="tel:+1234567890" className="w-[97px] h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">
                (12345)67890
              </Link>
            </div>

          </div>

          {/* Right Section (Options) */}
          <div className="w-[30%] lg:w-[400px] flex flex-row items-center justify-center lg:justify-end gap-4">

            {/* Language */}
            <div className="flex flex-row items-center">
              <h1 className="h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">English</h1>
              <FaChevronDown className="mx-1 w-[16px] h-[16px]" />
            </div>

            {/* Currency */}
            <div className="flex flex-row items-center">
              <h1 className="h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">USD</h1>
              <FaChevronDown className="mx-1 w-[16px] h-[16px]" />
            </div>

            {/* Login */}
            <Link href="/Login" className="flex flex-row items-center">
              <h1 className="h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">Login</h1>
              <FiUser className="mx-1 w-[16px] h-[16px]" />
            </Link>

            {/* Wishlist */}
            <div className="flex flex-row items-center gap-1">
              <h1 className="h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">Wishlist</h1>
              <FaRegHeart className="w-[16px] h-[16px]" />
            </div>

            {/* Cart */}
            <Link href="/Proceed" className="flex flex-row items-center gap-1">
              <span className="font-sans font-semibold text-sm sm:text-[16px]">CART</span>
              <LuShoppingCart className="w-[20px] h-[20px]" />

            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
