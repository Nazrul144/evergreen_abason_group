"use client";
import { Spinner } from "@/components/ui/spinner";
import { ProjectContext } from "@/providers/AllProjectsProvider";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const AllProjects = () => {
  const context = useContext(ProjectContext);

  if (!context) return null;

  const { projects, loading } = context;

  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // NEW: Load more handling
  const [showAll, setShowAll] = useState(false);

  if (loading)
    return (
      <div className="flex items-center gap-4 justify-center min-h-screen">
        <Spinner />
      </div>
    );

  if (!projects || projects.length === 0) return null;

  // NEW: Show 9 initially
  const displayedProjects = showAll ? projects : projects.slice(0, 9);

  return (
    <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
      {/* Grid instead of slider */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, i) => (
          <Card
            hoverable={false}
            key={project?.id ?? i}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
            className="dark:bg-gray-900"
            style={{
              width: "100%",
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
            </div>

            {/* Hover Buttons */}
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

      {/* Load More Button */}
      {!showAll && projects.length > 9 && (
        <div className="flex justify-center mt-10 mb-20">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 border border-green-500 rounded-md
    transition-all duration-300 
    hover:text-green-700 hover:shadow-[0_0_18px_rgba(34,197,94,0.75)] font-bold cursor-pointer"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProjects;
