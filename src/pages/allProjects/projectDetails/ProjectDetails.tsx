import { MapPin } from "lucide-react";
import Image from "next/image";

const ProjectDetails = () => {
  return (
    <div>
      {/* Banner */}
      <Image
        src="/DetailsPage/1.jpg"
        width={1000}
        height={1000}
        alt="detailsPageBanner"
        className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover"
      />

      {/* Section 1 */}
      <section className="lg:px-44 md:px-10 px-4 lg:mt-20 dark:bg-gray-900">
        <div className="lg:flex gap-12">

          {/* LEFT */}
          <div className="lg:w-[50%] w-full">
            <h3 className="text-gray-700 dark:text-gray-300">Client</h3>
            <h3 className="text-gray-700 dark:text-gray-300 text-xl">
              Cadillac Fairview Corporation <br /> Limited
            </h3>

            <h3 className="text-gray-700 dark:text-gray-300 mt-4">Sector</h3>
            <h3 className="text-gray-700 dark:text-gray-300 text-xl">Buildings</h3>

            <h3 className="text-gray-700 dark:text-gray-300 mt-4">Location</h3>
            <h3 className="text-gray-700 dark:text-gray-300 text-xl">New York, NY</h3>

            <div className="mt-10 lg:mt-16 h-[280px] sm:h-[350px] lg:h-[450px] w-full">
              <Image
                src="/DetailsPage/2.jpg"
                width={400}
                height={400}
                alt="DetailsPageImage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-[50%] w-full mt-10 lg:mt-0">
            <h1 className="text-gray-700 dark:text-gray-300 text-3xl sm:text-4xl font-semibold leading-tight">
              One South First <br /> with long title <br /> here and here
            </h1>

            <p className="text-justify mt-4 mb-12 text-sm sm:text-base">
              A premiere address in Toronto&apos; Financial District, 160 Front Street West 
              is a 46-story structural steel-framed commercial office tower designed to 
              add a distinctive silhouette to the City&apos; skyline. Although complex...
            </p>

            <div className="mt-10 lg:mt-16 h-[280px] sm:h-[350px] lg:h-[450px] w-full">
              <Image
                src="/DetailsPage/2.jpg"
                width={400}
                height={400}
                alt="DetailsPageImage"
                className="w-full h-full object-cover"
              />

              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                160 Front Street West is designed to add a distinctive silhouette to the City&apos; skyline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="lg:px-44 md:px-10 px-4 lg:mt-20 dark:bg-gray-900">
        <div className="mt-12">
          <h3 className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
            Offering 1.2 million square feet of office space, over 12,000 square feet 
            of retail space and 339 parking stalls, 160 Front Street West is slated for 
            completion in late 2023.
          </h3>

          <div className="mt-6 w-full">
            <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[650px]">
              <Image src="/DetailsPage/2.jpg" alt="DetailsPageImage" fill className="object-cover rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="lg:px-44 md:px-10 px-4 lg:mt-20 dark:bg-gray-900">
        <div className="lg:flex gap-12">

          {/* Image grid */}
          <div className="lg:w-[50%] w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <div className="lg:w-[50%] w-full mt-10 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Project Highlights</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-gray-400">Client</h3>
                <p className="text-lg">Cadillac Fairview</p>
              </div>

              <div>
                <h3 className="text-gray-400">Sector</h3>
                <p className="text-lg">Buildings</p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <h3 className="text-gray-400">Location</h3>
                </div>
                <p className="text-lg border-l-2 border-green-500 pl-3 mt-1">New York, NY</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
