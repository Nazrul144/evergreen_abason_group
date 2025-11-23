"use client";

import Image from "next/image";
import Link from "next/link";

const DesignBuilt = () => {
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
                text-5xl md:text-xl font-bold mt-4
                text-transparent bg-clip-text
                bg-linear-to-r from-emerald-400 via-sky-400 to-blue-600
              "
            >
              Design & Build
            </h2>
          </div>

          <p className="mt-6 md:mt-0 max-w-md text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Our Design & Build services offer a fully integrated approach from initial planning to final construction. Experience
            seamless project delivery with innovative design, cost efficiency, and precision.
          </p>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full mt-10">
        <Image
          src="/DesignBuilt/design1.jpg"
          width={1600}
          height={900}
          alt="banner_image"
          className="w-full h-[550px] md:h-[450px] lg:h-[600px] object-cover"
        />
      </div>

      <section className="lg:px-44 md:px-10 mt-20 mb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold leading-snug">A Unified Approach for Better Results</h2>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Our Design & Build solution combines architectural creativity with engineering excellence. We streamline
              communication, reduce redesign costs, and ensure each project moves forward smoothly.
            </p>
          </div>

          <Image
            src="/DesignBuilt/design2.jpg"
            width={650}
            height={650}
            alt="designbuilt"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />
        </div>
      </section>

      <section className="lg:px-44 md:px-10 my-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Why Choose Design & Build?</h2>
          <p className="text-sm mt-3 text-gray-600 dark:text-gray-300">
            A single contract, one unified team, and complete transparency from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold">Single-Source Responsibility</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              One team handles design, planning, and construction for seamless coordination.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold">Accelerated Timeline</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Parallel workflows finish projects faster than traditional methods.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold">Budget-Friendly Planning</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Early cost estimation prevents budget overruns and ensures transparency.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold">Quality Assurance</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Designers and engineers work together to achieve flawless execution.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold">Reduced Risks</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray300">
              Fewer third-party delays and a unified workflow minimize risks.
            </p>
          </div>

          <div className="p-6 border dark:border-gray-700 rounded-xl hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold">Better Communication</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Real-time collaboration ensures every detail matches your vision.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:px-44 md:px-10 my-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/DesignBuilt/design3.jpg"
            width={700}
            height={700}
            alt="designbuilt-process"
            className="rounded-xl shadow-lg object-cover w-full h-[450px]"
          />

          <div>
            <h2 className="text-3xl font-bold">Our Design-Build Process</h2>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-300">
              Experience a streamlined, collaborative, and innovative workflow.
            </p>

            <ul className="text-sm mt-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>• Initial Concept, Design Outline & Client Vision</li>
              <li>• Budget Planning & Material Strategy</li>
              <li>• Engineering & Technical Structuring</li>
              <li>• Construction Execution & Quality Control</li>
              <li>• Final Delivery, Testing & Inspection</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lg:px-44 md:px-10 mt-20 mb-24">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-bold">Industries We Serve</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Our Design & Build expertise covers diverse sectors with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg">Residential Projects</div>

          <div className="border dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg">Commercial Buildings</div>

          <div className="border dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg">Industrial Facilities</div>

          <div className="border dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg">Renovation & Remodeling</div>
        </div>
      </section>

      <section className="lg:px-44 md:px-10 my-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Sustainable & Smart Design</h2>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-300">
              We incorporate eco-friendly building techniques, energy-efficient materials, and smart architectural planning to
              create sustainable, future-ready infrastructure.
            </p>

            <div className="mt-6">
              <Link href="/work">
                <button className="group px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer">
                  <span className="relative inline-block">
                    Explore Projects
                    {/* animated underline */}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <Image
            src="/DesignBuilt/image4.jpg"
            width={700}
            height={700}
            alt="sustainable"
            className="rounded-xl shadow-lg object-cover w-full h-[450px]"
          />
        </div>
      </section>

      <section className="lg:px-44 md:px-10 mt-20 mb-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Design-Build Journey</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm mb-8">
          With Evergreen Abason Group, you receive a fully integrated, high-quality construction experience from concept to
          creation. Let&apos;s build a smarter future together.
        </p>

        <Link href="/contact">
          <button className="group px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 duration-200 cursor-pointer">
            <span className="relative inline-block">
              Contact Us
              {/* animated underline */}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default DesignBuilt;
