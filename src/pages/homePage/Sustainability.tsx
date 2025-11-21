import Image from "next/image";
import Link from "next/link";

const Sustainability = () => {
  return (
    <section className="w-full px-6 py-16 md:py-24 flex flex-col md:flex-row items-center lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900 justify-center lg:mb-24">
      {/* LEFT — Images */}
      <div className="relative w-full lg:ml-24 md:w-1/2 flex justify-center md:justify-start ">
        {/* Main Image */}
        <div className="w-60 h-60 sm:w-72 sm:h-72 relative">
          <Image
            src="/Sustainability/1.png"
            alt="sustainable-image-1"
            fill
            className="object-cover rounded-md shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          />
        </div>

        {/* Overlapping Image */}
        <div
          className="
            w-60 h-60 sm:w-72 sm:h-72 
            absolute 
            left-6 bottom-[-60px] 
            sm:left-[-50px] sm:bottom-[-80px] 
            lg:left-[100px] lg:bottom-[-170px]
          "
        >
          <Image
            src="/Sustainability/2.png"
            alt="sustainable-image-2"
            fill
            className="object-cover rounded-md shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          />
        </div>
      </div>

      {/* RIGHT — Text */}
      <div className="w-full md:w-1/2 mt-24 md:mt-0">
        <p className="text-sm uppercase text-gray-500 dark:text-gray-400 tracking-wide mb-3">
          Our way
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
          Sustainability
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
          Our Sustainable Construction Advisors (SCAs) provide sustainable
          construction expertise to our buildings, civil and industrial project
          teams. The SCAs work collaboratively with clients to develop
          cost-effective strategies to reduce the overall environmental impact
          of their projects.
        </p>

        <Link href="/sustainability">
          <button
            className="
    px-6 py-3 bg-green-600 text-white uppercase tracking-wide
    hover:bg-green-700 relative group transition rounded-sm cursor-pointer
  "
          >
            <span
              className="
      relative
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[1px] after:w-0 after:bg-green-500 after:transition-all after:duration-300
      group-hover:after:w-full
    "
            >
              Learn More
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Sustainability;
