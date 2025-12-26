"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

interface CountUpProps {
  to: number;
  suffix?: string;
  trigger: boolean;
}

export default function BuildingForTheBest() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const stats: StatItem[] = [
    { label: "Employee Owned", value: 100, suffix: "%" },
    { label: "Project in various industries", value: 50 },
    { label: "With nearly 20 years in business", value: 20 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const { theme } = useTheme();

  const bgStyle =
    theme === "dark"
      ? { backgroundColor: "#151313" }
      : { backgroundImage: "url('/Sustainability/white1.jpg')" };

  return (
    <section ref={sectionRef} className="relative w-full py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute bottom-0 right-0 w-full h-full bg-cover bg-no-repeat opacity-70 pointer-events-none"
        style={bgStyle}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-44 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "keyframes",
            stiffness: 60,
            duration: 1,
          }}
        >
          <h2 className=" text-2xl lg:text-5xl md:text-6xl leading-tight mb-8 text-black dark:text-gray-700 font-semibold wrap-break-word">
            Building for <br /> the best.
          </h2>

          <p className="text-gray-700 max-w-full mb-12 wrap-break-word">
            To explore and go after new ways to build, we&apos;ve gathered the
            people, innovations, and partnerships that can anticipate and
            overcome new challenges.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium">Innovation</h3>
              <div className="h-px bg-gray-300 mt-3 w-full"></div>
            </div>

            <div>
              <h3 className="text-lg font-medium">A strong foundation</h3>
              <div className="h-px bg-gray-300 mt-3 w-full"></div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-16 mt-10 md:mt-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-3"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "keyframes",
                stiffness: 60,
                duration: 1,
              }}
            >
              <motion.div
                className="text-5xl font-light text-black wrap-break-word"
                animate={visible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CountUp
                  to={stat.value}
                  suffix={stat.suffix}
                  trigger={visible}
                />
              </motion.div>

              <p className="text-sm text-gray-600 wrap-break-word">
                {stat.label}
              </p>
              <div className="h-px bg-gray-300 w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ to, suffix = "", trigger }: CountUpProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1400;
    const stepTime = 20;
    const increment = to / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= to) {
        start = to;
        clearInterval(counter);
      }
      setValue(Math.floor(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, [trigger, to]);

  return <>{value + suffix}</>;
}
