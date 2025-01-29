import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
import { FiUser } from 'react-icons/fi';
import { FaChevronDown, FaRegHeart } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="hidden sm:block">
        <div className="2xl:w-[1920px] h-[44px] w-[100%]  bg-[#7E33E0] text-[#f1f1f1] flex justify-center items-center">
      <div className="w-[1177px] 2xl:w-[1177px] flex flex-col justify-center  lg:flex-row md:justify-between items-center ">
        <div className="w-[30%] lg:w-[380px] flex items-center justify-center lg:justify-start">

{/* contacts */}
          <div className="flex items-center justify-center gap-3 mr-10 ">
            <span className="w-4 h-4 text-[#ffffff]">
              <MdOutlineEmail />
            </span>
            <a href="mhhasanul@gmail.com">

            <h1 className="sm:w-[171px] h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">
              mhhasanul@gmail.com
            </h1>

            </a>
           
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="w-4 h-4 flex items-center justify-center">
              <span  className="w-[13.33px] h-[13.33px] text-[#ffffff]">
              <FaPhoneVolume/>
              </span>
              
            </span>
            <a href="(12345)67890)"> 
            <h1 className="w-[97px] h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">
              (12345)67890
            </h1>
            </a>
           
          </div>
        </div>


        <div className="w-[30%] lg:w-[400px] flex flex-row items-center justify-center lg:justify-end gap-2 sm:gap-4">
          <div className=" flex flex-row items-center justify-center ">
            <h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">
              English
            </h1>
            <div className=" flex justify-center items-center mx-1 w-[16px] h-[16px] ">
              <FaChevronDown />
            </div>
          </div>

          <div className=" flex flex-row items-center justify-center  ">
            <h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">
              USD
            </h1>
            <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] ">
              <FaChevronDown />
            </div>
          </div>
          <a href="/Accounts">
          <div className=" flex flex-row items-center justify-center ">
          
          <Link href="/Login">
            <h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">
              Login
            </h1>
            </Link>
            <div className=" flex justify-center items-center  mx-1 w-[1   0px] h-[10px] ">
              <FiUser />
            </div>
           
          </div>
          </a>
          
          <div className=" flex flex-row items-center justify-center ">
            <h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">
              Wishlist
            </h1>
            <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] ">
              <FaRegHeart />
            </div>
          </div>

          <div className="w-[24px] h-[24px]">
            <LuShoppingCart  />
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}
