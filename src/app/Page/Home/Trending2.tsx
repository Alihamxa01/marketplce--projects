import Image from "next/image";

export default function TrendingProducts() {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-8">Trending Products</h1>
      
      {/* Trending Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { id: 17, image: "/17.png" },
          { id: 18, image: "/18.png" },
          { id: 19, image: "/19.png" },
          { id: 11, image: "/11.png" },
        ].map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden p-4"
          >
            <div className="aspect-square relative bg-gray-100 rounded-lg mb-3">
              <Image
                src={item.image}
                alt={`Cantilever chair ${item.id}`}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Cantilever chair</h3>
            <div className="flex items-center gap-2">
              <span className="text-black font-medium ">$26.00</span>
              <span className="text-gray-400 line-through">$42.00</span>
            </div>
          </div>
        ))}
      </div>

      {/* Promo Section */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-8">
        {/* Left Promo */}
        <div className="md:col-span-3 bg-[#FFF6FB] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#151875]">23% off in all products</h3>
              <button className="text-[#FB2E86]">Shop Now</button>
            </div>
            {/* Set image 20 here */}
            <div className="relative w-[213px] h-[207px]">
              <Image
                src="/20.png"
                alt="Kitchen mitt"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Center Promo */}
        <div className="md:col-span-3 bg-[#F6F7FB] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#151875]">23% off in all products</h3>
              <button className="text-[#FB2E86]">View Collection</button>
            </div>
            {/* Set image 21 here */}
            <div className="relative w-[312px] h-[207px]">
              <Image
                src="/21.png"
                alt="Kitchen mitt"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-1 text-[#151875]">
  <div className="space-y-4">
    {[
      { id: 1, image: "/a.png", title: "Executive Chair", price: "$32.00" },
      { id: 2, image: "/b.png", title: "Comfort Sofa", price: "$45.00" },
      { id: 3, image: "/c.png", title: "Modern Table", price: "$28.00" },
    ].map((item) => (
      <div key={item.id} className="flex items-center gap-2">
        <div className="relative w-12 h-12 bg-gray-100 rounded">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded"
          />
        </div>
        <div>
          <h4 className="text-sm font-medium">{item.title}</h4>
          <span className="text-sm text-[#151875] line-through">{item.price}</span>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}
