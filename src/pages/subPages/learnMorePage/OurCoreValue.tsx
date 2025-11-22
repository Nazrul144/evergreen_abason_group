"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Dancing_Script } from "next/font/google";
import { useState } from "react";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const team = [
  { img: "/MeetOurTeam/1.jpg", name: "Mr. David Miller" },
  { img: "/MeetOurTeam/2.jpg", name: "Sarah Johnson" },
  { img: "/MeetOurTeam/3.jpg", name: "Mark Wilson" },
  { img: "/MeetOurTeam/4.jpg", name: "Emily Carter" },
  { img: "/MeetOurTeam/5.jpg", name: "James Anderson" },
];

const OurCoreValue = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="lg:px-44 md:px-10  dark:bg-gray-900 py-16">
      <div className="lg:flex lg:justify-between mb-16">
        <div className="lg:w-[50%]">
          <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
            Our Core Values
            <span className="h-[1px] w-10 bg-green-500 mt-1"></span>
          </p>

          <h2
            className="
              lg:text-4xl md:text-4xl font-bold mt-3
              text-transparent bg-clip-text
              bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600
            "
          >
            Passion. Integrity. Hard work. Professionalism. Caring.
          </h2>
        </div>
        <div className="lg:w-[50%] mt-4">
          <p className="text-sm">
            These core values have been with us since the beginning, and they&apos;ve infused who we are and how we build. Nothing
            brings us more excitement than transforming the skyline — and we do it by setting our standards high, striving for the
            best, building trust, and lifting up the people around us.
          </p>
        </div>
      </div>
      <div>
        <Image src="/Learn_More/value.jpg" width={800} height={600} alt="Image" className="object-cover w-full h-[550] mb-16" />
      </div>
   
      <div>
       
        <div className="flex">
          <h1
            className={`
    ${dancing.className}
    text-center font-bold text-4xl relative inline-block mx-auto
    bg-gradient-to-r from-orange-400 via-rose-500 to-red-500
    text-transparent bg-clip-text
  `}
          >
            Meet Our Team
            <span className="block mx-auto w-40 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-3 relative">
              <span className="absolute left-1/2 -top-2 -translate-x-1/2 w-3 h-3 rotate-45 bg-orange-500"></span>
            </span>
          </h1>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          autoplay={{
            delay: 2000,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ← important
          className="mySwiper"
        >
          {team.map((person, index) => (
            <SwiperSlide key={index}>
              <Image src={person.img} width={400} height={500} alt={person.name} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Dynamic Name */}
        <h2 className="text-center text-xl font-semibold mt-5">{team[activeIndex].name}</h2>
      </div>
    </div>
  );
};

export default OurCoreValue;
