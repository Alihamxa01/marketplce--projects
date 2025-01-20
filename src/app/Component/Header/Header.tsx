import Image from "next/image";
import Link from "next/link";
const Header = () => {
    return (
      <header className=" w-full  bg-white/30 border-b border-gray-300 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/"><Image
              src="/images.png" 
              alt="E-Shop Logo" 
              height="12"
              width={12}
              className="h-12 w-12 rounded-full border-2 border-pink-300 shadow-lg mr-3" 
            />
           </Link>
          
           <div>
           <Link href="/">
            <h1 className="text-2xl font-bold text-pink-500">E-SHOP</h1>
            </Link>
           </div>
          </div>
         
          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-pink-500 transition font-medium"
            >
              Home
            </Link>
            <Link 
              href="/Wish" 
              className="text-gray-700 hover:text-pink-500 transition font-medium"
            >
              About
            </Link>
            <Link 
              href="/" 
              className="text-gray-700 hover:text-pink-500 transition font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  