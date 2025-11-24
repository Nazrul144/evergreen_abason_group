"use client"
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

const WorkTogetherBanner: FC = () => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
    
      <Image
        src="/NewsPage/workTogetherBanner.jpg" 
        alt="Banner Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h2 className="text-white text-4xl lg:text-6xl leading-tight font-semibold mb-10"
         initial={{ y: 100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{
           delay: 0.2,
           type: "keyframes",
           stiffness: 60,
           duration: 1,
         }}
        >
          Ready to <br /> work together?
        </motion.h2>

        {/* Buttons */}
        <motion.div className="flex justify-center gap-2 lg:gap-4"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "keyframes",
          stiffness: 60,
          duration: 1,
        }}
        >
          <Link
            href="/contact"
            className="relative group inline-block lg:px-8 py-4 bg-[#1a1a1a] text-white 
  text-xs tracking-wider font-semibold border border-[#292929] 
  hover:bg-[#222] transition"
          >
            <span className="relative"
            
            >
              BUILD A PROJECT WITH US
              
              <span
                className="absolute left-0 -bottom-1 h-px w-0 bg-white 
      transition-all duration-300 group-hover:w-full"
              />
            </span>
          </Link>

          <Link
            href="/build_project"
            className="relative group inline-block  lg:px-8 py-4 bg-[#1a1a1a] text-white 
  text-xs tracking-wider font-semibold border border-[#292929] 
  hover:bg-[#222] transition "
          >
            <span className="relative">
              BUILD A CAREER WITH US
             
              <span
                className="absolute left-0 -bottom-1 h-px w-0 bg-white 
      transition-all duration-300 group-hover:w-full"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkTogetherBanner;
