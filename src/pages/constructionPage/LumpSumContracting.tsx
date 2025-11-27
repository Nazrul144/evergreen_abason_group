"use client";

import Image from "next/image";
import Link from "next/link";

const LumpSumContracting = () => {
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

            <h2 className="text-2xl lg:text-3xl sm:text-4xl md:text-3xl font-bold mt-2 text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-sky-400 to-blue-600">
              Lump-Sum Contracting
            </h2>
          </div>

          <p className="mt-4 md:mt-0 max-w-md text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Our Lump-Sum Contracting services provide a fixed-price approach for your construction project, ensuring cost certainty, clear scope, and timely delivery with professional project management.
          </p>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full mt-10">
        <Image
          src="/LumpSun/image4.jpg"
          width={1600}
          height={900}
          alt="banner_image"
          className="w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
        />
      </div>

      {/* Fixed-Price Contracts Section */}
      <section className="lg:px-44 md:px-10 mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="lg:text-2xl sm:text-3xl md:text-3xl font-bold leading-snug">
              Fixed-Price Contracts for Full Transparency
            </h2>
            <p className="text-sm sm:text-base mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Lump-sum contracting ensures a single fixed price for your entire project. No hidden costs, no surprises — just clarity and confidence.
            </p>
          </div>

          <Image
            src="/LumpSun/image1.jpg"
            width={650}
            height={650}
            alt="fixed-price-contract"
            className="rounded-xl shadow-lg object-cover w-full h-[300px] sm:h-[420px]"
          />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="lg:px-44 md:px-10 my-20 text-center">
        <h2 className="lg:text-2xl sm:text-3xl md:text-3xl font-bold">Why Choose Lump-Sum Contracting?</h2>
        <p className="text-sm sm:text-base mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Provides financial certainty, clear scope, and accountability for all parties involved.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            { title: "Cost Certainty", desc: "You know the total project cost upfront." },
            { title: "Reduced Risks", desc: "Minimizes financial and project risks for the client." },
            { title: "Simplified Management", desc: "Single contract simplifies coordination and reporting." },
            { title: "Accountability", desc: "Contractor is responsible for completing the project within the agreed price." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clear Project Scope Section */}
      <section className="lg:px-44 md:px-10 my-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/LumpSun/image2.jpg"
            width={700}
            height={700}
            alt="project-scope"
            className="rounded-xl shadow-lg object-cover w-full h-[300px] sm:h-[450px]"
          />
          <div>
            <h2 className="lg:text-2xl sm:text-3xl md:text-3xl font-bold">Clear Project Scope</h2>
            <p className="text-sm sm:text-base mt-4 text-gray-600 dark:text-gray-300">
              Every aspect of your project is defined in advance to avoid ambiguity, change orders, and delays.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="lg:px-44 md:px-10 my-24 text-center">
        <h2 className="lg:text-2xl sm:text-3xl md:text-3xl font-bold">Industries We Serve</h2>
        <p className="text-sm sm:text-base mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our lump-sum contracting services cater to a variety of sectors.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {["Residential", "Commercial", "Industrial", "Infrastructure"].map((industry, idx) => (
            <div key={idx} className="border dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg">{industry}</div>
          ))}
        </div>
      </section>

      {/* Project Timeline Section */}
      <section className="lg:px-44 md:px-10 my-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="lg:text-2xl sm:text-3xl md:text-3xl font-bold">Project Timeline Management</h2>
          <p className="text-sm sm:text-base mt-4 text-gray-600 dark:text-gray-300">
            Lump-sum contracts enforce strict timelines, ensuring on-time project completion.
          </p>
        </div>
        <Image
          src="/LumpSun/image3.jpg"
          width={700}
          height={700}
          alt="timeline"
          className="rounded-xl shadow-lg object-cover w-full h-[300px] sm:h-[450px]"
        />
      </section>

      {/* Cost Savings Section */}
      <section className="lg:px-44 md:px-10 my-24 text-center">
        <h2 className="lg:text-2xl sm:text-3xl md:text-3xl font-bold">Cost Savings & Efficiency</h2>
        <p className="text-sm sm:text-base mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Predefined costs and scope reduce unexpected expenses and resource waste.
        </p>
      </section>

      {/* Quality Assurance Section */}
      <section className="lg:px-44 md:px-10 my-24 grid lg:grid-cols-2 gap-12 items-center">
        <Image
          src="/LumpSun/image5.jpg"
          width={700}
          height={700}
          alt="quality-assurance"
          className="rounded-xl shadow-lg object-cover w-full h-[300px] sm:h-[450px]"
        />
        <div>
          <h2 className="lg:text-2xl sm:text-3xl md:text-3xl font-bold">Quality Assurance</h2>
          <p className="text-sm sm:text-base mt-4 text-gray-600 dark:text-gray-300">
            Lump-sum contracting emphasizes consistent quality control at every stage of the project.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lg:px-44 md:px-10 mt-20 mb-24 text-center">
        <h2 className="lg:text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Start Your Lump-Sum Project Today</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Evergreen Abason Group ensures transparent, fixed-price contracting with expert execution. Contact us to get started.
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

export default LumpSumContracting;
