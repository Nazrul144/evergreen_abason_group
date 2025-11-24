"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
interface WorkDetailsProps {
  title: string;
  description: string;
  image: string;
  primaryBtn?: { label: string; href: string };
  secondaryBtn?: { label: string; href: string };
}

const WorkDetails: React.FC<WorkDetailsProps> = ({
  title,
  description,
  image,
  primaryBtn,
  secondaryBtn,
}) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 px-4 md:px-10 lg:px-40 py-10">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Image */}
        <motion.div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "keyframes",
          stiffness: 60,
          duration: 1,
        }}>
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div className="w-full lg:w-1/2 flex flex-col gap-6"
         initial={{ x: 100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{
           delay: 0.2,
           type: "keyframes",
           stiffness: 60,
           duration: 1,
         }}
        >
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{description}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            {primaryBtn && (
              <Link
                href={primaryBtn.href}
                className="px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
              >
                {primaryBtn.label}
              </Link>
            )}
            {secondaryBtn && (
              <Link
                href={secondaryBtn.href}
                className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition"
              >
                {secondaryBtn.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkDetails;
