"use client";
import { Anton } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="px-4 md:px-10 lg:px-44 lg:mt-20 dark:bg-gray-900">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 md:mb-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
            className="w-full md:w-auto"
          >
            <p className="text-xs sm:text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
              A bold direction
              <span className="h-px w-10 bg-green-500"></span>
            </p>

            <h2
              className="
                text-4xl sm:text-5xl md:text-6xl font-bold mt-3
                text-transparent bg-clip-text
                bg-linear-to-r from-emerald-400 via-sky-400 to-blue-600
              "
            >
              Vision
            </h2>
          </motion.div>

          <motion.p
            className="
              mt-4 md:mt-0 
              max-w-full md:max-w-md 
              text-gray-600 dark:text-gray-300 
              text-xs sm:text-sm 
              leading-relaxed
            "
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          >
            Our vision is to lead the way in sustainable innovation, creating
            solutions that harmonize technology, community, and the environment.
            We strive to design and build a future where every project
            contributes to a greener, smarter, and more connected world. Through
            creativity, collaboration, and unwavering commitment, we turn
            ambitious ideas into tangible progress, inspiring positive change
            for generations to come.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="relative w-full h-[350px] sm:h-[450px] md:h-[550px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "keyframes",
          stiffness: 60,
          duration: 1,
        }}
      >
        <Image
          src="/Learn_More/image1.jpg"
          alt="bannerImage"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1
            className={`
              ${anton.className} 
              text-2xl sm:text-3xl md:text-5xl 
              font-black text-white
            `}
          >
            Explore our journey towards a sustainable future.
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
