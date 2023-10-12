import React from "react";
import Profile from "../assets/profile.jpg";
import { FaWhatsapp, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";

function Description() {
  return (
    <div className="bg-gray-100">
      <div className="lg:w-9/12 w-10/12 m-auto py-20">
        <div className="bg-white rounded-3xl p-8 md:p-16">
          <div className="md:w-10/12 m-auto lg:flex items-center gap-2 justify-between">
            <div className="max-w-sm rounded-lg bg-gray-200 m-auto">
              <img src={Profile} alt="Profile" className="rounded-t-lg" />
              <div className="p-5 flex justify-between">
                <a href="">
                  <FaTelegramPlane size={25} className="text-[#0088cc]" />
                </a>
                <a href="">
                  <FaWhatsapp size={25} className="text-[#25d366]" />
                </a>
                <a href="">
                  <RiTwitterXFill size={25} />
                </a>
                <a href="">
                  <BsDiscord size={25} className="text-[#7289da]" />
                </a>
                <a href="">
                  <FaLinkedin size={25} className="text-[#007bb5]" />
                </a>
              </div>
            </div>
            <div className="lg:w-[50%]">
              <h1 className="md:text-4xl text-2xl md:pt-3 font-bold">
                I am a Professional User Experience Designer
              </h1>
              <div className="md:py-8 py-4">
                <p className="py-4">
                  I am a seasoned Professional User Interface and Experience
                  Developer with a strong focus on crafting elegant,
                  contemporary websites, web services, and online stores. My
                  expertise lies in creating captivating and modern digital user
                  experiences that resonate with both clients and their
                  audiences. My true passion is found in the art of design and
                  development, where I seamlessly merge aesthetics and
                  functionality to provide tailored solutions for customers.
                  With a knack for delivering stylish and innovative web
                  solutions, I take pride in my ability to shape the digital
                  landscape. In a world driven by technology and visual appeal,
                  I am dedicated to bringing these elements together, ensuring
                  that every project I work on is not just a service, but a
                  remarkable experience. It's not just about creating websites;
                  it's about crafting a digital journey that leaves a lasting
                  impression.
                </p>
              </div>
              <div className="flex items-center">
                <a href="">
                  <button className="rounded text-white bg-[#A53DFF] md:px-8 md:py-4 p-2 hover:font-bold">
                    My Project
                  </button>
                </a>
                <a href="">
                  <button className="text-[#A53DFF] flex items-center justify-between border md:px-8 md:py-4 p-2 rounded border-[#11f533] hover:font-bold ml-3">
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

export default Description;
