import {  ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Topheader from '../Page/Topheadder/Topheadder'
import Header from '../Component/Header/Header'

export default function AboutUs() { 
  return (
    <div className="min-h-screen ">
      <Topheader/>
      <Header/>
      
      <div className="bg-whitemin-h-screen flex flex-col items-center ">
      <div className=" w-full ">

    <div className="py-32 px-4 md:px-6 lg:px-8 bg-[#F6F5FF] ">
     <div className="ml-[100px]">
     <h1 className="text-4xl md:text-3xl font-bold text-[#1B224B] mb-2">
     ABOUT
      </h1>
      <nav className="flex items-center space-x-1 text-sm ">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-rose-500 font-medium">page</span>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-rose-500 font-medium">About</span>

      </nav>
     </div>
    </div>
    </div>  
    </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Business History Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/d.png"
              alt="Business meeting"
              width={555}
              height={390}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="space-y-4">

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Know About Our Ecommerce Business History
            </h2>

            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At maiores assumenda nostrum amet placeat, quasi laboriosam accusantium laborum dolore repellat! Neque rem quae voluptatem nemo iusto officia ipsum omnis libero.
            </p>

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
              Contact Us
            </button>

          </div>
        </div>

        {/* Features Section */}
        
      <h1 className="text-5xl font-extrabold text-[#151875] mb-8 text-center justify-center items-center flex">Features Section !</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
          <Image src="/13.png"
           alt="24/7 Support"
          className="w-16 h-16 mb-4"
           width={64} 
           height={64} 
             />
          <h2 className="text-lg font-semibold">24/7 Support</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
          <Image src="/14.png"
           alt="Affordable Prices" 
           className="w-16 h-16 mb-4" 
           width={64} 
           height={64} 
           />
          <h2 className="text-lg font-semibold">Affordable Prices</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
          <Image src="/15.png"
           alt="Premium Quality"
           className="w-16 h-16 mb-4"
            width={64}
           height={64} />
          <h2 className="text-lg font-semibold">Premium Quality</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
          <Image src="/16.png"
           alt="Fast Delivery"
            className="w-16 h-16 mb-4"
             width={64}
              height={64} />
          <h2 className="text-lg font-semibold">Fast Delivery</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

      </div>
      </main>
    </div>
  )
}
