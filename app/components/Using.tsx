import React from "react";
import { usingData } from "../utility/data";
import Image from "next/image";

const Using = () => {
  return (
    <div className="w-[100%] text-left">
      <p className="text-[1.25rem] lg:text-[1.8rem] font-[500] mb-[2rem]">
        Using now:
      </p>
      <div className="flex flex-wrap gap-[1rem] px-[2rem] justify-center lg:justify-start text-center items-center">
        {usingData.map((e, i) => (
          <Image
            className="hover:drop-shadow-2xl"
            src={e.src}
            alt={e.alt}
            title={e.title}
            key={e.title}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default Using;
