"use client";

import Image from "next/image";
import Link from "next/link";

const LumpSumContracting = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-300">

      
      <div className="lg:px-44 md:px-10 lg:mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
              Services
              <span className="h-px w-10 bg-green-500 mt-1"></span>
            </p>

            <h2
              className="
                text-3xl md:text-3xl font-bold 
                text-transparent bg-clip-text
                bg-linear-to-r from-emerald-400 via-sky-400 to-blue-600
              "
            >
              Lump-Sum Contracting
            </h2>
          </div>

          <p className="mt-6 md:mt-0 max-w-md text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Our Lump-Sum Contracting services provide a fixed-price approach for
            your construction project, ensuring cost certainty, clear scope, and
            timely delivery with professional project management.
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
          className="w-full h-[550px] md:h-[450px] lg:h-[600px] object-cover"
        />
      </div>


      <section className="lg:px-44 md:px-10 mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold leading-snug">
              Fixed-Price Contracts for Full Transparency
            </h2>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Lump-sum contracting ensures a single fixed price for your entire
              project. No hidden costs, no surprises — just clarity and confidence.
            </p>
          </div>

          <Image
            src="/LumpSun/image1.jpg"
            width={650}
            height={650}
            alt="fixed-price-contract"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />
        </div>
      </section>

      <section className="lg:px-44 md:px-10 my-20 text-center">
        <h2 className="text-3xl font-bold">Why Choose Lump-Sum Contracting?</h2>
        <p className="text-sm mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Provides financial certainty, clear scope, and accountability for all parties involved.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold">Cost Certainty</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              You know the total project cost upfront.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold">Reduced Risks</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Minimizes financial and project risks for the client.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold">Simplified Management</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Single contract simplifies coordination and reporting.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold">Accountability</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Contractor is responsible for completing the project within the agreed price.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:px-44 md:px-10 my-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/LumpSun/image2.jpg"
            width={700}
            height={700}
            alt="project-scope"
            className="rounded-xl shadow-lg object-cover w-full h-[450px]"
          />

          <div>
            <h2 className="text-3xl font-bold">Clear Project Scope</h2>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-300">
              Every aspect of your project is defined in advance to avoid
              ambiguity, change orders, and delays.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:px-44 md:px-10 my-24 text-center">
        <h2 className="text-3xl font-bold">Industries We Serve</h2>
        <p className="text-sm mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our lump-sum contracting services cater to a variety of sectors.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="border dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg">Residential</div>
          <div className="border dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg">Commercial</div>
          <div className="border dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg">Industrial</div>
          <div className="border dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg">Infrastructure</div>
        </div>
      </section>

   
      <section className="lg:px-44 md:px-10 my-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Project Timeline Management</h2>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-300">
              Lump-sum contracts enforce strict timelines, ensuring on-time project completion.
            </p>
          </div>

          <Image
            src="/LumpSun/image3.jpg"
            width={700}
            height={700}
            alt="timeline"
            className="rounded-xl shadow-lg object-cover w-full h-[450px]"
          />
        </div>
      </section>

     
      <section className="lg:px-44 md:px-10 my-24 text-center">
        <h2 className="text-3xl font-bold">Cost Savings & Efficiency</h2>
        <p className="text-sm mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Predefined costs and scope reduce unexpected expenses and resource waste.
        </p>
      </section>


      <section className="lg:px-44 md:px-10 my-24 grid lg:grid-cols-2 gap-12 items-center">
        <Image
          src="/LumpSun/image5.jpg"
          width={700}
          height={700}
          alt="quality-assurance"
          className="rounded-xl shadow-lg object-cover w-full h-[450px]"
        />

        <div>
          <h2 className="text-3xl font-bold">Quality Assurance</h2>
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-300">
            Lump-sum contracting emphasizes consistent quality control at every stage of the project.
          </p>
        </div>
      </section>

     
      <section className="lg:px-44 md:px-10 mt-20 mb-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Lump-Sum Project Today</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm mb-8">
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
