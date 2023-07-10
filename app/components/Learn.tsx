import React from "react";
import { learningData } from "../utility/data";
import Image from "next/image";

const Learn = () => {
  return (
    <div>
      <div className="w-[100%] text-left">
        <p className="text-[1.25rem] lg:text-[1.8rem] font-[500] mb-[2rem]">
          Learning:
        </p>
        <div className="flex flex-wrap gap-[1rem] px-[2rem] justify-center lg:justify-start text-center items-center">
          {learningData.map((e, i) => (
            <Image
              src={e.src}
              alt={e.alt}
              title={e.title}
              key={e.title}
              // className="w-[7.5rem]"
              width={80}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
