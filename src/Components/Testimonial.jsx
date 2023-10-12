import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

function Testimonial() {
  return (
    <div className="bg-gray-50">
      <div className="lg:w-9/12 w-10/12 m-auto py-8 md:py-16">
        <div className="container place-items-center grid">
          <h1 className="text-4xl font-bold pb-8">Testimonial</h1>
          <p className="text-center pb-8 text-gray-400">
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration.
          </p>
          <p className="text-center font-bold pb-4 text-gray-800">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio
            <br />
            convallis at. Curabitur imperdiet semper arcu, a finibus arcu
            suscipit in. Donec quis placerat nibh.
            <br />
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            <br />
            Morbi ornare elit at libero suscipit porta.”
          </p>
          <h2 className="pb-2 text-lg font-bold">Esther Howard</h2>
          <p className="pb-8">Managing Director, ABC company</p>
          <a href="">
            <FiMoreHorizontal size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
