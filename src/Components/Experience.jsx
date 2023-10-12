import React from "react";

function Experience() {
  return (
    <div className="bg-gray-200 py-16">
      <div className="lg:w-9/12 w-10/12 m-auto">
        <div className="lg:flex">
          <div className="lg:pt-20 lg:mr-20">
            <h1 className="text-4xl font-bold">What I do</h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p className="pb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
            <a href="">
              <button className="rounded text-white bg-[#A53DFF] md:px-8 md:py-3 p-2 mb-8 hover:font-bold">
                Say Hello!
              </button>
            </a>
          </div>
          <div className="">
            <div>
              <div className="bg-white p-4 rounded-2xl">
                <h1 className="text-2xl font-bold">User Experience (UX)</h1>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non, laoreet imperdiet orci.
                  Mauris ultrices eget lorem ac vestibulum.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 my-4 rounded-2xl">
                <h1 className="text-2xl font-bold">User Interface (UI)</h1>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non, laoreet imperdiet orci.
                  Mauris ultrices eget lorem ac vestibulum.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-2xl">
                <h1 className="text-2xl font-bold">Web Development</h1>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non, laoreet imperdiet orci.
                  Mauris ultrices eget lorem ac vestibulum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
