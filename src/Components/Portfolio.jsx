import React from "react";
import { BsArrowRight } from "react-icons/bs";
import img6 from "../assets/portfolio/img6.jpeg";
import Bemint from "../assets/portfolio/bemint.jpg";
import Alxse from "../assets/portfolio/alxse.jpg";
import Alchemy from "../assets/portfolio/alchemy.png";
import Code from "../assets/portfolio/code4you.jpg";
import Konoha from "../assets/portfolio/konoha.jpg";

function Portfolio() {
  return (
    <div className="bg-white">
      <div className="lg:w-9/12 w-10/12 py-16 m-auto">
        <div className="">
          <div className="text-center m-auto">
            <h1 className="text-4xl font-bold">Education & Experience</h1>
            <p className="py-5">
              Explore my educational journey, where I've honed my skills and
              knowledge as a software engineer. Discover the institutions,
              courses, and experiences that have shaped my expertise.
            </p>
          </div>
          <div className="md:grid lg:grid-cols-3 md:grid-cols-2">
            <div className="max-w-sm rounded-xl m-2 bg-white border ">
              <a href="">
                <img
                  src={Alxse}
                  alt=""
                  className="rounded-t-xl w-full h-[200px] object-cover"
                />
              </a>
              <div className="p-5">
                <a href="">
                  <h1 className="font-bold pb-2">S.T.E.M Education </h1>
                </a>
                <p className="pb-2">
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <a href="">
                  <button className="text-[#A53DFF] flex items-center border md:px-8 md:py-2 p-2 rounded border-[#A53DFF] hover:font-bold">
                    Case study <BsArrowRight size={20} className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
            <div className="max-w-sm rounded-xl m-2 bg-white border ">
              <a href="">
                <img
                  src={Alchemy}
                  alt=""
                  className="rounded-t-xl w-full h-[200px] object-cover"
                />
              </a>
              <div className="p-5">
                <a href="">
                  <h1 className="font-bold pb-2">Alchemy University</h1>
                </a>
                <p className="pb-2">
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <a href="">
                  <button className="text-[#A53DFF] flex items-center border md:px-8 md:py-2 p-2 rounded border-[#A53DFF] hover:font-bold">
                    Case study <BsArrowRight size={20} className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
            <div className="max-w-sm rounded-xl m-2 bg-white border ">
              <a href="" className="">
                <img
                  src={Bemint}
                  alt=""
                  className="rounded-t-xl w-full h-[200px] object-cover"
                />
              </a>
              <div className="p-5">
                <a href="">
                  <h1 className="font-bold pb-2">BeMINT</h1>
                </a>
                <p className="pb-2">
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <a href="">
                  <button className="text-[#A53DFF] flex items-center border md:px-8 md:py-2 p-2 rounded border-[#A53DFF] hover:font-bold">
                    Case study <BsArrowRight size={20} className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
            <div className="max-w-sm rounded-xl m-2 bg-white border ">
              <a href="">
                <img
                  src={Code}
                  alt=""
                  className="rounded-t-xl w-full h-[200px] object-cover"
                />
              </a>
              <div className="p-5">
                <a href="">
                  <h1 className="font-bold pb-2">Code 4 You</h1>
                </a>
                <p className="pb-2">
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <a href="">
                  <button className="text-[#A53DFF] flex items-center border md:px-8 md:py-2 p-2 rounded border-[#A53DFF] hover:font-bold">
                    Case study <BsArrowRight size={20} className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
            <div className="max-w-sm rounded-xl m-2 bg-white border ">
              <a href="">
                <img
                  src={Konoha}
                  alt=""
                  className="rounded-t-xl w-full h-[200px] object-cover"
                />
              </a>
              <div className="p-5">
                <a href="">
                  <h1 className="font-bold pb-2">Product Admin Dashboard</h1>
                </a>
                <p className="pb-2">
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <a href="">
                  <button className="text-[#A53DFF] flex items-center border md:px-8 md:py-2 p-2 rounded border-[#A53DFF] hover:font-bold">
                    Case study <BsArrowRight size={20} className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
            <div className="max-w-sm rounded-xl m-2 bg-white border ">
              <a href="">
                <img
                  src={img6}
                  alt=""
                  className="rounded-t-xl w-full h-[200px] object-cover"
                />
              </a>
              <div className="p-5">
                <a href="">
                  <h1 className="font-bold pb-2">Product Admin Dashboard</h1>
                </a>
                <p className="pb-2">
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>
                <a href="">
                  <button className="text-[#A53DFF] flex items-center border md:px-8 md:py-2 p-2 rounded border-[#A53DFF] hover:font-bold">
                    Case study <BsArrowRight size={20} className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="container grid place-items-center pt-4">
            <button className="rounded text-white bg-[##A53DFF] md:px-8 md:py-3 p-2 hover:font-bold">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
