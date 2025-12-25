"use client";

import { Tabs, TabsProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  cover_photo: string;        // <-- from backend
  category_name: string;      // <-- from backend
}

interface WorkProps {
  works: Project[];
}

const Work: React.FC<WorkProps> = ({ works }) => {
  // Extract unique categories + "All"
  const categories = [
    "All",
    ...Array.from(new Set(works.map((project) => project.category_name))),
  ];

  const items: TabsProps["items"] = categories.map((category, index) => ({
    key: String(index + 1),
    label: category,
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {works
          .filter(
            (project) => category === "All" || project.category_name === category
          )
          .map((project) => (
            <Link key={project.id} href={`/work/${project.id}`}>
              <motion.div
                className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 80,
                  duration: 0.8,
                }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.cover_photo}
                    alt={project.title}
                    width={600}
                    height={400}
                    unoptimized // Remove this once next.config.js is fixed permanently
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-2">
                    {project.category_name}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
      </div>
    ),
  }));

  return (
    <section className="lg:px-44 md:px-10 px-4 lg:mt-20 dark:bg-gray-900 py-12">
      {/* Heading */}
      <motion.div
        className="max-w-4xl"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <h3 className="text-[#6A7282] dark:text-gray-400 text-lg font-medium">
            Our Work
          </h3>
          <span className="w-12 h-px bg-green-500"></span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-[#1b2027] dark:text-white mb-4">
          Projects
        </h1>

        <p className="text-xl text-[#4A5565] dark:text-gray-300 max-w-3xl">
          Building the future of the construction industry, one project at a time.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="mt-12"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Tabs
          className="custom-tabs"
          defaultActiveKey="1"
          items={items}
          tabBarGutter={30}
          size="large"
        />
      </motion.div>
    </section>
  );
};

export default Work;