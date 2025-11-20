import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const WorkTogetherBanner: FC = () => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
    
      <Image
        src="/NewsPage/workTogetherBanner.jpg" 
        alt="Banner Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-white text-4xl lg:text-6xl leading-tight font-semibold mb-10">
          Ready to <br /> work together?
        </h2>

        {/* Buttons */}
        <div className="flex justify-center gap-2 lg:gap-4">
          <Link
            href="#"
            className="relative group inline-block lg:px-8 py-4 bg-[#1a1a1a] text-white 
  text-xs tracking-wider font-semibold border border-[#292929] 
  hover:bg-[#222] transition"
          >
            <span className="relative">
              BUILD A PROJECT WITH US
              {/* underline */}
              <span
                className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white 
      transition-all duration-300 group-hover:w-full"
              />
            </span>
          </Link>

          <Link
            href="#"
            className="relative group inline-block  lg:px-8 py-4 bg-[#1a1a1a] text-white 
  text-xs tracking-wider font-semibold border border-[#292929] 
  hover:bg-[#222] transition "
          >
            <span className="relative">
              BUILD A CAREER WITH US
              {/* underline */}
              <span
                className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white 
      transition-all duration-300 group-hover:w-full"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkTogetherBanner;
