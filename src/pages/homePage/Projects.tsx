"use client";
import { Spinner } from "@/components/ui/spinner";
import { getAllProjectsData } from "@/lib/api";
import { ProjectContext } from "@/providers/AllProjectsProvider";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null); // 🔁 Hover tracking
  const nextCard = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

 const {projects} = useContext(ProjectContext)

  if (!projects.length) return  <div className="flex items-center gap-4"> <Spinner /> </div>

  const visibleCards = [
    projects[index % projects.length],
    projects[(index + 1) % projects.length],
    projects[(index + 2) % projects.length],
  ];

  return (
    <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
      {/* Heading */}
      <div className="flex items-center space-x-2">
        <h3 className="text-[#6A7282] dark:text-gray-300">Projects</h3>
        <span className="w-12 h-[1px] bg-green-500"></span>
      </div>

      <h1 className="text-[#0A0A0A] dark:text-gray-100 text-5xl mt-6 mb-6">
        Delivering our clients more <br /> project clarity, greater <br />
        insight, and less chaos.
      </h1>

      <Link href="/project" className="flex items-center gap-1 cursor-pointer mb-6 group">
        <span
          className="
            flex items-center gap-2 
            text-[#4A5565] dark:text-gray-400 
            group-hover:text-green-500 
            relative
            after:content-[''] 
            after:absolute 
            after:left-0 
            after:bottom-0 
            after:w-0 
            after:h-[1.5px] 
            after:bg-green-500
            after:transition-all 
            after:duration-300
            group-hover:after:w-full
          "
        >
          View all projects
          <GoArrowUpRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </Link>

      {/* Slider */}
      <div className="lg:flex items-center justify-between gap-6 overflow-hidden ">
        {visibleCards.map((project, i) => (
          <Card
            hoverable={false}
            key={project?.id ?? i}
            onMouseEnter={() => setHoveredCard(i)} 
            onMouseLeave={() => setHoveredCard(null)}
            className="dark:bg-gray-900"
            style={{
              width: 560,
              height: 650,
              borderRadius: 0,
              overflow: "hidden",
              backgroundColor: "var(--card-bg)",
            }}
            styles={{
              body: {
                padding: 0,
                backgroundColor: "var(--card-bg)",
              },
            }}
          >
            {/* Image */}
            <div className="relative group w-full h-[500px] overflow-hidden">
              <Image
                draggable={false}
                alt={project.title}
                src={project.image || "/demo_girl.jpg"}
                width={600}
                height={400}
                className="w-full object-cover transition-all duration-500 group-hover:scale-110"
              />

              {hoveredCard !== null && i !== 1 && (
                <>
                  {i === 2 && (
                    <button
                      onClick={prevCard}
                      className="
                        absolute left-0 top-1/2 translate-x-96
                        opacity-100 transition duration-300
                        bg-white/80 dark:bg-gray-700/80 
                        w-10 h-10 flex items-center justify-center cursor-pointer
                      "
                    >
                      <FiArrowRight className="text-4xl" />
                    </button>
                  )}
                  {i === 0 && (
                    <button
                      onClick={nextCard}
                      className="
                        absolute right-0 top-1/2 -translate-x-96
                        opacity-100 transition duration-300
                        bg-white/80 dark:bg-gray-700/80 
                        w-10 h-10 flex items-center justify-center cursor-pointer
                      "
                    >
                      <FiArrowLeft className="text-4xl" />
                    </button>
                  )}
                </>
              )}
            </div>

            <div className="absolute bottom-[148px] right-0 flex items-center overflow-hidden group/view">
              <button
                className="
                  bg-white dark:bg-gray-900 dark:text-gray-300 
                  px-4 py-2 text-sm
                  translate-x-full opacity-0
                  transition-all duration-500
                  group-hover/view:translate-x-0 group-hover/view:opacity-100
                  h-11 cursor-pointer
                "
              >
                View Project
              </button>
              <button
                className="
                  bg-white dark:bg-gray-900 text-black dark:text-white
                  font-light text-sm px-4 py-2 h-11 dark:border-gray-700
                "
              >
                +
              </button>
            </div>

            {/* Card footer */}
            <div className="px-5 py-6 dark:bg-gray-900">
              <div>
                <Link
                  href={`/project/${project.id}`}
                  className="
                    text-xs !text-gray-600 relative inline-block mb-1 
                    dark:!text-gray-300
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-[1.5px] after:w-0 after:bg-green-500 
                    after:transition-all after:duration-300 
                    hover:after:w-full
                  "
                >
                  Projects
                </Link>
              </div>

              <div>
                <Link
                  href={`/project/${project.id}`}
                  className="
                    text-2xl !text-gray-600 relative inline-block mb-1
                    dark:!text-gray-300
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-px after:w-0 after:bg-green-500 
                    after:transition-all after:duration-300 
                    hover:after:w-full
                  "
                >
                  {project.title.length > 20
                    ? project.title.substring(0, 20) + "..."
                    : project.title}
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
