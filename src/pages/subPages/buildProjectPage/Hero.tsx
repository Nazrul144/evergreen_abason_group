import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Hero = () => {
  return (
    <div className="mt-20 dark:bg-gray-900 overflow-x-hidden">
      {/* Top Section */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-44">
        <div className="flex items-center space-x-2">
          <h3 className="text-sm sm:text-base text-[#6A7282] dark:text-gray-300">
            The future you want is within reach
          </h3>
          <span className="w-12 h-px bg-green-500"></span>
        </div>

        {/* About Row */}
        <div className="flex flex-col md:flex-row justify-between md:gap-8 lg:gap-20 mt-4">
          <div className="mb-6 md:mb-0">
            <h1
              className={`
                ${dancing.className}
                text-4xl sm:text-5xl md:text-6xl font-bold dark:text-green-300
              `}
            >
              Careers
              <span className="block mx-auto w-24 sm:w-32 md:w-40 h-1 bg-linear-to-r from-transparent via-black to-transparent mt-3 relative">
                <span className="absolute left-1/2 -top-2 -translate-x-1/2 w-3 h-3 rotate-45 bg-black"></span>
              </span>
            </h1>
          </div>

          <div>
            <p className="text-sm sm:text-base md:text-base text-[#4A5565] dark:text-gray-400 leading-relaxed">
              That&apos;s the mindset that fuels us. It shapes our close-knit,
              <br className="hidden sm:inline" />
              cooperative culture. It sparks our curiosity. And
              <br className="hidden sm:inline" /> it forms the basis for innovative ways of working.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="w-full mt-6 sm:mt-8 md:mt-10">
        <Image
          src="/Build_Project/banner1.jpg"
          width={1600}
          height={900}
          alt="banner_image"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
