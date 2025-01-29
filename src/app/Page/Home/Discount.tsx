
import React from "react";
import Image from "next/image";
const DiscountItem: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-10 px-6">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-[#151875] text-center justify-center text-5xl font-bold mb-4 ml-24">
            Discount Item
          </h2>
          <div className="flex space-x-3 text-sm text-gray-500 mb-6 justify-center items-center ml-24">

            <span className="underline hover:text-[#FB2E86] cursor-pointer">Wood Chair</span>
            <span className="underline hover:text-[#FB2E86] cursor-pointer">Plastic Chair</span>
            <span className="underline hover:text-[#FB2E86] cursor-pointer">Sofa Collection</span>
          </div>

          <h3 className="text-4xl font-bold text-[#151875] mb-4">
            20% Discount Of All Products
          </h3>

          <p className="text-[#FB2E86]">Eams Sofa Compact</p>

          <p className="text-[#B7BACB] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-[#B7BACB]">
            <li>Material expose like metals</li>
            <li>Simple neutral colours</li>
            <li>Clear lines and geometric figures</li>
            <li>Material expose like metals</li>
          </ul>

          <button className="mt-8 bg-[#FB2E86] text-white px-6 py-3 rounded shadow-md ">
            Shop Now
          </button>

        </div>

        {/* Right Content */}
        <div className="flex-1 ">
          <Image
            src="/25.5.png"
            alt="Chair"
            width={700}
            height={597}
            className="   max-w-sm mx-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;