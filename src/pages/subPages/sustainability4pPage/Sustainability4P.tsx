"use client";
import Image from "next/image";
import SustainabilityScroller from "./SustainabilityScroller";
import WorkTogetherBanner from "../../mainPages/newsPage/WorkTogetherBanner";
import { motion } from "framer-motion";

const Sustainability4P: React.FC = () => {
  return (
    <section className="overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-10 lg:px-44 lg:mt-20 dark:bg-gray-900 gap-6">
        <motion.div
          className="dark:text-gray-300 w-full lg:w-[50%]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "keyframes", stiffness: 60, duration: 1 }}
        >
          <div className="flex items-center space-x-2">
            <h3 className="text-[#6A7282] dark:text-gray-300 text-sm sm:text-base">Our way</h3>
            <span className="w-12 h-px bg-green-500"></span>
          </div>
          <h2 className="text-2xl lg:text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-sky-400 to-blue-600">
            Sustainability
          </h2>
        </motion.div>

        <motion.div
          className="w-full lg:w-[50%]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "keyframes", stiffness: 60, duration: 1 }}
        >
          <p className="text-sm sm:text-base leading-relaxed">
            Evergreen Abason Group embraces a holistic approach to sustainability through our 5P Model, ensuring every initiative
            creates meaningful, lasting value for our partners, our people, our projects, our practices, and the places we serve.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-6"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "keyframes", stiffness: 60, duration: 1 }}
      >
        <Image
          src="/Sustainability/sustainability.jpg"
          width={1200}
          height={800}
          alt="banner"
          className="object-cover w-full h-[250px] sm:h-[400px] md:h-[650px] brightness-75 rounded-lg"
        />
      </motion.div>

      {/* Approach Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-44 lg:mt-20 dark:text-gray-300">
        <div className="mb-12">
          <motion.p
            className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-300 flex items-center gap-3 mt-4 lg:mt-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "keyframes", stiffness: 60, duration: 1 }}
          >
            Our Approach
            <span className="block w-10 h-px bg-green-500"></span>
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "keyframes", stiffness: 60, duration: 1 }}
              className="text-2xl lg:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight w-full lg:w-[50%] bg-linear-to-r from-green-400 via-teal-500 to-blue-700 bg-clip-text text-transparent"
            >
              4P Model of <br /> Sustainability
            </motion.div>

            <motion.div
              className="w-full lg:w-[50%] text-sm sm:text-base leading-relaxed"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "keyframes", stiffness: 60, duration: 1 }}
            >
              Our approach to sustainability ensures we act in a socially responsible and environmentally respectful manner and
              that we continually measure, evaluate and increase sustainability efforts.
            </motion.div>
          </div>
        </div>

        {/* 4P Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {[
            { title: "Partners", text: "Collaborating as client-focused solution providers to deliver exceptional results to all stakeholders, all the time" },
            { title: "People", text: "Engaging employees by providing education, resources and support" },
            { title: "Projects", text: "Involvement in all phases of a project's life before, during and after its construction" },
            { title: "Practices", text: "Improving operations through measurement, communication and integration of sustainable building practices" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.2, type: "keyframes", stiffness: 60, duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <SustainabilityScroller />
        </div>
      </div>

      <div className="mt-12">
        <WorkTogetherBanner />
      </div>
    </section>
  );
};

export default Sustainability4P;
