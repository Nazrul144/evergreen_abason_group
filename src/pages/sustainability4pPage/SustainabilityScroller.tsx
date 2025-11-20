"use client";
import Image from "next/image";

interface SustainabilityItem {
  title: string;
  description: string;
}

const items: SustainabilityItem[] = [
  {
    title: "Reducing Carbon Footprint",
    description:
      "Sustainability begins with understanding the environmental impact of our daily actions. Reducing carbon footprints requires conscious choices such as minimizing energy consumption, embracing renewable energy sources, and prioritizing eco-friendly products. In modern communities, individuals and businesses have the power to adopt greener alternatives from using efficient appliances to supporting low-emission transportation. These small but consistent efforts accumulate over time, helping to lower overall greenhouse gases. A sustainable world is built through collective responsibility and long-term awareness. Changes may appear slow, but each mindful decision contributes to a healthier planet and inspires others to take part in environmental stewardship.",
  },
  {
    title: "Empowering Circular Economy",
    description:
      "A circular economy challenges the traditional take-make-waste model by encouraging reuse, repair, and regeneration. At its core, it promotes designing products that last longer while reducing unnecessary waste. Communities that practice circular principles experience reduced pollution, better resource management, and cost savings. From repairing everyday items to choosing recycled materials, individuals contribute to extending product lifecycles. Businesses also play a crucial role by developing systems that allow products to be recycled or refurbished. These actions ensure that environmental impact remains minimal and future generations inherit a cleaner, more responsible world.",
  },
  {
    title: "Responsible Resource Consumption",
    description:
      "Mindful consumption is a fundamental pillar of sustainability. As global demand increases, natural resources face immense pressure. By reducing waste, optimizing water usage, and selecting responsibly sourced goods, individuals help preserve ecosystems. Responsible resource consumption includes choosing sustainable materials, reducing single-use plastics, and supporting ethical supply chains. These decisions have a ripple effect protecting biodiversity, conserving forests, and promoting fair labor conditions. When people understand the value of limited resources, they become more intentional in their daily choices, ultimately creating long-lasting positive environmental impact.",
  },
];

export default function SustainabilityScroller() {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">

        {/* Sticky Image */}
        <div className="relative h-[450px] lg:h-[700px] sticky top-24">
          <Image
            src="/Sustainability/scrolling.jpg"
            alt="Sustainability"
            fill
            className="object-cover rounded-xl brightness-90"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Scroll Content */}
        <div className="space-y-24">
          {items.map((item, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h2>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
