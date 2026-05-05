import { useEffect, useState } from "react";

interface StatItem {
  value: string;
  label: string;
  prefix?: string;
}

const STATS: StatItem[] = [
  { value: "5", label: "Founding Members" },
  { value: "100", label: "Student Goal" },
  { value: "1,000", label: "Fundraising Goal", prefix: "$" },
];

function AnimatedStat({ value, label, prefix = "", delay = 0 }: StatItem & { delay: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <p className="text-4xl font-semibold text-[#39393A]">
        {prefix}{value}
      </p>
      <p className="text-xs text-[#39393A]/50 mt-1 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

const StatStack = () => {
  return (
    <div className="w-[50%]  h-full relative">
      <div className="absolute top-30 left-8">

        {/* card */}
        <div className="bg-white rounded-2xl px-8 py-8 flex flex-col gap-8 shadow-sm w-64">

          {/* top label */}
          <p className="text-xs uppercase tracking-widest text-[#39393A]/40">
            Where we're headed
          </p>

          {/* divider */}
          <div className="w-full h-px bg-[#39393A]/10" />

          {/* stats */}
          {STATS.map((stat, i) => (
            <AnimatedStat key={i} {...stat} delay={200 + i * 200} />
          ))}

          {/* bottom label */}
          <div className="w-full h-px bg-[#39393A]/10" />
          <p className="text-xs text-[#39393A]/40 leading-relaxed">
            We're just getting started — join us in building something that lasts.
          </p>

        </div>
      </div>
    </div>
  );
};

export default StatStack;