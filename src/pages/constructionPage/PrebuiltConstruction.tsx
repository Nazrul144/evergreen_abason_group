"use client";

import Image from "next/image";
import Link from "next/link";

const PrebuiltConstruction = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-300 overflow-x-hidden">
      {/* Header Section */}
      <div className="lg:px-44 md:px-10 px-4 lg:mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
              Services
              <span className="h-px w-10 bg-green-500 mt-1"></span>
            </p>
            <h2 className=" text-2xl lg:text-5xl sm:text-4xl md:text-5xl font-bold mt-3 text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-sky-400 to-blue-600">
              Prebuilt Construction
            </h2>
          </div>

          <p className="mt-6 md:mt-0 max-w-md text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Experience fast, durable, and cost-efficient prebuilt construction solutions designed for modern living and commercial excellence. Our structures are engineered for long-term stability and elegant functionality.
          </p>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full mt-10">
        <Image
          src="/PreBuilt/image1.jpg"
          width={1600}
          height={900}
          alt="banner_image"
          className="w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
        />
      </div>

      {/* Section: Features */}
      <section className="lg:px-44 md:px-10 mt-20 mb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="lg:text-2xl sm:text-3xl md:text-3xl font-bold leading-snug">
              Faster Construction, Zero Compromise on Quality
            </h2>
            <p className="text-sm sm:text-base mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Our prebuilt construction model ensures quick installation, minimized labor requirements, and superior precision. Each unit is crafted with high-quality materials and modern engineering to create durable, sustainable, and visually inspiring spaces.
            </p>
            <Link href="/contact">
              <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 duration-200">
                Get Consultation
              </button>
            </Link>
          </div>

          <Image
            src="/Services_Image4Group/construction1.jpg"
            width={650}
            height={650}
            alt="prebuilt-image"
            className="rounded-xl shadow-lg object-cover w-full h-[300px] sm:h-[420px]"
          />
        </div>
      </section>

      {/* Section: Why Prebuilt */}
      <section className="lg:px-44 md:px-10 my-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold">Why Prebuilt Construction?</h2>
          <p className="text-sm sm:text-base mt-3 text-gray-600 dark:text-gray-300">
            Prebuilt construction is the future of smart infrastructure. It offers superior durability, lower costs, and unmatched efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            { title: "Cost Effective", desc: "Lower material waste, controlled manufacturing, and reduced labor make it highly economical." },
            { title: "Faster Delivery", desc: "Factory-built precision allows quick assembly on-site, saving months." },
            { title: "Eco-Friendly", desc: "Reduced carbon footprint and efficient material usage support green development." },
            { title: "Superior Strength", desc: "High-grade prefabricated technology ensures long-lasting durability." },
          ].map((item, idx) => (
            <div key={idx} className="border dark:border-gray-700 p-6 rounded-xl hover:shadow-lg duration-300">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Modern Homes & Projects */}
      <section className="lg:px-44 md:px-10 my-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/PreBuilt/image2.jpg"
            width={700}
            height={700}
            alt="prebuilt-concept"
            className="rounded-xl shadow-lg object-cover w-full h-[300px] sm:h-[450px]"
          />
          <div>
            <h2 className="lg:text-2xl sm:text-3xl md:text-3xl font-bold">
              Built for Modern Homes & Commercial Projects
            </h2>
            <p className="text-sm sm:text-base mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether you&apos;re developing a residential unit, office, warehouse, or hospitality space — our prebuilt solution adapts to your needs. Strong foundations, customizable layouts, and weather-resistant engineering ensure flawless results.
            </p>
            <ul className="text-sm sm:text-base mt-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>• Fully customizable interior & exterior</li>
              <li>• Long-lasting steel and concrete materials</li>
              <li>• Fire-resistant & weather-proof technology</li>
              <li>• Modern design & smart structural planning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lg:px-44 md:px-10 mt-20 mb-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Start Your Prebuilt Project Today</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Evergreen Abason Group is committed to providing innovative, sustainable, and affordable construction solutions. Let us help you build your next property with unmatched efficiency and quality.
        </p>
        <Link href="/contact">
          <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 duration-200 cursor-pointer">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default PrebuiltConstruction;
