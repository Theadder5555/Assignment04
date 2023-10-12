import React from "react";
import Profile from "./profile.jpg";
import { FaWhatsapp, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";

function Home() {
  return (
    <div className="custom-background">
      <div className="lg:w-9/12 w-10/12 py-16 m-auto">
        <div className="lg:flex gap-4 items-end pb-16 justify-between">
          <div className="lg:w-[50%]">
            <div className="md:text-5xl text-4xl font-bold">
              Hello, I am
              <br />
              <h1>
                Ogundiyan Gideon{" "}
                <span class="pr-1 text-[#A53DFF]">{"(El Rey)"}</span>
              </h1>
            </div>
            <div className="w-[250px] m-auto py-4 md:hidden">
              <img src={Profile} alt="Profile" className="rounded-3xl " />
            </div>
            <div className="md:py-10 pb-4">
              <p className="">
              I am a software engineer, Application Beta tester and a Tech Enthusiast based in Lagos, Nigeria.
              </p>
              <p className="">
                I strives to build immersive and beautiful web applications and
                softwares through carefully crafted code and user-centric
                design.
              </p>
            </div>
            <a href="" className="">
              <button className="border rounded text-white bg-[#A53DFF] px-8 py-4 hover:font-bold">
                Say Hello!
              </button>
            </a>
            <div className="flex justify-between text-center md:pt-8 pt-4">
              <div className="bg-[#f2f2f2] mt-2 mr-1 p-5 border-none rounded w-1/3">
                <div className="text-2xl font-bold">15 Y.</div>
                <div className="pt-3">Experience</div>
              </div>
              <div className="bg-[#f2f2f2] mt-2 mr-1 p-5 border-none rounded w-1/3">
                <div className="text-2xl font-bold">250+</div>
                <div className="pt-3">Project Completed</div>
              </div>
              <div className="bg-[#f2f2f2] mt-2 p-5 border-none rounded w-1/3">
                <div className="text-2xl font-bold">58</div>
                <div className="pt-3">Happy Client</div>
              </div>
            </div>
          </div>
          <div className="w-[50%] hidden lg:block">
            <img src={Profile} alt="Profile" className="rounded-3xl " />
          </div>
        </div>

        {/*description*/}
        <div className="bg-white rounded-3xl py-8 md:py-16">
          <div className="md:w-10/12 w-11/12 m-auto lg:flex items-center justify-between">
            <div className="max-w-sm rounded-lg bg-gray-200 m-auto">
              <img src={Profile} alt="Profile" className="rounded-t-lg" />
              <div className="p-5 flex justify-between">
                <a href="https://t.me/El_rey33" target="blank">
                  <FaTelegramPlane size={25} className="text-[#0088cc]" />
                </a>
                <a href="" target="blank">
                  <FaWhatsapp size={25} className="text-[#A53DFF]" />
                </a>
                <a href="" target="blank">
                  <RiTwitterXFill size={25} />
                </a>
                <a href="" target="blank">
                  <BsDiscord size={25} className="text-[#7289da]" />
                </a>
                <a
                  href=""
                  target="blank"
                >
                  <FaLinkedin size={25} className="text-[#007bb5]" />
                </a>
              </div>
            </div>
            <div className="lg:w-[50%]">
              <h1 className="md:text-4xl text-2xl md:pt-3 font-bold">
                I am a Professional User Interface and Experience Developer
              </h1>
              <div className="md:py-5 py-4">
                <p className="">
                  With a strong background in designing and developing stylish,
                  contemporary websites, web services, and online stores, I
                  specialize in delivering tailored solutions for clients.
                </p>
                <p>
                  My work revolves around merging aesthetics and functionality
                  to provide captivating and innovative web solutions. In a
                  technology-driven world, I'm dedicated to crafting digital
                  journeys that make a lasting impact. Let's shape the future
                  together.
                </p>
              </div>
              <div className="flex items-center">
                <a href="">
                  <button className="rounded text-white bg-[#A53DFF] md:px-8 md:py-4 p-2 hover:font-bold">
                    My Project
                  </button>
                </a>
                <a href="">
                  <button className="text-[#A53DFF] flex items-center justify-between border md:px-8 md:py-4 p-2 rounded border-[#A53DFF] hover:font-bold ml-3">
                    <BsDownload size={25} className="pr-2" /> Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
