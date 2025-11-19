import Image from "next/image";

const OurCommitment = () => {
  return (
    <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900 mb-12">
      <div className="lg:flex justify-between">
       <div>
       <div className="flex items-center space-x-2">
          <h3 className="text-[#6A7282] dark:text-gray-300">Our Commitment To Community</h3>
          <span className="w-12 h-[1px] bg-green-500"></span>
        </div>
        <h3 className="text-[#0A0A0A] dark:text-gray-300 text-3xl mt-2">We are committed to New York <br /> City</h3>
       </div>
        <div>
            <p className="text-[#4A5565] text-sm text-justify">As a commercial construction company, we support New York City&apos;s businessmen today <br /> and require what&apos;s yet to come tomorrow. At Konstruktion, we help every client sees their <br /> vision come to life.</p>
        </div>
      </div>
      {/*Banner Image*/}
      <div className="w-full mt-6">
        <Image
        src="/AboutBanner/community_banner.jpg"
        width={1000}
        height={1000}
        alt="community_image"
        className="object-cover w-full"
        />
      </div>
    </div>
  );
};

export default OurCommitment;
