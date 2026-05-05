import { useEffect, useState } from "react";
import StatsStack from "./StatsStack";

function WordFadeIn({ text, delay = 100, initialPause = 0, underlineWord = "" }: {
  text: string;
  delay?: number;
  initialPause?: number;
  underlineWord?: string;
}) {
  const [visibleCount, setVisibleCount] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    setVisibleCount(0);
    const timers = words.map((_, i) =>
      setTimeout(() => setVisibleCount(i + 1), initialPause + i * delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [text]);

  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            display: "inline-block",
            marginRight: "0.35em",
            textDecoration: word === underlineWord ? "underline" : "none",
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
}

const Container = () => {
  return (
    <div className="w-[50%] h-auto relative flex flex-1  ">
      <div className="w-[50%] h-80 relative top-30">
        <h1 className="text-7xl text-[#39393A]">
          <WordFadeIn text="Defining the next Generation of thinkers." underlineWord="Generation" />
        </h1>
        <p className="text-lg p-2 slide-in mt-2">We are a STEM focused orginaztion aiming to provide interactive STEM instruction to kids everywhere, while shrinking the digital divide by providing technology access to those in need.</p>
      </div>
      <div className=" w-[50%] flex items-center justify-center">
        <StatsStack />
      </div>
      
      
    </div>
  );
};

export default Container;