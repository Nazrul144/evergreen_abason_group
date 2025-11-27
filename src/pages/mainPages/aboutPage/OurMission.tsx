"use client";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiStairsGoal } from "react-icons/gi";
import { PiBuildingsLight } from "react-icons/pi";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-32">
      {/* Top Heading */}
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
          <h3 className="text-[#6A7282] text-sm tracking-wide">Our Mission</h3>
          <span className="w-12 h-px bg-green-500"></span>
        </div>

        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold leading-tight mt-6 dark:text-gray-300">
          We never stop <br /> thinking about <br /> reshaping the future
        </h1>
      </motion.div>

      {/* 3 Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mt-20">
        {/* Column 1 */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "keyframes",
            stiffness: 60,
            duration: 1,
          }}
        >
          <div className="mb-4 flex justify-center">
            <AiOutlineSafetyCertificate className="text-9xl dark:text-gray-300" />
          </div>

          <h2 className="text-xl font-medium mb-4 text-center dark:text-gray-300">Safety</h2>

          <p className="text-[#4A5565] leading-relaxed text-justify dark:text-gray-400">
            The health and safety of people and our environment lie at the very heart of what we do at Evergreen Abason Group. In
            situations that are physically or psychologically unsafe, we refuse to be bystanders. We are changemakers and action
            takers. This commitment extends to the environment and climate challenges we face today. We advocate for sustainable
            solutions and operate with the responsibility to support one another—holding ourselves accountable for the legacy we
            leave for future generations.
          </p>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            type: "keyframes",
            stiffness: 60,
            duration: 1,
          }}
        >
          <div className="mb-4 flex justify-center">
            <GiStairsGoal className="text-9xl dark:text-gray-300" />
          </div>

          <h2 className="text-xl font-medium mb-4 text-center dark:text-gray-300">Our Purpose</h2>

          <p className="text-[#4A5565] leading-relaxed text-justify dark:text-gray-400">
            Evergreen Abason Group was founded on the belief that every decision we make impacts people and communities.
            That&apos;s why we place humanity at the center of everything we do. We bring together diverse voices and perspectives
            to ensure that what we create improves life for everyone. What we build is designed to deliver value to society long
            after our lifetime and it&apos;s why we never stop thinking about how to reshape the future for the better.
          </p>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            type: "keyframes",
            stiffness: 60,
            duration: 1,
          }}
        >
          <div className="mb-4 flex justify-center">
            <PiBuildingsLight className="text-9xl dark:text-gray-300" />
          </div>

          <h2 className="text-xl font-medium mb-4 text-center dark:text-gray-300">Our Position</h2>

          <p className="text-[#4A5565] leading-relaxed text-justify dark:text-gray-400">
            Evergreen Abason Group uses knowledge & foresight to shape the way people live, work, and connect. While continuing to
            grow year after year, we&apos;s becoming one of the region&apos;s most reliable development and construction
            companies. Together with our customers and the collective expertise of our dedicated team, we create innovative and
            sustainable solutions that support healthy living beyond our lifetime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
