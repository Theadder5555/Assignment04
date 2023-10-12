import React from "react";
import Profile from "../assets/profile.jpg";
import { BiMenu } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Navigation() {
  return (
    <div className="bg-white">
      <div className="lg:w-9/12 md:w-10/12 m-auto">
        <nav className="flex items-center justify-between mx-auto py-6 bg-white">
          <div className="flex items-center flex-shrink-0">
            <a className="flex items-center">
              <img
                src={Profile}
                alt="Profile"
                className="w-8 h-8 rounded-full mr-1"
              />
              <span className="font-bold text-3xl tracking-tight">Gideon</span>
            </a>
          </div>
          <button className="lg:hidden inline-flex justify-center items-center px-3 py-2 border rounded border-gray-500">
            <BiMenu size={25} />
          </button>
          <div class="hidden w-full lg:block md:w-auto">
            <ul className="flex items-center text-xl">
              <li className="flex-1 mr-4">
                <a href="" className="">
                  Home
                </a>
              </li>
              <li className="flex-1 mr-4">
                <a href="" className="">
                  About
                </a>
              </li>
              <li className="flex-1 mr-4">
                <a href="" className="">
                  Process
                </a>
              </li>
              <li className="flex-1 mr-4">
                <a href="" className="">
                  Portfolio
                </a>
              </li>
              <li className="flex-1 mr-4">
                <a href="" className="">
                  Blog
                </a>
              </li>
              <li className="flex-1 mr-4">
                <a href="" className="">
                  Services
                </a>
              </li>
             
              <li>
                <a href="" className="">
                  <button className="border rounded text-white bg-[#A53DFF] px-4 py-2 leading-none hover:border-transparent hover:font-bold">
                    Contact
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
