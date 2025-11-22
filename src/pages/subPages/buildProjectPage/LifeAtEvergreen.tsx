import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const LifeAtEvergreen = () => {
  return (
    <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
      <div className="lg:flex lg:justify-between lg:items-start gap-8">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold">
            Life at <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 text-transparent bg-clip-text">
              Evergreen Abason Group
            </span>
          </h1>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-gray-800 text-sm dark:text-gray-300 text-justify">
            When you are part of Evergreen Abason Group, you feel personally committed to delivering exceptional service across
            the diverse clients and industries we serve. This stems from our shared vision and dedication a mindset that truly
            sets us apart. At Evergreen Abason Group, we foster a family-oriented culture, supporting and inspiring our team
            members to reach their full potential. Together, we prioritize teamwork, quality, and integrity in everything we do.
          </p>
        </div>
      </div>
      {/* Banner Image */}
      <div className="w-full mt-10">
        <Image
          src="/Build_Project/banner2.jpg"
          width={1600}
          height={900}
          alt="banner_image"
          className="w-full h-[350px] md:h-[450px] lg:h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default LifeAtEvergreen;
