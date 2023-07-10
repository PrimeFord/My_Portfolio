import Image from "next/image";
import React from "react";

const OfficeDesk = () => {
  return (
    <div className="flex gap-4">
      <p>
        <a href="https://linkedin.com/in/muhammedfuad-bashar" rel="noopener">
          <Image
            className="w-[1.5rem] height-[1.5rem]"
            width={24}
            height={24}
            src="./images/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
      </p>
      <p>
        <a href="https://github.com/PrimeFord" rel="noopener">
          <Image
            className="w-[1.5rem] height-[1.5rem]"
            width={24}
            height={24}
            src="./images/github.svg"
            alt="Github"
          />
        </a>
      </p>
      <p>
        <a href="https://twitter.com/BMuhammedfuad" rel="noopener">
          <Image
            className="w-[1.5rem] height-[1.5rem]"
            src="./images/twitter.svg"
            alt="Twitter"
            width={24}
            height={24}
          />
        </a>
      </p>
      <p>
        <a href="mailto:wolabash@gmail.com" rel="noopener">
          <Image
            className="w-[1.5rem] height-[1.5rem]"
            src="./images/mail.svg"
            alt="Email"
            width={24}
            height={24}
          />
        </a>
      </p>
    </div>
  );
};

export default OfficeDesk;
