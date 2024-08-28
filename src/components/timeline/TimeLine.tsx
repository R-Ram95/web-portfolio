import React, { useState } from "react";
import { Props } from "./TimeLine.model";

const TimeLine = ({ labels, onClick }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onClick(labels[index]);
  };

  return (
    <nav>
      <div className="relative w-[28px] h-[263px]">
        {labels.map((label, index) => (
          <React.Fragment key={index}>
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-[26px] h-[26px] rounded-full border-2 border-slate-200 flex items-center transition-colors duration-300 ease-in-out ${
                index === activeIndex ? "bg-slate-200" : ""
              }`}
              style={{ top: `${index * 25}%` }}
            >
              <button
                className={`absolute left-[36px] whitespace-nowrap text-lg text-slate-200 hover:text-emerald-300 focus:outline-none ${
                  index === activeIndex ? "underline" : ""
                }`}
                onClick={() => handleClick(index)}
                aria-pressed={index === activeIndex}
              >
                {label}
              </button>
            </div>
            {index < labels.length - 1 && (
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-slate-200"
                style={{
                  top: `calc(${index * 25}% + 26px)`,
                  height: "calc(25% - 26px)",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default TimeLine;
