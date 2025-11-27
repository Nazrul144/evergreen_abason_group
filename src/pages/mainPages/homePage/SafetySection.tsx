"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SafetySection() {
  return (
    <section className="relative w-full py-20 bg-white dark:bg-gray-900 mb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
        <div className="relative w-full flex justify-center lg:justify-start">
          {/* Back Image */}
          <motion.div
            className="w-72 h-72 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-md overflow-hidden shadow-xl max-w-full"
            initial={{ y: -100, x: -100, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          >
            <Image
              src="/Safety_Image/safety1.jpg"
              alt="Safety back image"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Front Overlapping Image */}
          <motion.div
            className="absolute top-20 left-4 sm:top-24 sm:left-6 lg:top-38 lg:left-38 w-72 h-72 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-md overflow-hidden shadow-xl border-4 border-white dark:border-black max-w-full"
            initial={{ x: 100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          >
            <Image
              src="/Safety_Image/safety2.jpg"
              alt="Safety front image"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col mt-28 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "keyframes",
            stiffness: 60,
            duration: 1,
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-medium tracking-wide text-gray-700 dark:text-gray-300">Safety</span>
            <span className="h-px w-12 bg-green-500 dark:to-orange-200"></span>
          </div>

          {/* Title */}
          <h2
            className="text-2xl lg:text-4xl md:text-5xl font-extrabold leading-tight text-emerald-500 
               [text-shadow:3px_3px_0px_rgb(0,0,0,0.35),6px_6px_0px_rgb(0,0,0,0.25)]"
          >
            Safety fast, <br /> Work last.
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed max-w-md break-words">
            We want every employee and trade partner to feel that they are part of a common good and cohesive team. We help our
            teams form stronger relationships by emphasizing people and teamwork over processes and checklists.
          </p>

          {/* Links */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm font-semibold">
            <Link href="/learn_more" className="text-gray-900 dark:text-white font-semibold animate-soft-blink">
              LEARN MORE
            </Link>

            <span className="h-4 w-[1px] bg-gray-400 hidden sm:block"></span>

            <Link href="build_project" className="">
              CAREERS AT EVERGREEN ABASON GROUP
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
