import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurFocus = () => {
  return (
    <div>
        {/* Our Focus */}
      <section className="lg:px-44 md:px-10 px-6 mt-14 mb-8">
        <div className="flex items-center space-x-1">
          <h3 className="text-[#6A7282] dark:text-gray-300">Our Focus</h3>
          <span className="w-12 h-[1px] bg-green-500"></span>
        </div>

        <h3 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
          Flexible, focused and innovative: <br />
          we&apos;re focused on achieving your <br />
          project vision and business goals.
        </h3>

        {/* Who We Are Section */}
        <div className="flex flex-col lg:flex-row gap-10 mt-16">
          {/* Left Column – Big Image */}
          <div className="lg:w-[70%] w-full">
            <div className="flex items-center space-x-2">
              <h3 className="text-[#6A7282] dark:text-gray-300 mb-1">Who We Are</h3>
              <span className="w-12 h-[1px] bg-green-500"></span>
            </div>

            <h1 className="text-3xl md:text-4xl mb-6 leading-snug">
              We&apos;re problem-solvers with focus. Project managers with purpose. Team players with one goal in mind: To deliver your
              project on time, on budget, and on vision.
            </h1>

            <div className="relative w-full h-[350px] md:h-[600px] lg:h-[900px]">
              <Image src="/AboutBanner/image1.jpg" alt="Image" fill className="object-cover" />
            </div>
          </div>

          {/* Right Column – Text + Button + Small Image */}
          <div className="lg:w-[30%] w-full flex flex-col justify-between">
            <div>
              <p className="text-lg text-[#4A5565] dark:text-gray-400 text-justify leading-relaxed">
                We achieve this success without ever compromising our values: by providing quality construction practices,
                effective communication, and a deep understanding of the building environment. Our long history in New York City
                and the U.S. puts area insiders in its charged agencies and negotiations with care and to 400,000 square feet law
                became New York. An established owner representative developer has operated successfully and responsibly.
              </p>

              <p className="text-lg text-[#4A5565] dark:text-gray-400 mt-4 text-justify leading-relaxed">
                As a commercial construction company, we support New York City&apos;s businessmen today and require what&apos;s
                yet to come tomorrow. At Konstruktion, we help every client see their vision come to life.
              </p>

              <Link
                href="#"
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
                    after:h-[1px] after:w-0 after:bg-white 
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
              <Image src="/AboutBanner/image1.jpg" alt="Image" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurFocus