import React from "react";
import Profile from "../assets/profile.jpg";

function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="lg:w-9/12 w-10/12 pt-8 md:pt-20 md:pb-10 m-auto text-white">
        <div className="md:flex justify-between items-center">
          <div className="hidden w-full lg:block md:w-auto">
            <a className="flex items-center">
              <img
                src={Profile}
                alt="Profile"
                className="w-8 h-8 rounded-full mr-1"
              />
              <span className="font-bold text-3xl tracking-tight">El_Rey</span>
            </a>
          </div>
          <ul className="md:flex items-center w-full md:w-auto text-center">
            <li className="md:mr-4 ">
              <a href="" className="">
                Home
              </a>
            </li>
            <li className=" md:mr-4">
              <a href="" className="">
                About
              </a>
            </li>
            <li className=" md:mr-4">
              <a href="" className="">
                Process
              </a>
            </li>
            <li className=" md:mr-4">
              <a href="" className="">
                Portfolio
              </a>
            </li>
            <li className=" md:mr-4">
              <a href="" className="">
                Blog
              </a>
            </li>
            <li className=" md:mr-4">
              <a href="" className="">
                Services
              </a>
            </li>
            <li className=" md:mr-4">
              <a href="" className="">
                Contact
              </a>
            </li>
          </ul>
          <div className="text-center">
            <p className="py-8">Copyright © 2023 El Rey.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
