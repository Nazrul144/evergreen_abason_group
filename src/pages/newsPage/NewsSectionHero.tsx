"use client";
import Image from "next/image";
import { Button, Card } from "antd";
import Link from "next/link";
import { useState } from "react";

const NewsSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleAllNews = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleCount(newsData.length);
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
            Insights
            <span className="h-[1px] w-10 bg-green-500"></span>
          </p>

          <h2
            className="
    text-5xl md:text-6xl font-bold mt-3
    text-transparent bg-clip-text
    bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600
  "
          >
            News
          </h2>
        </div>

        <p className="mt-6 md:mt-0 max-w-md text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          Our people are dedicated to finding solutions to every challenge. That spirit makes for great stories worth sharing.
        </p>
      </div>

      {/* Main Content Block */}
      <div className="mt-16 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/40 rounded-xl overflow-hidden shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Text Section */}
          <div className="p-10 lg:p-14">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-snug">
              Winthrop Center Will Be One of the World’s Largest Passive House Buildings
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              In design, sustainability, and programming, the Boston University Center for Computing & Data Sciences marks the
              future of construction in higher education. This 19-story, 350,000-square-foot project is a breakthrough in modern
              building efficiency.
            </p>

            <Link
              href="#"
              className="inline-block mt-8 font-semibold text-sm 
  text-transparent bg-clip-text bg-gradient-to-r
  from-green-500 to-emerald-700 hover:opacity-80 transition"
            >
              READ FULL STORY →
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative h-[350px] lg:h-full">
            <Image width={800} height={800} src="/NewsPage/banner.jpg" alt="News Image" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/*News Cards*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {newsData.slice(0, visibleCount).map((news) => (
          <Card
            key={news.id}
            className="
        w-[470px] h-[480px]
        dark:!bg-gray-900 dark:!border-gray-700
        !shadow-md dark:!shadow-black/50
      "
            bodyStyle={{
              padding: "20px",
            }}
          >
            <Image
              src={news.image}
              alt={news.title}
              width={500}
              height={600}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <Link href="#" className="font-semibold text-gray-900 dark:text-gray-300">
              {news.title}
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{news.shortDescription}</p>
          </Card>
        ))}
      </div>
      <div className="w-38 mx-auto">
        <Button loading={loading} onClick={handleAllNews} className="mt-8 mb-8 text-lg">
          {loading ? "Loading..." : "View All News"}
        </Button>
      </div>
    </section>
  );
};

export default NewsSection;

export const newsData = [
  {
    id: 1,
    title: "Evergreen Launches New Eco-Friendly Construction Initiative",
    shortDescription:
      "The Evergreen Abason Group unveils a sustainability-focused construction framework aimed at reducing carbon emissions by 40% by 2030.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Evergreen Begins Work on Major Urban Redevelopment Project",
    shortDescription:
      "A new redevelopment project promises green spaces, smart buildings, and next-generation sustainability solutions.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "New Safety Protocols Introduced Across All Construction Sites",
    shortDescription: "Evergreen strengthens worker safety measures with advanced monitoring technologies and training programs.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Evergreen Partners With Global Renewable Energy Leaders",
    shortDescription: "A strategic partnership to integrate renewable energy systems into future construction projects.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "New Training Academy Opens for Young Engineers",
    shortDescription:
      "Evergreen launches an academy to train the next generation of engineers, architects, and sustainability experts.",
    image: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Evergreen Wins Award for Sustainable Infrastructure Design",
    shortDescription: "Recognized globally for excellence in eco-friendly architecture and resilient infrastructure development.",
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Major Smart City Project Breaks Ground",
    shortDescription:
      "Evergreen Abason Group begins development of a fully integrated smart city with advanced energy management systems.",
    image: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Evergreen Expands Operations Into Southeast Asia",
    shortDescription: "Company expands its footprint with sustainable development projects in Indonesia, Malaysia, and Vietnam.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "New Green Material Research Center Announced",
    shortDescription: "Evergreen invests in research to develop bio-based construction materials for sustainable engineering.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    title: "Evergreen Hosts Annual Construction Technology Summit",
    shortDescription:
      "Industry leaders gather to discuss smart building systems, robotics, and future construction technologies.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 11,
    title: "New High-Rise Project Features 70% Green Energy Usage",
    shortDescription: "Evergreen reveals a groundbreaking skyscraper powered primarily by renewable energy.",
    image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 12,
    title: "Evergreen Completes Coastal Restoration Mega Project",
    shortDescription: "A large-scale restoration effort to protect coastlines and promote ecological balance.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 13,
    title: "Employee Volunteer Program Achieves Record Participation",
    shortDescription: "Over 1,200 Evergreen employees joined environmental cleanup and community development events.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 14,
    title: "Evergreen Unveils Advanced Water Recycling System",
    shortDescription: "A new innovation designed to cut water waste by more than 60% in construction operations.",
    image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 15,
    title: "Groundbreaking Ceremony Held for New Corporate HQ",
    shortDescription: "Evergreen Abason Group begins construction on its sustainable, solar-ready headquarters complex.",
    image: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?auto=format&fit=crop&w=1200&q=80",
  },
];
