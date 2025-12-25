"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export interface INewsData {
  id: number;
  title: string;
  description: string;
  picture: string;
}

interface NewsDetailsProps {
  news: INewsData;
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ news }) => {
  if (!news) return null;

  return (
    <section className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container flex flex-col lg:flex-row justify-center p-6 mx-auto sm:py-12 lg:py-24 gap-6">
        {/* Image */}
        <motion.div
          className="flex items-center justify-center p-6 mt-8 lg:mt-0 lg:w-2/5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "keyframes",
            stiffness: 60,
            duration: 1,
          }}
        >
          <Image
            src={news.picture}
            alt={news.title}
            width={800}
            height={600}
            unoptimized
            className="w-full rounded-lg mb-4"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col justify-center p-6 text-center rounded-sm lg:w-3/5 lg:text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "keyframes",
            stiffness: 60,
            duration: 1,
          }}
        >
          <h1 className="text-xl font-bold leading-none sm:text-2xl">
            {news.title}
          </h1>
          <p className="mt-6 mb-8 text-lg text-gray-600 dark:text-gray-300 sm:mb-12 text-justify">
            {news.description}
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              href="/news"
              className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent flex items-center gap-1 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <ArrowLeft size={16} />
              Back to News
            </Link>

            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Home Page
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsDetails;
