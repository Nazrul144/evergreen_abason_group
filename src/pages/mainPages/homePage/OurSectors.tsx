import Image from "next/image";
import Link from "next/link";

const OurSectors = () => {
  return (
    <section className="py-20">
      <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
        
        <h2 className="text-5xl mb-20 font-semibold text-gray-700 dark:text-gray-200">Our sectors</h2>

        <div className="grid md:grid-cols-3 gap-16">
          {sectors.map((item, index) => (
            <div key={index} className="text-center">

              {/* Image */}
              <Image
                src={item.image}
                width={80}
                height={80}
                alt={item.title}
                className="mx-auto mb-6"
              />

              {/* Title exactly centered under image */}
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Tags – centered on mobile, left on desktop */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {item.tags.map((tag, i) => (
                  <Link href={"#"}
                    key={i}
                    className="text-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSectors;

const sectors = [
  {
    image: "/OurSectors/icon1.svg",
    title: "Buildings",
    desc: "We offers substantial construction experience, competitive pricing, financial strength, integrity and a commitment to your project that is supported by a foundation of quality and workplace safety.",
    tags: ["Residential", "Houses", "Business"],
  },
  {
    image: "/OurSectors/icon2.svg",
    title: "Civil Infrastructure",
    desc: "The geographical diversity, project complexity and public nature of civil work results in an exceptionally challenging industry that demands a high level of technical construction expertise.",
    tags: ["Highways", "Auto Buildings", "Hospitals"],
  },
  {
    image: "/OurSectors/icon3.svg",
    title: "Heavy Industrial",
    desc: "Konstruction’s industrial construction companies respond to the unique needs of clients in the petrochemical, oil and gas, pulp and paper, mining, and power and renewable industries.",
    tags: ["Factory", "Refinery"],
  },
];
