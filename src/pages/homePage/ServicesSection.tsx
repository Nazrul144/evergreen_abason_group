"use client";

import { motion } from "framer-motion";
import { Building, ClipboardList, PenTool, FileSpreadsheet } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  { id: "construction", title: "Construction", href: "#", icon: Building },
  { id: "pre-construction", title: "Pre-Construction", href: "#", icon: ClipboardList },
  { id: "design-build", title: "Design - Build", href: "#", icon: PenTool },
  { id: "lump-sum", title: "Lump-Sum Contracting", href: "#", icon: FileSpreadsheet },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-black text-white py-20 dark:bg-gray-900 dark:border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-sm tracking-wide text-gray-300 mb-2">
            Services <span className="text-green-400">—</span>
          </p>
          <h2 className="text-5xl md:text-6xl font-light leading-tight">
            Providing exceptional <br /> construction services <br />
            and insight from the <br /> start.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="border-b border-white/10 pb-6">
                <Link
                  href={item.href}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center gap-4 group relative"
                >
                  {/* ICON */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{
                      scale: hovered === item.id ? 1.1 : 1,
                      opacity: hovered === item.id ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.25 }}
                    className="text-green-400 w-10 flex justify-center"
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </motion.div>

                  {/* TEXT */}
                  <span className="text-xl relative inline-block">
                    {item.title}

                 
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{
                        width: hovered === item.id ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="absolute -bottom-1 left-0 h-[1px] bg-green-400"
                    />
                  </span>

          
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{
                      opacity: hovered === item.id ? 1 : 0,
                      x: hovered === item.id ? 0 : -5,
                    }}
                    transition={{ duration: 0.25 }}
                    className="text-green-400"
                  >
                    <FaArrowRightLong size={24} className="lg:ml-66"/>
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
