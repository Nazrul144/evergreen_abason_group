import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Mr. David Miller",
    role: "Software Engineer",
    testimonial:
      "Evergreen Abason Group has allowed me to grow professionally while maintaining a healthy work-life balance. The support here is incredible!",
    image: "/MeetOurTeam/1.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    testimonial:
      "I love the collaborative environment and the focus on employee wellness. It’s more than just a job—it’s a community.",
    image: "/MeetOurTeam/2.jpg",
  },
  {
    name: "Mark Wilson",
    role: "UX Designer",
    testimonial:
      "From day one, I felt welcomed and valued. The mentorship and benefits make Evergreen Abason Group a fantastic place to work.",
    image: "/MeetOurTeam/3.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 lg:px-44 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-orange-500 text-sm font-semibold mb-2">Hear from Our Team</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-300">Employee Stories</h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4">
            <div className="text-orange-500 text-2xl">
              <FaQuoteLeft />
            </div>
            <p className="text-gray-700 dark:text-gray-300">{t.testimonial}</p>
            <div className="flex items-center gap-4 mt-4">
              <Image width={500} height={600} src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
