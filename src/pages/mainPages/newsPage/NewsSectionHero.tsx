"use client";
import Image from "next/image";
import { Button, Card } from "antd";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// Correct interface for a single news item
interface NewsItem {
  id: number;
  title: string;
  description: string;
  picture: string;
}

interface NewsSectionHeroProps {
  news: NewsItem[];
}

const NewsSectionHero: React.FC<NewsSectionHeroProps> = ({ news = [] }) => {  // ← Default to empty array
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleAllNews = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleCount(news.length);
      setLoading(false);
    }, 1200);
  };

  // Safe fallback: use empty array if news is undefined
  const newsList = news || [];

  return (
    <section className="lg:px-44 md:px-10 px-4 lg:mt-20 dark:bg-gray-900 overflow-x-hidden max-w-full">
      {/* Top Header */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between overflow-x-hidden"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
        }}
      >
        <div>
          <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
            Insights
            <span className="h-px w-10 bg-green-500"></span>
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600">
            News
          </h2>
        </div>

        <p className="mt-6 md:mt-0 max-w-md text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          Our people are dedicated to finding solutions to every challenge. That
          spirit makes for great stories worth sharing.
        </p>
      </motion.div>

      {/* Featured Story */}
      <motion.div
        className="mt-16 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/40 rounded-xl overflow-hidden shadow-md"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Text Section */}
          <div className="lg:p-14 p-8">
            <h3 className="lg:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-snug">
              Winthrop Center Will Be One of the World&apos;s Largest Passive House
              Buildings
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              In design, sustainability, and programming, the Boston University
              Center for Computing & Data Sciences marks the future of
              construction in higher education. This 19-story,
              350,000-square-foot project is a breakthrough in modern building
              efficiency.
            </p>

            <Link
              href="/story"
              className="inline-block mt-8 font-semibold text-sm text-transparent bg-clip-text bg-linear-to-r from-green-500 to-emerald-700 hover:opacity-80 transition"
            >
              READ FULL STORY →
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative h-[350px] lg:h-full">
            <Image
              width={800}
              height={800}
              src="/NewsPage/banner.jpg"
              alt="News Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 overflow-x-hidden"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
        }}
      >
        {newsList.slice(0, visibleCount).map((item) => (
          <Link href={`/news/${item.id}`} key={item.id}>
            <Card
              className="w-full h-[480px] dark:bg-gray-900 dark:border-gray-700 shadow-md dark:shadow-black/50"
              styles={{ body: { padding: "20px" } }}
            >
              <Image
                src={item.picture}
                alt={item.title}
                width={500}
                height={600}
                unoptimized
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <p className="font-semibold text-xl text-sky-500">{item.title}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {item.description.length > 150
                  ? `${item.description.slice(0, 150)}...`
                  : item.description}
              </p>
            </Card>
          </Link>
        ))}
      </motion.div>

      {/* Button */}
      {newsList.length > 6 && visibleCount < newsList.length && (
        <div className="text-center">
          <Button
            loading={loading}
            onClick={handleAllNews}
            className="mt-8 mb-8 text-lg"
          >
            {loading ? "Loading..." : "View All News"}
          </Button>
        </div>
      )}
    </section>
  );
};

export default NewsSectionHero;