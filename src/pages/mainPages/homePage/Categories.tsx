import { Building2, ShieldCheck, Target } from "lucide-react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Categories = () => {
  return (
    <div className="mt-20 lg:px-44 md:px-10 px-4 dark:bg-gray-900 overflow-hidden">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-4 max-w-full sm:max-w-sm mx-auto break-words"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          >
            <div className="p-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              {item.icon}
            </div>

            <h4
              className={`text-lg font-semibold text-[#6A7282] dark:text-gray-100 ${inter.className}`}
            >
              {item.title}
            </h4>
            <div className="w-10 h-[0.25px] bg-green-500 rounded-full" />

            <p className="text-[#6A7282] dark:text-gray-300 leading-relaxed break-words">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

const highlights = [
  {
    title: "Who We Are",
    icon: <Building2 className="w-8 h-8 text-green-500" />,
    text: "Evergreen Abason Group is a nationally recognized leader in the construction industry. With decades of experience delivering innovative and structurally sound projects, we are driven by a passion for excellence and a commitment to redefining the standards of modern construction practices.",
  },
  {
    title: "Our Mission",
    icon: <Target className="w-8 h-8 text-green-500" />,
    text: "Our mission is to craft outstanding spaces that inspire. We believe in challenging the status quo by implementing sustainable solutions, building with precision, and ensuring unmatched client satisfaction throughout every stage of the project lifecycle.",
  },
  {
    title: "Core Values",
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    text: "Integrity, innovation, and dedication are at the heart of everything we do. We take pride in our commitment to safety, transparency, and collaboration ensuring every project exceeds expectations while honoring our responsibility to the environment and community.",
  },
];
