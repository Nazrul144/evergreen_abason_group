"use client";

import WhatsAppButton from "@/components/WhatsappButton/WhatsAppButton";
import { MapPin } from "lucide-react";
import Image from "next/image";

export interface ExtraPhoto {
  id: number;
  image: string;
}

export interface Project {
  id: number;
  category: number;
  category_name: string;
  title: string;
  description: string;
  builder_name: string;
  location: string;
  land_size: string;
  total_flat: number;
  status: string;
  profile_picture: string;
  cover_photo: string;
  extra_photos: ExtraPhoto[];
}

interface ProjectDetailsProps {
  work: Project; // Renamed from 'work' to match your prop name
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ work }) => {
  if (!work) {
    return (
      <div className="text-center py-20 text-red-500 text-2xl">
        Project not found
      </div>
    );
  }

  console.log("Project Details:", work);

  return (
    <div className="overflow-x-hidden dark:bg-gray-900">
      {/* Banner - Using real cover photo from backend */}
      <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[550px]">
        <Image
          src={work.cover_photo}
          alt={`${work.title} - Cover`}
          fill
          unoptimized // Remove after fixing next.config.js
          className="object-cover"
          priority
        />
      </div>

      {/* Section 1 */}
      <section className="lg:px-44 md:px-10 px-4 lg:mt-20">
        <div className="lg:flex gap-12 flex-col lg:flex-row">
          {/* LEFT */}
          <div className="lg:w-1/2 w-full">
            <h3 className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
              📐 Land Size: {work.land_size}
            </h3>
            <h3 className="text-gray-700 dark:text-gray-300 mt-4 sm:text-xl mb-4">
              🏢 Total Flats: {work.total_flat} Units
            </h3>
            <h3 className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl capitalize">
              📊 Status: {work.status}
            </h3>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                <h3 className="text-gray-400 text-sm sm:text-base">Location</h3>
              </div>
              <p className="text-base sm:text-lg border-l-2 border-green-500 pl-3 mt-1">
                {work.location}
              </p>
            </div>

            {/* Profile Picture */}
            <div className="mt-8 lg:mt-16 h-[250px] sm:h-[350px] lg:h-[450px] w-full rounded-md overflow-hidden">
              <Image
                src={work.profile_picture}
                alt={`${work.title} - Profile view`}
                width={600}
                height={600}
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
              {work.title}
            </h1>

            <p className="text-justify mt-6 mb-8 text-base sm:text-lg text-gray-600 dark:text-gray-300">
              {work.description}
            </p>

            {/* Cover Photo Again (or secondary image) */}
            <div className="mt-8 lg:mt-16 h-[250px] sm:h-[350px] lg:h-[450px] w-full rounded-md overflow-hidden">
              <Image
                src={work.cover_photo}
                alt={`${work.title} - Main view`}
                width={600}
                height={600}
                unoptimized
                className="w-full h-full object-cover"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 italic">
                {work.title}  A landmark project by {work.builder_name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Full Width Description Image */}
      <section className="lg:px-44 md:px-10 px-4 lg:mt-20">
        <div className="mt-8 sm:mt-12">
          <h3 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {work.description}
          </h3>

          <div className="mt-8 w-full h-[300px] sm:h-[450px] lg:h-[650px] relative rounded-md overflow-hidden">
            <Image
              src={work.profile_picture}
              alt="Project overview"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </section>

      
      <section className="lg:px-44 md:px-10 px-4 lg:mt-20 pb-20">
        <div className="lg:flex gap-12 flex-col lg:flex-row">

          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {work.extra_photos.slice(0, 4).map((photo) => (
                <div key={photo.id} className="h-48 sm:h-64 rounded-md overflow-hidden">
                  <Image
                    src={photo.image}
                    alt="Gallery image"
                    width={400}
                    height={400}
                    unoptimized
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Project Highlights</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-gray-400 text-sm sm:text-base">Builder</h3>
                <p className="text-lg sm:text-xl font-medium">{work.builder_name}</p>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm sm:text-base">Category</h3>
                <p className="text-lg sm:text-xl font-medium capitalize">{work.category_name}</p>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm sm:text-base">Land Size</h3>
                <p className="text-lg sm:text-xl">{work.land_size}</p>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm sm:text-base">Total Units</h3>
                <p className="text-lg sm:text-xl">{work.total_flat} Flats</p>
              </div>

              <div className="sm:col-span-2">
                <h3 className="text-gray-400 text-sm sm:text-base mb-3">Let&apos;s Connect</h3>
                <WhatsAppButton
                  phone="8801758752528"
                  message={`Hi, I'm interested in the "${work.title}" project.`}
                  className="text-xl sm:text-xl font-medium text-green-600 hover:text-green-700"
                />
              </div>

              <div className="sm:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <h3 className="text-gray-400 text-sm sm:text-base">Location</h3>
                </div>
                <p className="text-lg border-l-2 border-green-500 pl-3">
                  {work.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;