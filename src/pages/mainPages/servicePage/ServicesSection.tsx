import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
            Our Services
            <span className="h-[1px] w-10 bg-green-500"></span>
          </p>

          <h2
            className="
    text-5xl md:text-6xl font-bold mt-3
    text-transparent bg-clip-text
    bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600
  "
          >
            What Do We Deliver?
          </h2>
        </div>

        <p className="mt-6 md:mt-0 max-w-md text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          Evergreen Abason Group provides reliable construction services with a focus on safety, structural quality, and long-term
          value. Our team works with precision and dedication to deliver outstanding results across every project we handle.
        </p>
      </div>

      <div className="mt-16 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/40 rounded-xl overflow-hidden shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 lg:p-14">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-snug">
              Building Sustainable & Modern Living Spaces for the Future
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              From residential buildings to commercial infrastructure, Evergreen Abason Group follows advanced engineering methods
              and sustainable construction practices. Every project we undertake is designed to provide durability, efficiency,
              and long-term comfort to our clients.
            </p>

            <Link
              href="/explore_service"
              className="inline-block mt-8 font-semibold text-sm 
        text-transparent bg-clip-text bg-gradient-to-r
        from-green-500 to-emerald-700 hover:opacity-80 transition"
            >
              EXPLORE OUR SERVICES →
            </Link>
          </div>

          <div className="relative h-[350px] lg:h-full">
            <Image
              width={800}
              height={800}
              src="/Service_Images/serviceSideBanner.jpg"
              alt="Service Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
