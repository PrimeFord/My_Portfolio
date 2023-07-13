"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./Form.css";

const HireModal = ({ isVisible, onClose }: any) => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const finalMessage = `Fullname: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${body}`;
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
    console.log(finalMessage);
  };
  return (
    <div
      className="w-[100vw] h-[100vh] fixed overflow-scroll inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-centers"
      id="wrapper"
      onClick={handleClose}
    >
      <div className=" flex flex-col justify-center py-8 lg:p-[2rem] h-fit w-[85%] lg:w-fit ">
        <div className="bg-[#FBFBFB] dark:bg-[#263138] dark:text-[#FBFBFB] lg:p-[3rem] p-4 rounded-[1rem] relative">
          <button
            className="w-fit absolute top-4 right-4"
            onClick={() => onClose()}
          >
            <Image
              className=""
              src="./images/close.svg"
              alt="Close"
              width={32}
              height={32}
            />
          </button>
          <h2 className="text-[1.3rem] lg:text-[1.8rem] border-b-2 border-b-solid border-b-#263138 dark:border-b-#FBFBFB mb-4">
            Hire Me
          </h2>
          <form
            className="forms p-2  lg:grid lg:grid-cols-2"
            method="POST"
            action={`mailto:wolabash@gmail.com?subject=${subject}&body=${finalMessage}`}
          >
            <section>
              <label htmlFor="first_name">Full name</label>
              <input
                className="dark:text-[#263138]"
                type="text"
                name="fullname"
                id="fullname"
                placeholder="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </section>
            <section>
              <label htmlFor="subject">Subject</label>
              <input
                className="dark:text-[#263138]"
                type="text"
                name="subject"
                id="subject"
                placeholder="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </section>
            <section>
              <label htmlFor="email">Email</label>
              <input
                className="dark:text-[#263138]"
                type="email"
                name="email"
                id="email"
                placeholder="email@email.com..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
            <section>
              <label htmlFor="phone_no">Phone number</label>
              <input
                className="dark:text-[#263138]"
                type="text"
                name="phone no"
                id="phone_no"
                placeholder="+234 81..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </section>
            <section className="text">
              <label htmlFor="message">Message</label>
              <textarea
                className="dark:text-[#263138]"
                name="message"
                id="message"
                rows={4}
                placeholder="message..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </section>
            <section className="submit dark:bg-[#FBFBFB] dark:text-[#263138] dark:hover:bg-[#263138] dark:hover:border-2 dark:hover:border-solid dark:hover:border-[#FBFBFB] dark:hover:text-[#FBFBFB]">
              <button type="submit" className="flex items-center gap-4">
                Submit
              </button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
