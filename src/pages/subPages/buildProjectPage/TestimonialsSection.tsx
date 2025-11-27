import Image from "next/image";
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
    <section className="overflow-x-hidden bg-gray-100 dark:bg-gray-900 py-12 sm:py-16 lg:px-44 md:px-10 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="text-orange-500 text-sm sm:text-base font-semibold mb-2">Hear from Our Team</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-300">Employee Stories</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md flex flex-col gap-4"
          >
            <div className="text-orange-500 text-xl sm:text-2xl">
              <FaQuoteLeft />
            </div>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{t.testimonial}</p>
            <div className="flex items-center gap-3 sm:gap-4 mt-4">
              <Image
                width={500}
                height={500}
                src={t.image}
                alt={t.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">{t.name}</h4>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
