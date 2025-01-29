import Image from "next/image";

export default function TopCategories() {
  return (
    <section className="px-4 py-8 lg:py-16 bg-white">
      <h2 className="text-center text-2xl lg:text-3xl font-bold text-blue-900 mb-8">
        Top Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* Category 1 */}
        <div className="relative flex flex-col items-center text-center space-y-2">
          <div className="w-32 h-32 rounded-full border-4 border-purple-500 flex items-center justify-center relative">
            <Image
              src="/31.png" 
              alt="Mini LCW Chair"
              width={100}
              height={100}
              className="object-contain"
            />
            <button className="absolute bottom-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              View Shop
            </button>
          </div>
          <h3 className="text-sm font-medium">Mini LCW Chair</h3>
          <p className="text-sm font-semibold text-gray-600">$56.00</p>
        </div>

        {/* Category 2 */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center">
            <Image
              src="/32.png"
              alt="Mini LCW Chair"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <h3 className="text-sm font-medium">Mini LCW Chair</h3>
          <p className="text-sm font-semibold text-gray-600">$56.00</p>
        </div>

        {/* Category 3 */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center">
            <Image
              src="/33.png" 
              alt="Mini LCW Chair"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <h3 className="text-sm font-medium">Mini LCW Chair</h3>
          <p className="text-sm font-semibold text-gray-600">$56.00</p>
        </div>

        {/* Category 4 */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center">
            <Image
              src="/31.png"
              alt="Mini LCW Chair"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <h3 className="text-sm font-medium">Mini LCW Chair</h3>
          <p className="text-sm font-semibold text-gray-600">$56.00</p>
        </div>
      </div>
    </section>
  );
}