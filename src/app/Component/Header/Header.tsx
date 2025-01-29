// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import { usePathname } from "next/navigation"; // Import usePathname

// const Header = () => {
//   const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname(); // Get the current route

//   // Toggle dropdown
//   const toggleHomeDropdown = () => {
//     setIsHomeDropdownOpen(!isHomeDropdownOpen);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsHomeDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Function to check if a link is active
//   const isActive = (href: string) => pathname === href;

//   return (
//     <header className="w-full bg-white/30 border-b border-gray-300 shadow-md">
//       <div className="container mx-auto flex items-center justify-between px-6 py-4">
//         <div className="flex items-center">
//           <Link href="/">
//             <Image
//               src="/images.png"
//               alt="E-Shop Logo"
//               height="12"
//               width={12}
//               className="h-12 w-12 rounded-full border-2 border-pink-300 shadow-lg mr-3"
//             />
//           </Link>
//           <div>
//             <Link href="/">
//               <h1 className="text-2xl font-bold text-pink-500">E-SHOP</h1>
//             </Link>
//           </div>
//         </div>

//         <nav className="flex space-x-6 relative">
//           <div ref={dropdownRef} className="relative">
//             <Link
//               href="/"
//               className={`text-gray-700 hover:text-pink-500 transition font-medium flex items-center gap-1 ${
//                 isActive("/") ? "text-pink-500" : ""
//               }`}
//               onClick={toggleHomeDropdown}
//             >
//               Home
//               <FaChevronDown
//                 className={`transition-transform ${
//                   isHomeDropdownOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </Link>

//             {/* Dropdown Menu */}
//             {isHomeDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                 <Link
//                   href="/Faqs"
//                   className={`block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition font-medium ${
//                     isActive("/Faqs") ? "text-pink-500" : ""
//                   }`}
//                 >
//                   FAQs
//                 </Link>
//                 <Link
//                   href="/Login"
//                   className={`block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition font-medium ${
//                     isActive("/Login") ? "text-pink-500" : ""
//                   }`}
//                 >
//                   Log-in
//                 </Link>
//                 <Link
//                   href="/Signup"
//                   className={`block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition font-medium ${
//                     isActive("/Signup") ? "text-pink-500" : ""
//                   }`}
//                 >
//                   Sign up
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link
//             href="/About"
//             className={`text-gray-700 hover:text-pink-500 transition font-medium ${
//               isActive("/About") ? "text-pink-500" : ""
//             }`}
//           >
//             About
//           </Link>

//           <Link
//             href="/List"
//             className={`text-gray-700 hover:text-pink-500 transition font-medium ${
//               isActive("/List") ? "text-pink-500 font-semibold" : ""
//             }`}
//           >
//             Products
//           </Link>

//           <Link
//             href="/Contact"
//             className={`text-gray-700 hover:text-pink-500  transition font-medium ${
//               isActive("/Contact") ? "text-pink-500 font-semibold "  : ""
//             }`}
//           >
//             Contact
//           </Link>

//           <Link
//             href="/Login"
//             className={`text-gray-700 hover:text-pink-500  transition font-medium ${
//               isActive("/Login") ? "text-pink-500 font-semibold "  : ""
//             }`}
//           >
            
//           </Link>

//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;




"use client";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";


function Navbar() {
  const [open, setOpen] = useState(false);
  const [pageDropdownOpen, setPageDropdownOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const togglePageDropdown = () => {
    setPageDropdownOpen(!pageDropdownOpen);
  };

  return (
    <main className="2xl:w-[1920px] w-[100%] border-b-2 bg-neutral-100">
      <div className="flex items-center justify-center bg-white h-[70px]">
        {/* Main content container */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          {/* Logo */}


<Link href="/">   
       <Image src="/Hekto.png"
           width={98} 
           height={34} 
           alt="logo" 
           />
</Link>
          {/* nav links */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-indigo-100 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black">
              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/">Home</Link>
              </li>

              {/* Pages with dropdown */}
              <li
                className="relative p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4"
                onMouseEnter={() => setPageDropdownOpen(true)}
                onMouseLeave={() => setPageDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-2"
                  onClick={togglePageDropdown}
                >
                  Pages <span>{pageDropdownOpen ? "▲" : "▼"}</span>
                </button>

                {/* Dropdown menu */}
                {pageDropdownOpen && (
                  <ul className="absolute left-0 top-[100%] bg-[#f5f5f5] border border-black shadow-md rounded-md p-2 z-50">
                    <li className="px-4 py-2 hover:bg-gray-200  rounded-3xl">
                      <Link href="/About">About</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-3xl">
                      <Link href="/ShopGrid">Shop Grid</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-3xl">
                      <Link href="/shop-list">Shop List</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-3xl">
                      <Link href="/shop-left-sidebar">Shop Left Sidebar</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-3xl">
                      <Link href="/product-details">Product Details</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-3xl">
                      <Link href="/Curt">Cart</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-3xl">
                      <Link href="/Order">Your Order</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-3xl">
                      <Link href="/Signup">Signup </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-3xl">
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 rounded-3xl">
                      <Link href="/Faqs">FAQs</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/List">Product</Link>
              </li>

              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/blog">Blog</Link>
              </li>

              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/shop">Shop</Link>
              </li>

              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Search and toggle button */}
          <div className="flex gap-x-4 items-center">
            
            {/* Search bar for lg screens */}
            <div className="hidden lg:flex w-[317px] bg-gray-200 rounded-md items-center">
              <input
                className="w-[270px] h-10 p-1 bg-white border-2 border-[#E7E6EF] outline-none"
                type="search"
                placeholder="Search"
              />
              <div className="text-xl w-[51px] h-[40px] bg-[#FB2E86] text-[#F3F9FF] text-center">
                <FaSearch />
              </div>
            </div>

            <button
              className="text-black text-3xl md:hidden ml-32 sm:block z-50 b"
              onClick={toggle}
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;

