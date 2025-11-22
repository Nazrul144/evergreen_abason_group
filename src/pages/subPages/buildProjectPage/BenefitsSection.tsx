import React from "react";
import { FaUser, FaHeart, FaClipboardCheck, FaWallet, FaPaw, FaBrain } from "react-icons/fa";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaUser size={30} />,
      title: "Time to do what you need",
      description:
        "We recognize the importance of balancing work with our personal lives: whether you are a parent wanting to spend quality time with your new addition or if you need to care for an ill loved one.",
    },
    {
      icon: <FaHeart size={30} />,
      title: "Comprehensive Health Benefits",
      description:
        "At Evergreen Abason Group, it’s all about our people. Perks include medical, dental and vision as well as paid holidays and paid time off including vacation, sick and personal time and wellness incentives.",
    },
    {
      icon: <FaClipboardCheck size={30} />,
      title: "Adoption Assistance",
      description:
        "Because the value of family can never be overlooked. To help defray the cost of adoption, Evergreen Abason Group provides Adoption Assistance reimbursement: up to $5,000 per child.",
    },
    {
      icon: <FaBrain size={30} />, // replaced FaSpiral with FaBrain
      title: "Mental Wellness",
      description:
        "We offer safety, support, and the tools to help manage stress through the Live Well program.",
    },
    {
      icon: <FaWallet size={30} />,
      title: "Financial Empowerment",
      description:
        "Save for the stable future with our generous 401k company contribution and Roth option, 529 College Savings Plan, tuition reimbursement, rewards for employee referrals and more.",
    },
    {
      icon: <FaPaw size={30} />,
      title: "Pet Insurance",
      description:
        "Pet insurance, underwritten by Nationwide®, helps pay for your pet’s treatments, surgeries, lab fees, X-rays and much more. You’ll have peace of mind knowing you can care for your pet no matter the cost.",
    },
  ];

  return (
    <section className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900 mb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-green-500 text-sm font-semibold mb-2">Perks</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Benefits</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <div className="text-green-500">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
