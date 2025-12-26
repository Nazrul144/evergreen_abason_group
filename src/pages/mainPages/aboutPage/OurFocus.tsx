"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const OurFocus = () => {
  return (
    <div>
      {/* Our Focus */}
      <section className="lg:px-44 md:px-10 px-6 mt-14 mb-8">
        <div className="flex items-center space-x-1">
          <motion.h3
            className="text-[#6A7282] dark:text-gray-300"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          >
            Our Focus
          </motion.h3>
          <motion.span
            className="w-12 h-px bg-green-500 mt-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          ></motion.span>
        </div>

        <motion.h3
          className="lg:text-3xl md:text-5xl font-semibold mt-4 leading-tight"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "keyframes",
            stiffness: 60,
            duration: 1,
          }}
        >
          Flexible, focused and innovative: <br />
          we&apos;re focused on achieving your <br />
          project vision and business goals.
        </motion.h3>

        {/* Who We Are Section */}
        <div className="flex flex-col lg:flex-row gap-10 mt-16">
          {/* Left Column – Big Image */}
          <div className="lg:w-[70%] w-full">
            <div className="flex items-center space-x-2">
              <motion.h3
                className="text-[#6A7282] dark:text-gray-300 mb-1"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  type: "keyframes",
                  stiffness: 60,
                  duration: 1,
                }}
              >
                Who We Are
              </motion.h3>
              <motion.span
                className="w-12 h-px bg-green-500"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  type: "keyframes",
                  stiffness: 60,
                  duration: 1,
                }}
              ></motion.span>
            </div>

            <motion.h1
              className="lg:text-3xl font-semibold md:text-4xl mb-6 leading-snug"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "keyframes",
                stiffness: 60,
                duration: 1,
              }}
            >
              We&apos;re problem-solvers with focus. Project managers with
              purpose. Team players with one goal in mind: To deliver your
              project on time, on budget, and on vision.
            </motion.h1>

            <motion.div
              className="relative w-full h-[350px] md:h-[600px] lg:h-[900px]"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "keyframes",
                stiffness: 60,
                duration: 1,
              }}
            >
              <Image
                src="/AboutBanner/image1.jpg"
                alt="Image"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            className="lg:w-[30%] w-full flex flex-col justify-between"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "keyframes",
              stiffness: 60,
              duration: 1,
            }}
          >
            <div>
              <p className="text-lg text-[#4A5565] dark:text-gray-400 lg:text-justify leading-relaxed">
                We achieve this success without ever compromising our values: by
                providing quality construction practices, effective
                communication, and a deep understanding of the building
                environment. Our long history in New York City and the U.S. puts
                area insiders in its charged agencies and negotiations with care
                and to 400,000 square feet law became New York. An established
                owner representative developer has operated successfully and
                responsibly.
              </p>

              <p className="text-lg text-[#4A5565] dark:text-gray-400 mt-4 text-justify leading-relaxed">
                As a commercial construction company, we support New York
                City&apos;s businessmen today and require what&apos;s yet to
                come tomorrow. At Evergreen Abason Group, we help every client
                see their vision come to life.
              </p>

              <Link
                href="/story"
                className="
                  inline-block mt-10
                  px-6 py-3 bg-green-600 text-white uppercase tracking-wide
                  hover:bg-green-700 relative group transition rounded-sm
                "
              >
                <span
                  className="
                    relative
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-px after:w-0 after:bg-white 
                    after:transition-all after:duration-300
                    group-hover:after:w-full
                  "
                >
                  OUR STORY
                </span>
              </Link>
            </div>

            {/* Small Image */}
            <div className="relative w-full h-[350px] md:h-[450px] mt-10 lg:mt-6">
              <Image
                src="/AboutBanner/image1.jpg"
                alt="Image"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurFocus;
