"use client";
import { getAllProjectsData } from "@/lib/api";
import { Card } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

const images = Array(10).fill("/demo_girl.jpg"); // 10 SAME IMAGES

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState([])

  const nextCard = () => setIndex((prev) => (prev + 1) % images.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + images.length) % images.length);


    //Data Fetching:
    useEffect(()=>{
      const fetchAllProjects = async()=>{
        try {
          const res = await getAllProjectsData();
          setProjects(res)
        } catch (error) {
            console.log(error);
        }
      }
      fetchAllProjects()
    },[])

 
  return (
    <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
      <div className="flex items-center space-x-2">
        <h3 className="text-[#6A7282] dark:text-gray-300">Projects</h3>
        <span className="w-12 h-[1px] bg-green-500"></span>
      </div>

      <h1 className="text-[#0A0A0A] dark:text-gray-100 text-5xl mt-6 mb-6">
        Delivering our clients more <br /> project clarity, greater <br />
        insight, and less chaos.
      </h1>

      <button className="flex items-center gap-1 cursor-pointer mb-6 group">
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
      </button>

      {/* CARD */}
      <Card
        hoverable={false}
        style={{ width: 260, borderRadius: 0, overflow: "hidden" }}
        styles={{ body: { padding: 0 } }}
        cover={
          <div className="relative group">
            {/* IMAGE */}
            <Image
              draggable={false}
              alt="project"
              src={images[index]}
              width={600}
              height={600}
              className="w-full object-cover zoom-on-hover"
            />

            {/* LEFT ARROW */}
            <button
              onClick={prevCard}
              className="
      absolute left-0 top-1/2 -translate-y-1/2
      opacity-0 group-hover:opacity-100
      transition duration-300
      bg-white/80 dark:bg-gray-700/80 w-10 h-10 flex items-center justify-center
    "
            >
              <FiArrowLeft />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={nextCard}
              className="
      absolute right-0 top-1/2 -translate-y-1/2
      opacity-0 group-hover:opacity-100
      transition duration-300
      bg-white/80 dark:bg-gray-700/80 w-10 h-10 flex items-center justify-center
    "
            >
              <FiArrowRight />
            </button>

            {/* PLUS + LABEL */}
            <div
              className="
    absolute bottom-0 right-0 flex items-center overflow-hidden group
  "
            >
              <button className="expand-text bg-white dark:bg-gray-800 dark:text-gray-300 cursor-pointer">View Project</button>
              <button className="expand-btn bg-white dark:bg-gray-800 dark:text-white">+</button>
            </div>
          </div>
        }
      />
    </div>
  );
}
