"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Globe, Building2, Sparkles } from "lucide-react";
import Link from "next/link";

const FullStory = () => {
  const sections = [
    {
      icon: <Leaf className="w-6 h-6 text-white" />,
      title: "A Vision for a Sustainable Future",
      description:
        "Evergreen Abason Group is redefining the future of sustainable development through visionary engineering and rigorous environmental stewardship. The Winthrop Center demonstrates our commitment to Passive House standards—delivering unmatched energy efficiency, healthier air quality, and dramatically reduced carbon emissions.",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Human-Centered Design with Global Impact",
      description:
        "The Winthrop Center places people at the heart of its design. Every space is crafted with thoughtful attention to natural light, ventilation, acoustics, and comfort—promoting well-being, creativity, and productivity.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "Creating a Greener Built Environment",
      description:
        "Achieving up to 70% lower energy usage than conventional towers, the project sets a new benchmark for sustainability through airtight construction, renewable-integrated systems, and high-performance insulation.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Innovation That Inspires the Industry",
      description:
        "The Winthrop Center stands as a symbol of innovation—showing how pioneering engineering and thoughtful design can build a brighter, more sustainable future and inspire global change.",
    },
  ];

  return (
    <section className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900 mb-20">
      <div>
        {/* ---- HEADER ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            Evergreen Abason Group
            <span className="h-[1px] w-10 bg-green-500"></span>
          </p>

          <h1
            className="
              text-4xl md:text-6xl font-bold mt-4 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600
            "
          >
            Winthrop Center: A Global Landmark in Passive House Design
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            A breakthrough project that reinforces Evergreen Abason Group’s commitment to environmental leadership and next-generation construction standards.
          </p>
        </motion.div>

        {/* ---- BANNER IMAGE ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/NewsPage/banner.jpg"
            alt="Story Image"
            fill
            className="object-cover brightness-90 hover:scale-105 transition-all duration-700"
          />
        </motion.div>

        {/* ---- ZIGZAG TIMELINE ---- */}
        <div className="relative mt-20 lg:mt-28">
          {/* CENTER LINE (desktop only) */}
          <div className="
            hidden lg:block 
            absolute left-1/2 top-0 -translate-x-1/2 
            w-1 h-full 
            bg-gradient-to-b from-emerald-500 via-blue-500 to-sky-400 opacity-70
          " />

          <div className="space-y-20">
            {sections.map((item, index) => {
              const isLeft = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`
                    flex items-start gap-10 relative
                    ${isLeft ? "lg:flex-row-reverse" : "lg:flex-row"}
                    flex-col
                  `}
                >
                  {/* Connector line to center (desktop only) */}
                  <div
                    className={`
                      hidden lg:block absolute top-14 
                      ${isLeft ? "right-1/2" : "left-1/2"} 
                      w-20 h-1 
                      bg-gradient-to-r from-emerald-400 to-blue-500
                      ${isLeft ? "rounded-l-full" : "rounded-r-full"}
                    `}
                  ></div>

                  {/* Spacing block for zigzag desktop layout */}
                  <div className="hidden lg:block w-1/2"></div>

                  {/* CARD */}
                  <div
                    className="
                      w-full lg:w-1/2 bg-white dark:bg-gray-800 
                      p-8 rounded-2xl shadow-lg 
                      hover:shadow-emerald-500/20 hover:scale-[1.02]
                      transition-all duration-300 border border-gray-100 dark:border-gray-700
                      relative z-10
                    "
                  >
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4">
                      <div className="
                        w-14 h-14 flex items-center justify-center rounded-full 
                        bg-gradient-to-br from-emerald-500 to-blue-600 
                        shadow-lg shadow-emerald-500/40
                      ">
                        {item.icon}
                      </div>

                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h2>
                    </div>

                    <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20"
        >
          <Link href="/news"
            className="
              px-8 py-3 rounded-full text-white text-lg font-semibold
              bg-gradient-to-r from-emerald-500 to-blue-600
              hover:opacity-90 hover:scale-105 transition-all duration-300
              shadow-lg shadow-emerald-600/30
            "
          >
            Back to News
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FullStory;
