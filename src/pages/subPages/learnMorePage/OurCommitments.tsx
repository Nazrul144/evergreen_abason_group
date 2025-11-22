import { ClipboardCheck, Leaf, User } from "lucide-react";

const OurCommitments = () => {
  const features = [
    {
      id: 1,
      title: "Safety",
      description:
        "We will never compromise the safety of our people. Our goal is zero incidents and our lost time frequency rate is industry-leading.",
      icon: <User className="w-8 h-8 text-emerald-500" />,
    },
    {
      id: 2,
      title: "Sustainability",
      description:
        "We look beyond sustainable construction with a holistic approach to corporate social responsibility that addresses partners, people, projects, practices and places; our 5P Model.",
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
    },
    {
      id: 3,
      title: "Quality",
      description:
        "We see projects through and proactively develop solutions to exceed expectations. Operational excellence instills quality principles that tangibly demonstrate success.",
      icon: <ClipboardCheck className="w-8 h-8 text-emerald-500" />,
    },
  ];

  return (
    <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900 ">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
            Our Commitments
            <span className="h-[1px] w-10 bg-green-500"></span>
          </p>

          <h2
            className="
              text-5xl md:text-4xl font-bold mt-3
              text-transparent bg-clip-text
              bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600
            "
          >
            We know that every decision <br /> has an impact
          </h2>
        </div>
        <section className="bg-white dark:bg-gray-900 dark:text-gray-300 py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature) => (
                <div key={feature.id} className="flex flex-col items-center text-center gap-4">
                  <div className="mb-2">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurCommitments;
