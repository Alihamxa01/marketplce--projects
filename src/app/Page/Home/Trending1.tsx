import Image from "next/image";

export default function ProductFeature() {
    return (
      <div className="w-full min-h-[580px] bg-[#F1F0FF] p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="absolute inset-0 rounded-full transform -translate-x-4"></div>
            <Image
              src="/trending1.png"
              alt="B&B Italian Sofa"
              className="relative z-10 w-full max-w-[300px] md:max-w-[400px] mx-auto"
              width={300}
              height={400}
            />
          </div>
  
          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#151875] leading-tight">
              Unique Features Of Latest & Trending Products
            </h2>
  
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F52B70] mt-1"></div>
                <span className="text-[#ACABC3]">
                  All frames constructed with hardwood solids and laminates
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#2B2BF5] mt-1"></div>
                <span className="text-[#ACABC3]">
                  Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#2BF5CC] mt-1"></div>
                <span className="text-[#ACABC3]">
                  Arms, backs, and seats are structurally reinforced
                </span>
              </li>
            </ul>
  
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="bg-[#F52B70] text-white px-6 py-2 rounded-md hover:bg-[#d02159]">
                Add To Cart
              </button>
              <div className="space-y-1">
                <h3 className="font-semibold text-[#151875]">B&B Italian Sofa</h3>
                <p className="text-[#ACABC3]">$52.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  