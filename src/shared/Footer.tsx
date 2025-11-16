"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start relative">

          {/* LOGO + CONTACT BLOCK */}
          <div className="flex flex-col items-center text-center space-y-3 col-span-1">

            <Image
              src="/Navbar_Logo/logo.png"
              width={60}
              height={60}
              alt="Evergreen Abason Group"
            />

            {/* FIXED → CENTERED BRAND NAME */}
            <span className="uppercase text-lg leading-tight font-bold">
              <span className="text-[#ED1C24]">E</span>
              <span className="text-[#743237]">vergreen</span>&nbsp;
              <span className="text-[#ED1C24]">A</span>
              <span className="text-[#743237]">bason</span>&nbsp;
              <span className="text-[#ED1C24]">G</span>
              <span className="text-[#743237]">roup</span>
            </span>

            <p className="text-lg font-medium lg:mt-16">212.804.6800</p>
            <p className="text-lg underline underline-offset-2 lg:mb-8">
              info@konstruktion.com
            </p>
          </div>

          {/* ================= CITY BLOCKS ================= */}
          {[
            {
              city: "NEW YORK",
              line1: "Gartner Architects 498, 2nd Floor",
              line2: "New York, NY, 10017",
            },
            {
              city: "MIAMI, FL",
              line1: "Gartner Architects Suite #2700",
              line2: "2 South Biscayne Boulevard",
            },
            {
              city: "NEW JERSEY",
              line1: "Riverfront Plaza, Ste. 305",
              line2: "Jersey City, NJ 07302",
            },
            {
              city: "WASHINGTON DC",
              line1: "1600 Wilson Blvd, Suite 900",
              line2: "Washington, DC, 20006",
            },
          ].map((item, i) => (
            <div key={i} className="space-y-1 mt-2 ml-4">
              <h3 className="font-semibold text-xl tracking-wide mt-2 mb-2 ">{item.city}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.line1}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.line2}</p>
            </div>
          ))}
        </div>

        {/* ================= NAV LINKS ================= */}
        <div className="flex flex-wrap gap-10 text-sm font-medium tracking-wide">
  {["PROJECTS", "HISTORY", "VISION", "LEADERSHIP", "CAREERS"].map((x) => (
    <a
      key={x}
      href="#"
      className="
        relative mt-6
        hover:text-green-600 dark:hover:text-green-400
        after:absolute after:left-0 after:-bottom-[2px]
        after:h-[2px] after:w-0 after:bg-green-600 dark:after:bg-green-400
        after:transition-all after:duration-300
        hover:after:w-full
      "
    >
      {x}
    </a>
  ))}
</div>

        <hr className="mt-6 border-gray-300 dark:border-gray-700" />
        {/* ================= COPYRIGHT AREA ================= */}
        <div className="mt-16 flex flex-wrap justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>©2025 Upartner. All rights reserved</p>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">Facebook</a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">LinkedIn</a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">Instagram</a>

            <span className="hidden sm:block border-r border-gray-300 dark:border-gray-600 mx-1" />

            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
