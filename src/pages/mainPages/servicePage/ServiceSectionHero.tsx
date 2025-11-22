"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type PieChartProps = {
  label: string;
  target: number; 
  color?: "emerald" | "sky" | "purple";
  size?: number; 
  duration?: number; 
};

const colorMap: Record<string, string> = {
  emerald: "#10B981",
  sky: "#0EA5E9",
  purple: "#8B5CF6",
};

const PieChart: React.FC<PieChartProps> = ({
  label,
  target,
  color = "emerald",
  size = 120,
  duration = 900,
}) => {
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const [value, setValue] = useState(0); 
  const circleRef = useRef<SVGCircleElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const from = 0;
            const to = Math.max(0, Math.min(100, target));

            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; 
              const current = Math.round(from + (to - from) * eased);
              setValue(current);

              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  useEffect(() => {
    if (!circleRef.current) return;
    const offset = circumference * (1 - value / 100);
    circleRef.current.style.strokeDashoffset = `${offset}`;
  }, [value, circumference]);

  const strokeColor = colorMap[color] ?? colorMap["emerald"];

  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      <svg width={size} height={size} className="block">
        <defs>
          <linearGradient id={`g-${label}`} x1="0%" x2="100%">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="1" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#g-${label})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="font-semibold text-lg"
          fill="#111827"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {value}%
        </text>
      </svg>

      <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 text-center">
        <div className="font-medium">{label}</div>
      </div>
    </div>
  );
};

const ServiceSectionCombined: React.FC = () => {
  return (
    <section className="px-6 md:px-10 lg:px-44 py-16 dark:bg-gray-900">
      {/* HERO */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div>
            <p className="text-sm tracking-wide font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
              Services
              <span className="h-px w-10 bg-green-500 inline-block" />
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600">
              Construction
            </h2>
          </div>
        </div>

        <div className="rounded-sm overflow-hidden shadow-md">
          <Image
            src="/Service_Images/service.jpg"
            alt="Service Image"
            width={1600}
            height={800}
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* DETAILS */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Service_Images/construction1.jpg"
              alt="Construction 1"
              width={800}
              height={600}
              className="rounded-xl object-cover h-64 w-full"
            />
            <Image
              src="/Service_Images/construction2.jpg"
              alt="Construction 2"
              width={800}
              height={600}
              className="rounded-xl object-cover h-64 w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Evergreen Abason Service Quality
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              We deliver modern and sustainable construction services ensuring long-lasting structural quality and complete client
              confidence. Our experienced team focuses on safety, on-time delivery and outstanding workmanship.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <PieChart label="Completion" target={98} color="emerald" />
              <PieChart label="Satisfaction" target={95} color="sky" />
              <PieChart label="Safety" target={99} color="purple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionCombined;
