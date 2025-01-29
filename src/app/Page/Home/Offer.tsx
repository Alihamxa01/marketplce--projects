

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-extrabold text-[#151875] mb-8">What Shopex Offer!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
          <Image src="/13.png" alt="24/7 Support" className="w-16 h-16 mb-4" width={64} height={64} />
          <h2 className="text-lg font-semibold">24/7 Support</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
          <Image src="/14.png" alt="Affordable Prices" className="w-16 h-16 mb-4" width={64} height={64} />
          <h2 className="text-lg font-semibold">Affordable Prices</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
          <Image src="/15.png" alt="Premium Quality" className="w-16 h-16 mb-4" width={64} height={64} />
          <h2 className="text-lg font-semibold">Premium Quality</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
          <Image src="/16.png" alt="Fast Delivery" className="w-16 h-16 mb-4" width={64} height={64} />
          <h2 className="text-lg font-semibold">Fast Delivery</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

      </div>
    </div>
  );
}
