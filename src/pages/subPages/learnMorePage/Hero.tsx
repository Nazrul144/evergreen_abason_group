import { Anton } from "next/font/google";
import Image from "next/image";


const anton = Anton({
  subsets: ['latin'],
  weight: ['400'], // Anton only has one weight
  variable: '--font-anton',
  display: 'swap',
}); 
const Hero = () => {
  return (
    <div>
      <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">
          <div>
            <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
              A bold direction
              <span className="h-[1px] w-10 bg-green-500"></span>
            </p>

            <h2
              className="
              text-5xl md:text-6xl font-bold mt-3
              text-transparent bg-clip-text
              bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600
            "
            >
              Vision
            </h2>
          </div>

          <p className="mt-6 md:mt-0 max-w-md text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-justify">
            Our vision is to lead the way in sustainable innovation, creating solutions that harmonize technology, community, and
            the environment. We strive to design and build a future where every project contributes to a greener, smarter, and
            more connected world. Through creativity, collaboration, and unwavering commitment, we turn ambitious ideas into
            tangible progress, inspiring positive change for generations to come.
          </p>
        </div>
      </div>

 
      <div className="relative w-full h-[550px]">

  <Image
    src="/Learn_More/image1.jpg"
    alt="bannerImage"
    fill
    className="object-cover"
  />

 
  <div className="absolute inset-0 bg-black/40 bg-opacity-40"></div>

  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className={`${anton.className} text-5xl font-black text-white`}>Explore our journey towards a sustainable future.</h1>
  </div>
</div>

    </div>
  );
};

export default Hero;
