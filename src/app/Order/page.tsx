// import { Button } from "@/components/ui/button"
import { Clock, ClipboardCheck, Check } from 'lucide-react'
import Header from "../Component/Header/Header";
import Link from "next/link"
import Image from "next/image"
import Topheadder from '../Page/Topheadder/Topheadder';

export default function OrderConfirmation() {
  return (
<div>
<Topheadder/>
<Header/>
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      
      <div className="w-full px-4 py-8 md:py-12 lg:py-16 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto relative">
          {/* Top Left Icon */}
          <div className="absolute left-0 top-0">
            <Clock className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />
          </div>

          <div className="flex flex-col items-center text-center space-y-6 pt-12 md:pt-16">
            {/* Checkmark icon above the heading */}
            <div className="mb-4">
              <Check className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              Your Order Is Completed!
            </h1>

            <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.
            </p>

            <Link href="/List">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>

          {/* Bottom Right Icon */}
          <div className="absolute right-0 bottom-0">
            <ClipboardCheck className="w-8 h-8 md:w-12 md:h-12 text-pink-500" />
          </div>
        </div>
        <div className=" justify-center items-center py-24 hidden md:flex sm:hidden lg:flex">
              <Image
              src="/27.png"
              width={904}
              height={93}
              alt="logoos"
              />
            </div>
      </div>
        
    </div>
    </div>
  )
}
