"use client";

import Image from "next/image";
import { useState } from "react";


import {
  Building2,
  House,
  Hotel,
  Landmark,
  Factory,
  Wrench,
  Layers,
  Layers2,
  Home, 
  ShieldCheck,
  PenTool,
  Wallet
} from "lucide-react";

const services = [
  { name: "All", icon: Layers },
  { name: "Buildings", icon: Building2 },
  { name: "Residential", icon: House },
  { name: "Hospitality", icon: Hotel },
  { name: "Public Buildings", icon: Landmark },
  { name: "Heavy Industrial", icon: Factory },
  { name: "Renovation", icon: Wrench }
];


const service = [
    {
      title: "Residential Buildings",
      icon: <House className="w-6 h-6 text-emerald-500" />,
      description:
        "Our residential construction services focus on delivering modern, functional, and long-lasting living spaces. We design and construct apartments, duplexes, luxury homes, and community housing with a commitment to safety, structural integrity, and aesthetic excellence. Every project is planned around natural ventilation, intelligent space optimization, and sustainable engineering methods. From foundations to finishing touches, we ensure residents enjoy long-term comfort, durability, and a high-quality lifestyle.",
    },
    {
      title: "Commercial Buildings",
      icon: <Building2 className="w-6 h-6 text-emerald-500" />,
      description:
        "Our commercial infrastructure projects are built to support business productivity, foot traffic efficiency, and long-term operational performance. Whether it is a corporate headquarters, retail mall, financial building, or mixed-use complex, we combine innovative design with advanced construction techniques. We integrate energy-efficient systems, durable materials, and flexible interior layouts that allow businesses to scale effectively. Each structure is engineered to meet strict industry standards while maintaining aesthetic appeal.",
    },
    {
      title: "Public Infrastructure",
      icon: <Landmark className="w-6 h-6 text-emerald-500" />,
      description:
        "We develop essential public infrastructure such as hospitals, schools, administrative offices, transportation facilities, and government complexes. These structures are built with a strong emphasis on safety, accessibility, environmental sustainability, and long-term performance. Our engineering approach ensures reliability during emergencies, resilience against environmental challenges, and efficient utility management. These public spaces are constructed to serve communities for generations.",
    },
    {
      title: "Hospitality Projects",
      icon: <Hotel className="w-6 h-6 text-emerald-500" />,
      description:
        "Our hospitality projects include hotels, resorts, restaurants, and recreation facilities designed with superior craftsmanship and elegant architectural planning. We focus on creating inviting environments that enhance guest comfort and operational efficiency. From luxurious interiors to noise-resistant structures and advanced facility management systems, each project is tailored to meet international hospitality standards. We ensure spaces are functional for staff and memorable for guests.",
    },
    {
      title: "Industrial Construction",
      icon: <Factory className="w-6 h-6 text-emerald-500" />,
      description:
        "Industrial construction requires high-strength frameworks, advanced safety systems, and precise planning. We build warehouses, factories, processing plants, storage facilities, and production units designed to support heavy machinery, large-scale operations, and continuous workflow. Our structures are engineered to withstand intense load capacity, harsh environments, and long-term industrial use. We prioritize smart layout planning, ease of movement, and strong compliance with industrial regulations.",
    },
    {
      title: "Renovation & Restoration",
      icon: <Wrench className="w-6 h-6 text-emerald-500" />,
      description:
        "Our renovation and restoration services help breathe new life into aging, outdated, or damaged structures without compromising their core identity. We upgrade electrical and plumbing systems, reinforce foundations, modernize interiors, and enhance structural longevity. Whether restoring historical buildings or improving modern commercial spaces, we ensure the perfect balance between preservation and innovation. The result is a refreshed, safer, more efficient structure ready for years of new use.",
    },
  ];

const ExploreServices = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900 mb-20">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
            Our Services
            <span className="h-[1px] w-10 bg-green-500"></span>
          </p>

          <h2
            className="
              text-5xl md:text-3xl font-bold mt-3
              text-transparent bg-clip-text
              bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600
            "
          >
            Let&apos;s Explore our services
          </h2>
        </div>

        <p className="mt-6 md:mt-0 max-w-md text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          Evergreen Abason Group provides reliable construction services with a focus on safety, structural quality, and long-term
          value. Our experienced engineers and team ensure precision in every project we deliver.
        </p>
      </div>


      <div className="mt-16 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/40 rounded-xl overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-2">


        <div className="relative h-[350px] lg:h-screen lg:sticky lg:top-20 rounded-xl overflow-hidden shadow-md">
          <Image
            width={900}
            height={900}
            src="/Service_Images/sideImage2.jpg"
            alt="Service Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>


        <div className="p-10 lg:p-14 space-y-16 max-h-screen overflow-y-auto">

        
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-snug">
              Building Sustainable & Modern Living Spaces for the Future
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              From residential buildings to commercial infrastructure, Evergreen Abason Group ensures long-lasting engineering
              excellence. Our commitment to durable construction, innovative design, and precise project execution makes us a
              reliable partner in shaping modern communities and future-ready structures.
            </p>
          </div>


          {service.map((service, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-3">
                {service.icon}
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h4>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-justify">{service.description}</p>

              <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-700 mt-4"></div>
            </div>
          ))}
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto mt-20">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Specialized Service Categories</h3>

        <div className="flex gap-4 flex-wrap">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.name}
                onClick={() => setActive(s.name)}
                className={`px-4 py-2 flex items-center gap-2 border rounded-full transition 
                ${
                  active === s.name
                    ? "bg-green-600 text-white border-green-600"
                    : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                <Icon size={18} />
                {s.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/Service_Images/construction1.jpg"
            width={500}
            height={500}
            alt="Construction Work"
            className="rounded-xl shadow object-cover h-64 w-full"
          />

          <Image
            src="/Service_Images/construction2.jpg"
            width={500}
            height={500}
            alt="Building Development"
            className="rounded-xl shadow object-cover h-64 w-full mt-10"
          />
        </div>

        <div>
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            Excellence in Every Sector We Build
          </h3>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            No matter the scale or complexity, Evergreen Abason Group delivers premium construction services tailored to your
            vision. Our team handles every project with innovation, safety, and long-term reliability.
          </p>

          <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300 text-sm">

            <li className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-500" />
              Safe & Sustainable Construction Methods
            </li>

            <li className="flex items-center gap-2">
              <PenTool size={18} className="text-green-500" />
              Modern Architectural Planning
            </li>

            <li className="flex items-center gap-2">
              <Layers2 size={18} className="text-green-500" />
              Quality Materials & Structural Durability
            </li>

            <li className="flex items-center gap-2">
              <Wallet size={18} className="text-green-500" />
              Cost-effective Engineering Solutions
            </li>

          </ul>
        </div>
      </div>

    </section>
  );
};

export default ExploreServices;
