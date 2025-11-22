import Image from "next/image";
import SustainabilityScroller from "./SustainabilityScroller";
import WorkTogetherBanner from "../../mainPages/newsPage/WorkTogetherBanner";

const Sustainability4P: React.FC = () => {
  return (
    <section>
      <div className="lg:flex justify-between lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
        <div className="dark:text-gray-300 w-[50%]">
          <div className="flex items-center space-x-2">
            <h3 className="text-[#6A7282] dark:text-gray-300">Our way</h3>
            <span className="w-12 h-[1px] bg-green-500"></span>
          </div>
          <h2
            className="
    text-5xl md:text-3xl font-bold 
    text-transparent bg-clip-text
    bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600
  "
          >
            Sustainability
          </h2>
        </div>
        <div className="w-[50%]">
          <p className="text-sm">
            Evergreen Abason Group embraces a holistic approach to sustainability through our 5P Model, ensuring every initiative
            creates meaningful, lasting value for our partners, our people, our projects, our practices, and the places we serve.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Image
          src="/Sustainability/sustainability.jpg"
          width={1200}
          height={800}
          alt="banner"
          className="object-cover w-full h-[650px] brightness-75"
        />
      </div>

      <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900 dark:text-gray-300">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-300 flex items-center gap-3">
            Our Approach
            <span className="block w-10 h-[1px] bg-green-500"></span>
          </p>

          <div className="lg:flex ">
            <div
              className="
    text-5xl font-bold mt-4 leading-tight w-[50%]
    bg-gradient-to-r from-green-400 via-teal-500 to-blue-700
    bg-clip-text text-transparent
  "
            >
              4P Model of <br /> Sustainability
            </div>

            <div className="w-[50%]">
              Our approach to sustainability ensures we act in a socially responsible and environmentally respectful manner and
              that we continually measure, evaluate and increase sustainability efforts.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-3">Partners</h3>
            <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
              Collaborating as client-focused solution providers to deliver exceptional results to all stakeholders, all the time
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">People</h3>
            <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
              Engaging employees by providing education, resources and support
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Projects</h3>
            <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
              Involvement in all phases of a project&apos;s life before, during and after its construction
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Practices</h3>
            <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
              Improving operations through measurement, communication and integration of sustainable building practices
            </p>
          </div>
        </div>
        <div className="mt-12">
          <SustainabilityScroller />
        </div>
      </div>
      <div className="mt-12">
        <WorkTogetherBanner />
      </div>
    </section>
  );
};

export default Sustainability4P;
