

import React from "react";
import Image from "next/image";

const LatestBlog: React.FC = () => {
  return (
    <section className="w-auto justify-center items-center mx-auto px-4 py-12">
      <h1 className="text-center text-3xl font-bold text-blue-900 mb-8">Latest Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">

        {/* Blog Post 1 */}
        <div className="bg-white shadow-md rounded-md  p-4" style={{ width: "300px", height: "420px" }}>
          <Image
            src="/28.jpg"
            alt="Top essential Trends in 2021"
            height={160}
            width={300}
            className="h-40 w-full object-cover"
          />
          <div className="mt-4">
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <span>SaberAli</span>
              <span>•</span>
              <span>21 August, 2020</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mt-2 hover:text-[#FB2E86]">Top essential Trends in 2021</h2>
            <p className="text-sm text-gray-600 mt-2">
              More of this less hello samlande lied much over tightly circa horse taped mightly
            </p>
            <button className="text-blue-500 underline mt-4 hover:text-[#FB2E86]">Read More</button>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white rounded-md shadow-md p-4" style={{ width: "300px", height: "420px" }}>
          <Image
            src="/29.jpg"
            alt="Trends and Technologies"
            height={160}
            width={300}
            className="h-40 w-full object-cover"
          />
          <div className="mt-4">
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <span>Surfuxion</span>
              <span>•</span>
              <span>21 August, 2020</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mt-2 hover:text-[#FB2E86]">Top essential Trends in 2021</h2>
            <p className="text-sm text-gray-600 mt-2">
              More of this less hello samlande lied much over tightly circa horse taped mightly
            </p>
            <button className="text-blue-500 underline mt-4 hover:text-[#FB2E86]">Read More</button>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white rounded-md shadow-md p-4" style={{ width: "300px", height: "420px" }}>
          <Image
            src="/30.jpg"
            alt="Insights into trends"
            height={160}
            width={300}
            className="h-40 w-full object-cover"
          />
          <div className="mt-4">
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <span>SaberAli</span>
              <span>•</span>
              <span>21 August, 2020</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mt-2 hover:text-[#FB2E86]">Top essential Trends in 2021</h2>
            <p className="text-sm text-gray-600 mt-2">
              More of this less hello samlande lied much over tightly circa horse taped mightly
            </p>
            <button className="text-blue-500 underline mt-4 hover:text-[#FB2E86]">Read More</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestBlog;
