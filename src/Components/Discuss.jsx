import React from "react";
import { FaWhatsapp, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { LuSendHorizonal } from "react-icons/lu";

function Discuss() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="lg:w-9/12 w-10/12 py-8 m-auto">
        <div className=" bg-white rounded-2xl ">
          <div className="m-auto md:w-10/12 w-[80%] py-16 md:flex gap-4">
            <div className="">
              <h1 className="text-3xl font-bold">Let's discuss your Project</h1>
              <p className="text-gray-400 py-8">
                There are many variations of passages of Lorem Ipsu available
                but the majority have suffered alte.
              </p>
              <div className="pb-8">
                <div className="flex items-center gap-4">
                  <HiLocationMarker className="text-[#A53DFF]" size={50} />{" "}
                  <div>
                    <h1>Address:</h1>
                    <p className="font-bold">Lagos Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-6">
                  <HiOutlineMail className="text-[#A53DFF]" size={50} />
                  <div>
                    <h1>My Email:</h1>
                    <p className="font-bold">Gideonoluwaseyi07@gmail...</p>
                  </div>{" "}
                </div>
                <div className="flex items-center gap-4">
                  <BiSolidPhoneCall className="text-[#A53DFF]" size={50} />
                  <div>
                    <h1>Call Me</h1>
                    <p className="font-bold">000 - 0000 - 000</p>
                  </div>{" "}
                </div>
              </div>
              <div className="py-5 flex gap-4">
                <a href="">
                  <FaTelegramPlane size={40} className="text-[#0088cc]" />
                </a>
                <a href="">
                  <FaWhatsapp size={40} className="text-[#25d366]" />
                </a>
                <a href="">
                  <RiTwitterXFill size={40} />
                </a>
                <a href="">
                  <BsDiscord size={40} className="text-[#7289da]" />
                </a>
                <a href="">
                  <FaLinkedin size={40} className="text-[#007bb5]" />
                </a>
              </div>
            </div>
            <div className="form">
              <p className="pb-8">
                There are many variations of passages of Lorem Ipsu available
                but the majority have suffered alte.
              </p>
              <form>
                <div>
                  <label
                    for="form_name"
                    className="font-bold text-sm transform peer-focus:font-medium mt-5"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="form_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[#A53DFF] peer"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="form_mail"
                    className="font-bold text-sm transform peer-focus:font-medium mt-5"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="form_mail"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[#A53DFF] peer"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label
                    for="form_location"
                    className="font-bold text-sm transform peer-focus:font-medium mt-5"
                  >
                    Location*
                  </label>
                  <input
                    type="text"
                    id="form_location"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[##A53DFF] peer"
                    placeholder="Location"
                    required
                  />
                </div>
                <div className="md:grid grid-cols-2 gap-6">
                  <div>
                    <label
                      for="form_budget"
                      className="font-bold text-sm transform peer-focus:font-medium mt-5"
                    >
                      Budget*
                    </label>
                    <input
                      type="text"
                      id="form_budget"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[##A53DFF] peer"
                      placeholder="Budget"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="form_subject"
                      className="font-bold text-sm transform peer-focus:font-medium mt-5"
                    >
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="form_subject"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[##A53DFF] peer"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="form_message"
                    className="font-bold text-sm transform peer-focus:font-medium mt-5"
                  >
                    Message*
                  </label>
                  <input
                    type="text"
                    id="form_massage"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[##A53DFF] peer"
                    placeholder="Message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white flex items-center justify-between md:px-8 md:py-4 p-2 rounded bg-[##A53DFF] hover:font-bold mt-4"
                >
                  Submit
                  <LuSendHorizonal size={25} className="pl-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discuss;
