import React from "react";
import img7 from "../assets/portfolio/img7.jpeg";
import img8 from "../assets/portfolio/img8.jpeg";
import img9 from "../assets/portfolio/img9.jpeg";
import img01 from "../assets/portfolio/img01.jpeg";
import Blog1 from "../assets/portfolio/blog1.jpeg";
import Blog2 from "../assets/portfolio/blog2.jpeg";
import { FiMoreHorizontal } from "react-icons/fi";

function Blog() {
  return (
    <div className="custom-background1">
      <div className="lg:w-9/12 w-10/12 py-8 m-auto">
        <div className="container place-items-center grid">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-center py-8">
            Dive into my world of tech insights and exploration. In this blog, I
            share thoughts, tutorials, and musings on the latest in software
            engineering, offering you a window into the dynamic realm of
            technology.
            <br />
            but the majority have suffered alteration.
          </p>
        </div>
        <div className="md:grid lg:grid-cols-4 md:grid-cols-2">
          <div className="max-w-sm rounded-xl m-2 bg-white border ">
            <a
              href="https://twitter.com/iflames_1/status/1689417798596915200?t=lUPc01ZVqS_B9mY3Da1Dbw&s=19"
              target="blank"
              className=""
            >
              <img
                src={Blog1}
                alt=""
                className="rounded-t-xl w-full h-[200px] object-cover"
              />
            </a>
            <div className="p-5">
              <p className="pb-2">22 Oct, 2020 / 264 Comments</p>
              <a href="https://twitter.com/iflames_1/status/1689417798596915200?t=lUPc01ZVqS_B9mY3Da1Dbw&s=19">
                <h1 className="text-lg font-bold pb-2">
                  Lorem ipsum dolor sit consea. Nulla purus arcu
                </h1>
              </a>
            </div>
          </div>
          <div className="max-w-sm rounded-xl m-2 bg-white border ">
            <a
              href="https://twitter.com/iflames_1/status/1673059580966756352?t=IoZ8uj34osut6UTpY718sg&s=19"
              target="blank"
              className=""
            >
              <img
                src={Blog2}
                alt=""
                className="rounded-t-xl w-full h-[200px] object-cover"
              />
            </a>
            <div className="p-5">
              <p className="pb-2">22 Oct, 2020 / 264 Comments</p>
              <a href="https://twitter.com/iflames_1/status/1673059580966756352?t=IoZ8uj34osut6UTpY718sg&s=19">
                <h1 className="text-lg font-bold pb-2">
                  Lorem ipsum dolor sit consea. Nulla purus arcu
                </h1>
              </a>
            </div>
          </div>
          <div className="max-w-sm rounded-xl m-2 bg-white border ">
            <a href="" className="">
              <img
                src={img9}
                alt=""
                className="rounded-t-xl w-full h-[200px] object-cover"
              />
            </a>
            <div className="p-5">
              <p className="pb-2">22 Oct, 2020 / 264 Comments</p>
              <a href="">
                <h1 className="text-lg font-bold pb-2">
                  Lorem ipsum dolor sit consea. Nulla purus arcu
                </h1>
              </a>
            </div>
          </div>
          <div className="max-w-sm rounded-xl m-2 bg-white border ">
            <a href="" className="">
              <img
                src={img01}
                alt=""
                className="rounded-t-xl w-full h-[200px] object-cover"
              />
            </a>
            <div className="p-5">
              <p className="pb-2">22 Oct, 2020 / 264 Comments</p>
              <a href="">
                <h1 className="text-lg font-bold pb-2">
                  Lorem ipsum dolor sit consea. Nulla purus arcu
                </h1>
              </a>
            </div>
          </div>
        </div>
        <a href="" className="grid place-items-center md:pt-8">
          <FiMoreHorizontal size={50} className="" />
        </a>
      </div>
    </div>
  );
}

export default Blog;
