"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { PiCirclesFourFill } from "react-icons/pi";
import { Drawer } from "antd";
import Image from "next/image";

const navigationLinks = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "ABOUT US",
    path: "/about",
  },
  {
    title: "SERVICES",
    path: "/services",
  },
  {
    title: "WORK",
    path: "/work",
  },
  {
    title: "NEWS",
    path: "/news",
  },
];

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const pathName = usePathname();

  //Drawer:
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="border-b px-4 lg:px-44 md:px-10 bg-white relative z-50">
        <div className="flex h-20 items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="group size-9 md:hidden" variant="ghost" size="icon">
                  <svg width={20} height={20} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
                    <path
                      d="M4 12H20"
                      className="origin-center -translate-y-[7px] transition-all group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0"
                    />
                    <path d="M4 12H20" className="origin-center transition-all group-aria-expanded:rotate-45" />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>

              <PopoverContent align="start" className="w-40 p-2 md:hidden">
                <NavigationMenu className="w-full">
                  <NavigationMenuList className="flex-col gap-1">
                    {navigationLinks?.map((navigationLink) => (
                      <Link
                        className={`
    text-sm font-semibold relative 
    after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-green-600 
    after:transition-all after:duration-300 
    hover:after:w-full
    ${pathName === navigationLink.path ? "text-black after:w-full" : ""}
  `}
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

            <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide">
              <Image src="/Navbar_Logo/logo.png" alt="logo" width={40} height={40} className="w-auto h-10" />

              <span className="uppercase text-lg leading-tight font-bold">
                <span className="text-[#ED1C24]">E</span>
                <span className="text-[#743237]">vergreen</span>&nbsp;
                <span className="text-[#ED1C24]">A</span>
                <span className="text-[#743237]">bason</span>&nbsp;
                <span className="text-[#ED1C24]">G</span>
                <span className="text-[#743237]">roup</span>
              </span>
            </Link>
          </div>

          {/* CENTER NAV */}
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="flex gap-8">
              {navigationLinks?.map((navigationLink) => (
                <Link
                  className={`
                  text-sm font-semibold relative 
                  after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-green-600
                  after:transition-all after:duration-300 
                  hover:after:w-full
                  ${pathName === navigationLink.path ? "text-black after:w-full" : ""}
                `}
                  href={navigationLink.path}
                  key={navigationLink.path}
                >
                  {navigationLink.title}
                </Link>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* RIGHT BUTTONS */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => setShowSearch(true)}>
              <Search size={18} />
            </button>

            <span className="block h-5 w-[1px] bg-gray-300"></span>

            <Button
              variant="ghost"
              className="
    group
    rounded-none text-[13px] tracking-wide hover:bg-transparent
  "
              onClick={showDrawer}
            >
              <span className="flex gap-2 items-center">
                <PiCirclesFourFill className="text-red-800" />
                <span
                  className="
        relative
        after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0
        after:bg-[#00A651] after:transition-all after:duration-300
        group-hover:after:w-full
      "
                >
                  GET IN TOUCH
                </span>
              </span>
            </Button>
            <Drawer closable={{ "aria-label": "Close Button" }} onClose={onClose} open={open}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
        </div>
      </header>

      {/* 🔽 SEARCH BAR */}
      {showSearch && (
        <div className="border-b py-6 px-4 md:px-10 bg-white flex items-center justify-between relative">
          <div className="relative w-full max-w-[650px] mx-auto flex">
            {/* INPUT */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for projects, people, or topics..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") alert("Searching for: " + searchText);
                }}
                className="w-full border py-3 pl-4 pr-10 text-sm outline-none"
              />
              {searchText.length > 0 && (
                <button onClick={() => setSearchText("")} className="absolute right-3 top-1/2 -translate-y-1/2">
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
            className="absolute right-6"
          >
            <X size={38} />
          </Button>
        </div>
      )}
    </>
  );
}
