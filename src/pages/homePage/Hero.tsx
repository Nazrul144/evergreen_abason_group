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
        className="relative bg-cover bg-center bg-no-repeat lg:grid h-[700px] lg:place-content-center"
        style={{ backgroundImage: "url('Hero_Image/banner.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative mx-auto lg:w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="lg:max-w-prose text-left lg:mt-0 mt-32">
            <h1
              className={`text-4xl sm:text-8xl font-semibold text-white ${inter.className}`}
            >
              <span className="whitespace-nowrap">Build. Invest.</span> <br />
              <span className="text-white drop-shadow-lg">Succeed.</span>
            </h1>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <Link
                className="group inline-block rounded border border-gray-200 px-5 py-3 font-medium text-white shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-colors"
                href="#"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute left-0 -bottom-1 block h-[1px] w-0 bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-1] right-0 bg-white p-10 w-full lg:w-[600px]">
          <h3 className="text-3xl font-semibold text-gray-900">
            Let&apos;s work
          </h3>
          <h3>together</h3>
          <div className="mt-4">
            <span className="block w-10 h-[1px] bg-green-500"></span>
          </div>

          <Link
            href="/contact"
            className="group mt-4 inline-block text-gray-600 hover:text-gray-900 transition-colors"
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
