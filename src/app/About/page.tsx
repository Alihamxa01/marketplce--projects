import Image from 'next/image';
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import Link from 'next/link';


const About = () => {
  return (
    <div>
      
<Header/>
    <div className="bg-gradient-to-t to-slate-50 via-blue-50 from-slate-100 text-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
          <p className="mt-4 text-lg text-gray-700">
            Building trust and delivering quality since day one.
          </p>
        </div>

        {/* Journey Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our story began with a simple yet powerful idea: to create a 
              platform where quality meets convenience. From humble beginnings 
              as a small business, we have grown into a trusted e-commerce 
              platform serving customers across the globe. Driven by innovation 
              and customer satisfaction, our journey is fueled by the trust 
              and loyalty of our valued customers.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/1.webp"
              alt="Our Journey"
              width={500}
              height={300}
              className="rounded-lg shadow-lg bg-blue-700 pl-3 pt-3"
            />
          </div>
        </div>

        {/* Trust and Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="text-center">
            <Image
              src="/2.webp"
              alt="Trust"
              width={500}
              height={300}
              className="rounded-lg shadow-lg bg-blue-700 pl-3 pb-3   "
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <span className="text-blue-600 font-medium">E-Shop</span>, we 
              prioritize your needs and work tirelessly to exceed your 
              expectations. Our platform offers:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
              <li>High-quality products curated for diverse tastes.</li>
              <li>Secure and hassle-free shopping experience.</li>
              <li>24/7 customer support to assist you anytime.</li>
              <li>Fast and reliable delivery services.</li>
            </ul>
          </div>
        </div>

        {/* Team and Vision */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Behind every product and service is a dedicated team that works 
            passionately to deliver excellence. Our vision is to redefine 
            online shopping by providing a seamless and enriching experience 
            to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center items-center sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Feature 1 */}
        <div className="flex flex-col items-center justify-center text-center bg-blue-50 p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
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
        <div className="flex flex-col items-center justify-center text-center bg-blue-50 p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
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
        <div className="flex flex-col items-center justify-center text-center bg-blue-50 p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
          <Image src="/15.png"
           alt="Premium Quality"
           className="w-16 h-16 mb-4"
            width={64}
           height={64} />
          <h2 className="text-lg font-semibold">Premium Quality</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center justify-center text-center bg-blue-50 p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
          <Image src="/16.png"
           alt="Fast Delivery"
            className="w-16 h-16 mb-4"
             width={64}
              height={64} />
          <h2 className="text-lg font-semibold">Fast Delivery</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Ready to explore?
          </h3>


          <p className="text-gray-700">
            Join the thousands of happy customers who trust us for their 
            shopping needs.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg mt-6 transition"
          >
            Start Shopping Now
          </Link>
        </div>
      </div>
      <br/>
      
    </div>
    <Footer/>
    </div>
  );
};

export default About;
