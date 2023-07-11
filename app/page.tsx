"use client";

import NavBar from "./components/NavBar";
import HomeCard from "./components/HomeCard";
import AboutCard from "./components/AboutCard";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import Top from "./components/Top";
import HireModal from "./components/HireModal";
import { Fragment, useEffect, useState } from "react";
import Backdrop from "./components/Backdrop";

export default function Home() {
  const [toggle, setToggle] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div
      className="w-[100%] h-fit bg-[#FBFBFB] dark:bg-[#263138] relative"
      id="top"
    >
      <Backdrop toggle={toggle} />
      <Fragment>
        <NavBar
          setShowModal={setShowModal}
          toggle={toggle}
          setToggle={setToggle}
        />
        <HomeCard setShowModal={setShowModal} />
        <AboutCard />
        <SkillCard />
        <ProjectCard />
        <ContactCard />
        <Footer />
        <Top />
        <HireModal isVisible={showModal} onClose={() => setShowModal(false)} />
      </Fragment>
    </div>
  );
}
