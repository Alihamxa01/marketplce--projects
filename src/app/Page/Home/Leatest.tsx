

"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-screen-2xl px-4 py-8 bg-white " >
      <h1 className="text-3xl font-bold text-[#151875] text-center mb-8">Latest Products</h1>
      <div className="flex justify-center space-x-8 text-[#151875]">
        <a href="#" className="text-[#FB4997] font-semibold">
          New Arrival
        </a>
        <a href="#" className="hover:text-[#FB4997]">Best Seller</a>
        <a href="#" className="hover:text-[#FB4997]">Featured</a>
        <a href="#" className="hover:text-[#FB4997]">Special Offer</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {/* Product 1 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <div className="w-360 h-270 mx-auto">
            <Image
              src="/7.png"
              alt="Comfort Handy Craft"
              className="w-full h-250 object-cover rounded-t-lg mb-4"
              width={300}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <div className="w-360 h-270 mx-auto">
            <Image
              src="/8.png"
              alt="Comfort Handy Craft"
              className="w-full h-250 object-cover rounded-t-lg mb-4"
              width={300}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <div className="w-360 h-270 mx-auto">
            <Image
              src="/9.png"
              alt="Comfort Handy Craft"
              className="w-full h-250 object-cover rounded-t-lg mb-4"
              width={300}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
