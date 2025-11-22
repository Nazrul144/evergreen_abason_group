import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Hero = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat lg:grid h-[800px] lg:place-content-center"
        style={{ backgroundImage: "url('Hero_Image/banner.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/60"></div>

        <div className="relative mx-auto lg:w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="lg:max-w-prose text-left lg:mt-0 mt-32">
            <h1
              className={`text-4xl sm:text-8xl font-semibold text-white drop-shadow-xl ${inter.className}`}
            >
              <span className="whitespace-nowrap">Build. Invest.</span> <br />
              <span className="text-white drop-shadow-lg inline-block">
                {"Succeed.".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block animate-wave"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <Link
                className="group inline-block rounded border border-gray-200 dark:border-gray-500 px-5 py-3 font-medium text-white shadow-sm  dark:bg-transparent dark:text-white transition-colors"
                href="learn_more"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute left-0 -bottom-1 block h-[1px] w-0 bg-green-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-1] right-0 bg-white dark:bg-gray-900 p-10 w-full lg:w-[600px]  dark:shadow-black/20">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Let&apos;s work
          </h3>
          <h3 className="text-gray-800 dark:text-gray-300">together</h3>
          <div className="mt-4">
            <span className="block w-10 h-[1px] bg-green-500"></span>
          </div>

          <Link
            href="/contact"
            className="group mt-4 inline-block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <span className="relative">
              Contact us
              <span className="absolute left-0 -bottom-1 block h-[1px] w-0 bg-green-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
