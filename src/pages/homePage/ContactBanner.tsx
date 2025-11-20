import Image from "next/image";
import Link from "next/link";

const ContactBanner = () => {
  return (
    <section className="relative w-full h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden">
      {/* Background Image */}
      <Image src="/ContactBanner/banner.jpg" alt="Contact Banner" fill className="object-cover" />

      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>

      <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-lg space-y-6">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight dark:text-gray-300">
            We&rsquo;d love to hear <br /> from you
          </h2>

          {/* Button */}
          <button
            className="
              bg-green-600 text-white px-8 py-3 rounded-md 
              hover:bg-green-700 transition relative group 
              w-fit
            "
          >
            <Link href={"/contact"}
              className="
                relative
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[1px] after:w-0 after:bg-white after:transition-all
                after:duration-300 group-hover:after:w-full
              "
            >
              BUILD  A  PROJECT  WITH  US

            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
