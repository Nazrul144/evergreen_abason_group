
import Image from "next/image";

const LifeAtEvergreen = () => {
  return (
    <div className="overflow-x-hidden lg:px-44 md:px-10 px-4 lg:mt-20 dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
            Life at <br />
            <span className="bg-linear-to-r from-green-400 via-emerald-500 to-green-700 text-transparent bg-clip-text">
              Evergreen Abason Group
            </span>
          </h1>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-sm sm:text-base md:text-base text-gray-800 dark:text-gray-300 text-justify leading-relaxed">
            When you are part of Evergreen Abason Group, you feel personally committed to delivering exceptional service across
            the diverse clients and industries we serve. This stems from our shared vision and dedication—a mindset that truly
            sets us apart. At Evergreen Abason Group, we foster a family-oriented culture, supporting and inspiring our team
            members to reach their full potential. Together, we prioritize teamwork, quality, and integrity in everything we do.
          </p>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full mt-6 sm:mt-8 md:mt-10">
        <Image
          src="/Build_Project/banner2.jpg"
          width={1600}
          height={900}
          alt="banner_image"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default LifeAtEvergreen;
