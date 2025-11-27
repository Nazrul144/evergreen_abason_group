"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const OurCommitment = () => {
  return (
    <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900 mb-12">
      <div className="lg:flex justify-between">
        <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "keyframes",
          stiffness: 60,
          duration: 1,
        }}
        >
          <div className="flex items-center space-x-2">
            <h3
              className="text-[#6A7282] dark:text-gray-300"
            >
              Our Commitment To Community
            </h3>
            <span className="w-12 h-px bg-green-500 mt-1"></span>
          </div>
          <h3 className="text-[#0A0A0A] dark:text-gray-300 font-bold text-2xl lg:text-3xl mt-2">
            We are committed to New York <br /> City
          </h3>
        </motion.div>
        <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "keyframes",
          stiffness: 60,
          duration: 1,
        }}
        >
          <p className="text-[#4A5565] text-sm text-justify">
            As a commercial construction company, we support New York City&apos;s businessmen today <br /> and require what&apos;s
            yet to come tomorrow. At Konstruktion, we help every client sees their <br /> vision come to life.
          </p>
        </motion.div>
      </div>
      {/*Banner Image*/}
      <motion.div className="w-full mt-6"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        type: "keyframes",
        stiffness: 60,
        duration: 1,
      }}
      >
        <Image
          src="/AboutBanner/community_banner.jpg"
          width={1000}
          height={1000}
          alt="community_image"
          className="object-cover w-full"
        />
      </motion.div>
    </div>
  );
};

export default OurCommitment;
