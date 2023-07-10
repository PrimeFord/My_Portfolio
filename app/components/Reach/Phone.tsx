import Image from "next/image";
import React from "react";

const Phone = () => {
  return (
    <div className="w-[13rem] font-[500] text-left lg:text-center">
      <h2 className="text-[1.15rem] font-[700] mb-5">Contact Me</h2>
      <div className="flex flex-col text-[0.9rem] gap-2 justify-center items-start lg:items-center">
        <p className="flex gap-2 items-start lg:items-center hover:text-[1.15rem]">
          <a href="wa.me/+2348166619654" className="flex">
            <Image
              className="h-6 w-6"
              src="./images/whatsapp.svg"
              alt="whatsapp"
              height={24}
              width={24}
            />
            <span>WhatsApp</span>
          </a>
        </p>
        <p className="flex gap-2 items-center hover:text-[1.15rem]">
          <a href="tel:+2348166619654" className="flex">
            <Image
              className="h-6 w-6"
              src="./images/phone.svg"
              alt="phone"
              height={24}
              width={24}
            />
            <span>+234 816 661 9654</span>
          </a>
        </p>
        <p className="flex gap-2 items-center hover:text-[1.15rem]">
          <a href="mailto:wolabash@gmail.com" className="flex">
            <Image
              className="h-6 w-6"
              src="./images/mail.svg"
              alt="email"
              height={24}
              width={24}
            />
            <span>wolabash@gmail.com</span>
          </a>
        </p>
        <p className="flex gap-2 items-center hover:text-[1.15rem]">
          <Image
            className="h-6 w-6"
            src="./images/map.svg"
            alt="map-pin"
            height={24}
            width={24}
          />
          <span>Lagos, Nigeria.</span>
        </p>
      </div>
    </div>
  );
};

export default Phone;
