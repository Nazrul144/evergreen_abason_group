"use client";

import Image from "next/image";
import { CheckCircle, Lightbulb, Repeat, Globe, Users } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    id: 1,
    title: "We have a vision for the future of construction",
    description:
      "Evergreen Abason Group envisions sustainable and smart urban landscapes, integrating green technology and cutting-edge architecture to redefine the construction industry.",
    icon: <Globe className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
  },
  {
    id: 2,
    title: "Innovative",
    description:
      "Our teams consistently explore innovative construction techniques, smart materials, and next-gen engineering solutions to deliver state-of-the-art projects.",
    icon: <Lightbulb className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
  },
  {
    id: 3,
    title: "Flexible",
    description:
      "We adapt to client needs and environmental challenges, offering tailored solutions without compromising sustainability or efficiency.",
    icon: <Repeat className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
  },
  {
    id: 4,
    title: "Sustainable Excellence",
    description:
      "Our commitment to eco-friendly materials, renewable energy, and low-carbon techniques ensures every project meets global sustainability standards.",
    icon: <CheckCircle className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
  },
  {
    id: 5,
    title: "Global Collaboration",
    description:
      "Evergreen Abason Group partners with international experts, local communities, and leading technology providers to deliver world-class construction solutions globally, ensuring every project meets the highest standards of quality and sustainability.",
    icon: <Users className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
  },
];

const ImageContentSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 dark:text-gray-300 py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-10">
        {/* Left Image Area */}
        <div className="lg:w-1/2 lg:sticky lg:top-24 flex flex-col gap-6">
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-56 xl:h-64">
            <Image
              src="/Learn_More/image2.jpg"
              alt="Demo 1"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-56 xl:h-64">
            <Image
              src="/Learn_More/image3.jpg"
              alt="Demo 2"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-56 xl:h-64">
            <Image
              src="/Learn_More/image4.jpg"
              alt="Demo 3"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:w-1/2 flex flex-col gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageContentSection;
