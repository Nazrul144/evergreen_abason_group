import { MapPin } from "lucide-react";
import Image from "next/image";

const ProjectDetails = () => {
  return (
    <div className="overflow-x-hidden dark:bg-gray-900">
      {/* Banner */}
      <Image
        src="/DetailsPage/1.jpg"
        width={1000}
        height={1000}
        alt="detailsPageBanner"
        className="w-full h-[250px] sm:h-[350px] lg:h-[550px] object-cover"
      />

      {/* Section 1 */}
      <section className="lg:px-44 md:px-10 px-4 lg:mt-20">
        <div className="lg:flex gap-12 flex-col lg:flex-row">
          {/* LEFT */}
          <div className="lg:w-1/2 w-full">
            <h3 className="text-gray-700 dark:text-gray-300">Client</h3>
            <h3 className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
              Cadillac Fairview Corporation <br /> Limited
            </h3>

            <h3 className="text-gray-700 dark:text-gray-300 mt-4">Sector</h3>
            <h3 className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">Buildings</h3>

            <h3 className="text-gray-700 dark:text-gray-300 mt-4">Location</h3>
            <h3 className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">New York, NY</h3>

            <div className="mt-8 lg:mt-16 h-[250px] sm:h-[350px] lg:h-[450px] w-full">
              <Image
                src="/DetailsPage/2.jpg"
                width={400}
                height={400}
                alt="DetailsPageImage"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <h1 className="text-gray-700 dark:text-gray-300 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              One South First <br /> with long title <br /> here and here
            </h1>

            <p className="text-justify mt-4 mb-8 text-sm sm:text-base">
              A premiere address in Toronto&apos; Financial District, 160 Front Street West 
              is a 46-story structural steel-framed commercial office tower designed to 
              add a distinctive silhouette to the City&apos; skyline. Although complex...
            </p>

            <div className="mt-8 lg:mt-16 h-[250px] sm:h-[350px] lg:h-[450px] w-full">
              <Image
                src="/DetailsPage/2.jpg"
                width={400}
                height={400}
                alt="DetailsPageImage"
                className="w-full h-full object-cover rounded-md"
              />

              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                160 Front Street West is designed to add a distinctive silhouette to the City&apos; skyline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="lg:px-44 md:px-10 px-4 lg:mt-20">
        <div className="mt-8 sm:mt-12">
          <h3 className="text-gray-700 dark:text-gray-300 text-base sm:text-lg sm:text-xl leading-relaxed">
            Offering 1.2 million square feet of office space, over 12,000 square feet 
            of retail space and 339 parking stalls, 160 Front Street West is slated for 
            completion in late 2023.
          </h3>

          <div className="mt-4 sm:mt-6 w-full">
            <div className="relative w-full h-[250px] sm:h-[450px] lg:h-[650px]">
              <Image
                src="/DetailsPage/2.jpg"
                alt="DetailsPageImage"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="lg:px-44 md:px-10 px-4 lg:mt-20">
        <div className="lg:flex gap-8 flex-col lg:flex-row">
          {/* Image grid */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image src="/DetailsPage/2.jpg" width={400} height={400} alt="img1" className="w-full h-40 sm:h-48 object-cover rounded-md" />
            <Image src="/DetailsPage/2.jpg" width={400} height={400} alt="img2" className="w-full h-40 sm:h-48 object-cover rounded-md" />
            <Image
              src="/DetailsPage/2.jpg"
              width={400}
              height={400}
              alt="img3"
              className="w-full h-40 sm:h-48 object-cover rounded-md sm:col-span-2"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Project Highlights</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 sm:mt-6">
              <div>
                <h3 className="text-gray-400 text-sm sm:text-base">Client</h3>
                <p className="text-base sm:text-lg">Cadillac Fairview</p>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm sm:text-base">Sector</h3>
                <p className="text-base sm:text-lg">Buildings</p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <h3 className="text-gray-400 text-sm sm:text-base">Location</h3>
                </div>
                <p className="text-base sm:text-lg border-l-2 border-green-500 pl-2 sm:pl-3 mt-1">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
