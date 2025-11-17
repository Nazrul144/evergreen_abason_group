"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { PiCirclesFourFill } from "react-icons/pi";
import { Drawer } from "antd";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { ModeToggle } from "@/components/ThemeComponent/ModeToggle";

const navigationLinks = [
  { title: "HOME", path: "/" },
  { title: "ABOUT US", path: "/about" },
  { title: "SERVICES", path: "/services" },
  { title: "WORK", path: "/work" },
  { title: "NEWS", path: "/news" },
];

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b px-4 lg:px-44 md:px-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative z-50">
        <div className="flex h-20 items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-9 md:hidden dark:text-gray-200"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      d="M4 12H20"
                      className="origin-center -translate-y-[7px] transition-all group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                className="w-40 p-2 md:hidden dark:bg-gray-800 dark:text-gray-200"
              >
                <NavigationMenu className="w-full">
                  <NavigationMenuList className="flex-col gap-1">
                    {navigationLinks?.map((navigationLink) => (
                      <Link
                        className={`text-sm font-semibold relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full ${
                          pathName === navigationLink.path
                            ? "text-black dark:text-white after:w-full"
                            : "dark:text-gray-300"
                        }`}
                        href={navigationLink.path}
                        key={navigationLink.path}
                      >
                        {navigationLink.title}
                      </Link>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>

            <Link
              href="/"
              className="flex items-center gap-2 font-semibold tracking-wide"
            >
              <Image
                src="/Navbar_Logo/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-auto h-10"
              />
              <span className="uppercase text-lg leading-tight font-bold dark:text-gray-100">
                {"Evergreen Abason Group".split("").map((char, i) => (
                  <span
                    key={i}
                    className={`inline-block animate-color-flow ${
                      char === " " ? "mr-1" : ""
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </Link>
          </div>

          {/* CENTER NAV */}
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="flex gap-8">
              {navigationLinks?.map((navigationLink) => (
                <Link
                  className={`text-sm font-semibold relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full ${
                    pathName === navigationLink.path
                      ? "text-black dark:text-white after:w-full"
                      : "text-gray-800 dark:text-gray-300"
                  }`}
                  href={navigationLink.path}
                  key={navigationLink.path}
                >
                  {navigationLink.title}
                </Link>
              ))}
              <ModeToggle />
            </NavigationMenuList>
          </NavigationMenu>

          {/* RIGHT BUTTONS */}
          <div className="hidden md:flex items-center gap-6 dark:text-gray-200">
            <button onClick={() => setShowSearch(true)}>
              <Search size={18} />
            </button>
            <span className="block h-5 w-[1px] bg-gray-300 dark:bg-gray-700"></span>

            <Button
              variant="ghost"
              className="group rounded-none text-[13px] tracking-wide hover:bg-transparent dark:text-gray-200"
              onClick={() => setOpen(true)}
            >
              <span className="flex gap-2 items-center">
                <PiCirclesFourFill className="text-red-800 dark:text-red-500" />
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#00A651] after:transition-all after:duration-300 group-hover:after:w-full dark:text-gray-300">
                  GET IN TOUCH
                </span>
              </span>
            </Button>
            {/* Drawer */}
            <Drawer
              width={500}
              closable={{ "aria-label": "Close Button" }}
              onClose={() => setOpen(false)}
              open={open}
              classNames={{
                content: "bg-transparent", // fixes error
                wrapper: "bg-[#0A0F1C] dark:bg-[#0A0F1C]",
                mask: "bg-black/70",
              }}
            >
              {/* FIX: Force dark theme inside drawer */}
              <div className="drawer-content dark:bg-[#0A0F1C] bg-[#0A0F1C] dark:text-gray-200 text-gray-100 h-full">
                <div className="flex flex-col h-full">
                  <div className="w-full pt-6">
                    <Image
                      src="/Navbar_Logo/sidebar/sidebar_logo.png"
                      width={800}
                      height={600}
                      alt="Konstruktion Logo"
                      className="mx-auto"
                    />
                  </div>

                  <div className="px-6 py-6">
                    <h1 className="text-green-600 dark:text-green-500 text-4xl text-center mb-4 font-semibold">
                      OFFICE
                    </h1>

                    <address className="not-italic text-gray-300 dark:text-gray-300 text-lg leading-relaxed space-y-1 text-center">
                      <p>Gartner Architects 498</p>
                      <p>Seventh Ave</p>
                      <p>20th Floor</p>
                      <p>New York, NY 10018</p>
                      <p>📞 212.267.2060</p>
                      <p className="flex items-center justify-center gap-2">
                        <MdEmail className="text-xl text-gray-300 dark:text-gray-300" />
                        info@konstruktion.com
                      </p>
                    </address>
                  </div>

                  <hr className="my-2 border-gray-700" />

                  <div className="px-6 text-center mb-4">
                    <p className="text-xl font-medium text-gray-200 mb-3">
                      Got a project in mind?
                    </p>
                    <Button className="w-full py-6 text-xl rounded-none bg-green-600 text-white hover:bg-green-700 dark:hover:bg-green-500 transition flex justify-center">
                      <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] cursor-pointer after:bg-white dark:after:bg-gray-200 after:w-full after:scale-x-0 after:origin-[var(--origin)] after:transition-transform after:duration-500 hover:after:scale-x-100">
                        Let&apos;s Talk
                      </span>
                    </Button>
                  </div>

                  <hr className="mb-4 border-gray-700 mt-4" />

                  <div className="mt-auto px-6 pb-6 flex flex-col items-center">
                    <h3 className="text-gray-400 text-lg mb-2">Follow us</h3>

                    <div className="flex gap-6 text-lg">
                      <a className="flex items-center gap-2 text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400">
                        <i className="fab fa-facebook-square"></i> Facebook
                      </a>
                      <a className="flex items-center gap-2 text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400">
                        <i className="fab fa-linkedin"></i> LinkedIn
                      </a>
                      <a className="flex items-center gap-2 text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400">
                        <i className="fab fa-instagram"></i> Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </header>

      {/* SEARCH BAR */}
      {showSearch && (
        <div className="border-b py-6 px-4 md:px-10 bg-white dark:bg-gray-900 flex items-center justify-between relative">
          <div className="relative w-full max-w-[650px] mx-auto flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for projects, people, or topics..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") alert("Searching for: " + searchText);
                }}
                className="w-full border py-3 pl-4 pr-10 text-sm outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              />
              {searchText.length > 0 && (
                <button
                  onClick={() => setSearchText("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 dark:text-gray-400"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <button
              onClick={() => alert(`Searching for: ${searchText}`)}
              className="w-12 bg-green-600 flex justify-center items-center"
            >
              <Search size={18} className="text-white" />
            </button>
          </div>

          <Button
            variant={"ghost"}
            onClick={() => {
              setShowSearch(false);
              setSearchText("");
            }}
            className="absolute right-6 dark:text-gray-300"
          >
            <X size={38} />
          </Button>
        </div>
      )}
    </>
  );
}
