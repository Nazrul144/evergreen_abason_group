"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const cities = [
    { city: "Head Office", line1: "4 Darus Salam Road, Mirpur Tower, Level-8", line2: "Mirpur-1, Dhaka-1216" },
    { city: "Phone", line1: "+8801950 572876", line2: "+8801725 279476", line3: "+8801712 189909" },
    { city: "Email", line1: "infe@evergreenabason.com"},
    { city: "Location", line1: "Road-10, Block-C, Section-6, Mirpur, Dhaka (Opposite of Mirpur Bangla School)"},
  ];

  const navLinks = [
    {title: "PROJECTS", path: "/project"},
    {title: "STORY", path: "/story"},
    {title: "VISION", path: "/learn_more"},
    {title: "CONSTRUCTION", path: "/construction"},
    {title: "CAREERS", path: "/build_project"},
  ];
  const socialLinks = [
    {title: "Facebook", path: "#"},
    {title: "LinkedIn", path: "#"},
    {title: "Instagram", path: "#"},
    {title: "Terms and Conditions", path: "/term_conditon"},
    {title: "Privacy Policy", path: "/policy"},
  ];

  return (
    <motion.footer
      className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "keyframes", stiffness: 60, duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start relative">
          <div className="flex flex-col items-center text-center space-y-3 col-span-1">
            <Image src="/Navbar_Logo/logo.png" width={60} height={60} alt="Evergreen Abason Group" />
            <span className="uppercase text-[12px] lg:text-lg leading-tight font-bold whitespace-nowrap">
              {"Evergreen Abason Group".split("").map((char, i) => (
                <span
                  key={i}
                  className={`inline-block animate-color-flow ${char === " " ? "mr-1" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </span>
            <p className="text-lg font-medium lg:mt-16">+8801950 572876</p>
            <p className="text-lg underline underline-offset-2 lg:mb-8">infe@evergreenabason.com</p>
          </div>

          {/* Cities */}
          {cities.map((item, i) => (
            <div key={i} className="space-y-1 mt-2 ml-0 sm:ml-4">
              <h3 className="font-semibold text-xl tracking-wide mt-2 mb-2">{item.city}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.line1}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.line2}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.line3}</p>
            </div>
          ))}
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap gap-6 md:gap-10 mt-6 text-sm font-medium tracking-wide">
          {navLinks.map((navLink) => (
            <Link key={navLink.path}
              
              href={navLink.path}
              className="relative hover:text-green-600 dark:hover:text-green-400
                after:absolute after:left-0 after:-bottom-0.5
                after:h-px after:w-0 after:bg-green-600 dark:after:bg-green-400
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
            {navLink.title}
            </Link>
          ))}
        </div>

        <hr className="mt-12 border-gray-300 dark:border-gray-700" />

        {/* Copyright & Social */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>©2025 Upartner. All rights reserved</p>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            {socialLinks.map((socialLink) => (
              <Link
                key={socialLink.path}
                href={socialLink.path}
                className="relative hover:text-green-600 dark:hover:text-green-400
                  after:absolute after:left-0 after:-bottom-0.5
                  after:h-px after:w-0 after:bg-green-600 dark:after:bg-green-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {socialLink.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
