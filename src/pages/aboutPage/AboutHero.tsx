import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="mt-20 dark:bg-gray-900">
      {/* Top Section */}
      <section className="lg:px-44 md:px-10 px-6 lg:px-0">
        <div className="flex items-center space-x-2">
          <h3 className="text-[#6A7282] dark:text-gray-300">Projects</h3>
          <span className="w-12 h-[1px] bg-green-500"></span>
        </div>

        {/* About Row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-20 mt-4">
          <div className="md:basis-[30%]">
            <h3 className="text-green-500 text-4xl font-semibold">About us</h3>
          </div>

          <div className="md:basis-[70%]">
            <p className="text-[#4A5565] dark:text-gray-400 leading-relaxed">
              From four cities, with a team of industry professionals, we <br /> work for businesses all over the world.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="w-full mt-10">
        <Image
          src="/AboutBanner/aboutBanner.jpg"
          width={1600}
          height={900}
          alt="banner_image"
          className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default AboutHero;
