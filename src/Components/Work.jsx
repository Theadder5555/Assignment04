import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Work() {
  return (
    <div className="bg-gray-900">
      <div className="lg:w-9/12 w-10/12 py-16 m-auto text-white">
        <div className="container grid place-items-center">
          <h1 className="text-4xl font-bold text-center">
            Do you have Project Idea?
            <br />
            Let's discuss your project!
          </h1>
          <p className="py-8 text-center">
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration.
          </p>
          <a href="">
            <button className="flex items-center rounded text-white bg-[#A53DFF] md:px-8 md:py-3 p-2 hover:font-bold">
              Let's work Together <BsArrowRight size={22} className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
