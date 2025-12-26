"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="mt-20 dark:bg-gray-900">
      {/* Top Section */}
      <section className="lg:px-44 md:px-10 px-6">
        <div className="flex items-center space-x-2">
          <motion.h3
            className="text-[#6A7282] dark:text-gray-300"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          >
            Projects
          </motion.h3>
          <motion.span
            className="w-12 h-px bg-green-500 mt-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          ></motion.span>
        </div>

        {/* About Row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-20 mt-4">
          <motion.div
            className="md:basis-[50%]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          >
            <h3 className="text-green-500 text-4xl font-semibold">About us</h3>
          </motion.div>

          <motion.div
            className="md:basis-[50%]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          >
            <p className="text-[#4A5565] dark:text-gray-400 leading-relaxed">
              From four cities, with a team of industry professionals, we work
              for <br /> businesses all over the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Banner Image */}
      <motion.div
        className="w-full mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          type: "keyframes",
          stiffness: 60,
          duration: 1,
        }}
      >
        <Image
          src="/AboutBanner/aboutBanner.jpg"
          width={1600}
          height={900}
          alt="banner_image"
          className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover"
        />
      </motion.div>
    </div>
  );
};

export default AboutHero;
