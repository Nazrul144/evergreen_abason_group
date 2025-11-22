"use client";

import { Tabs, TabsProps } from "antd";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Skyline Tower",
    description: "A modern skyscraper designed for sustainable urban living.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    category: "Buildings",
  },
  {
    id: "2",
    title: "Sunset Villas",
    description: "Luxury residential villas with scenic sunset views.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    category: "Residential",
  },
  {
    id: "3",
    title: "Grand Hotel",
    description: "A premium hospitality project in the heart of the city.",
    image: "https://images.unsplash.com/photo-1551907234-23f6b0f59d0f?auto=format&fit=crop&w=800&q=80",
    category: "Hospitality",
  },
  {
    id: "4",
    title: "City Library",
    description: "Modern public library with sustainable materials and smart design.",
    image: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=800&q=80",
    category: "Public Buildings",
  },
  {
    id: "5",
    title: "Industrial Plant X",
    description: "Heavy industrial project focusing on efficiency and safety.",
    image: "https://images.unsplash.com/photo-1596496054820-1c8f0f0c1f19?auto=format&fit=crop&w=800&q=80",
    category: "Heavy Industrial",
  },
  {
    id: "6",
    title: "Old Town Renovation",
    description: "Renovation project preserving heritage with modern design.",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
    category: "Renovation",
  },
  // Extra dummy projects for more realism
  {
    id: "7",
    title: "Riverfront Apartments",
    description: "Residential apartments by the river with modern interiors.",
    image: "https://images.unsplash.com/photo-1600585154493-459b95f7027c?auto=format&fit=crop&w=800&q=80",
    category: "Residential",
  },
  {
    id: "8",
    title: "Mountainview Resort",
    description: "Luxury resort in the mountains with eco-friendly design.",
    image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=800&q=80",
    category: "Hospitality",
  },
  {
    id: "9",
    title: "Corporate Tower",
    description: "State-of-the-art office tower in downtown.",
    image: "https://images.unsplash.com/photo-1505842465776-3d2f7a3b214f?auto=format&fit=crop&w=800&q=80",
    category: "Buildings",
  },
  {
    id: "10",
    title: "City Museum",
    description: "Public building combining culture and modern architecture.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    category: "Public Buildings",
  },
];

const Work = () => {
  // Tab categories
  const categories = ["All", "Buildings", "Residential", "Hospitality", "Public Buildings", "Heavy Industrial", "Renovation"];

  const items: TabsProps["items"] = categories.map((category, index) => ({
    key: String(index + 1),
    label: category,
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projects
          .filter((project) => category === "All" || project.category === category)
          .map((project) => (
            <Link key={project.id} href={`/work/${project.id}`}>
              <div key={project.id} className="border rounded p-4 dark:bg-gray-800">
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="mt-2 font-semibold text-gray-900 dark:text-gray-300">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-300 mt-1">{project.description}</p>
              </div>
            </Link>
          ))}
      </div>
    ),
  }));

  const onChange = (key: string) => {
    console.log("Active Tab:", key);
  };

  return (
    <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
      {/* Heading */}
      <div className="flex items-center space-x-2">
        <h3 className="text-[#6A7282] dark:text-gray-300">Our Work</h3>
        <span className="w-12 h-[1px] bg-green-500"></span>
      </div>
      <div>
        <h1 className="text-2xl lg:text-4xl text-[#1b2027] font-semibold mt-4 mb-4 dark:text-gray-300">Projects</h1>
        <h1 className="text-xl text-[#4A5565] dark:text-gray-300">
          Building the future of the construction industry, one project at a time.
        </h1>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <Tabs className="custom-tabs" defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Work;
