import Image from "next/image";
import ExploreServices from "../mainPages/servicePage/ExploreServices";
import Link from "next/link";

const Construction = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-300 overflow-x-hidden">
      {/* Header Section */}
      <div className="lg:px-44 md:px-10 px-4 lg:mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-3 lg:mt-0">
              Services
              <span className="h-px w-10 bg-green-500 mt-1"></span>
            </p>

            <h2 className=" text-2xl lg:text-4xl sm:text-5xl font-bold mt-3 text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-sky-400 to-blue-600">
              Construction
            </h2>
          </div>

          <p className="mt-4 md:mt-0 max-w-md text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Our comprehensive construction services are designed to deliver exceptional quality, safety, efficiency, and innovative solutions for every project.
          </p>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full mt-6 sm:mt-10">
        <Image
          src="/Services_Image4Group/construction.jpg"
          width={1600}
          height={900}
          alt="banner_image"
          className="w-full h-[250px] sm:h-[400px] md:h-[450px] lg:h-[600px] object-cover"
        />
      </div>

      {/* Feature Section */}
      <section className="lg:flex flex-col lg:flex-row gap-6 my-12 lg:my-16 lg:px-44 md:px-10">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold lg:font-bold">
            Delivering integrated construction <br /> services to build lasting success
          </h1>
          <p className="text-sm sm:text-base mt-6 sm:mt-10">
            Our comprehensive construction services are designed to deliver exceptional quality, safety, efficiency, and innovative solutions for every project.
          </p>
        </div>

        <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
          <Image
            src="/Services_Image4Group/construction1.jpg"
            width={600}
            height={600}
            alt="Construction Image"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover rounded-md"
          />
        </div>
      </section>

      <ExploreServices />

      {/* CTA Section */}
      <section className="lg:px-44 md:px-10 px-4 mt-12 lg:mt-20 mb-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mb-4">
          Need Professional Construction Support?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mb-6 sm:mb-8">
          Our team is ready to guide you with expert advice and help you bring your construction vision to reality. 
          Contact us for consultations, project inquiries, or customized solutions.
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

export default Construction;
