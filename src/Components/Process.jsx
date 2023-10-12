import React from "react";
import Research from "../assets/process/research.png";
import Analyze from "../assets/process/analyze.png";
import Design from "../assets/process/design.webp";
import Deployment from "../assets/process/deployment.webp";
import Development from "../assets/process/development.png";
import Documentation from "../assets/process/documentation.webp";
import Maintenance from "../assets/process/maintenance.png";
import Testing from "../assets/process/testing.png";

function Process() {
  return (
    <div className="bg-gray-50">
      <div className="lg:w-9/12 w-10/12 py-16 m-auto">
        <div className="lg:flex ">
          <div className="lg:w-[50%]">
            <h1 className="text-4xl font-bold">Work Process</h1>
            <p className="pt-8 pb-4">Unlocking Digital </p>
            <p>
              Potential In the ever-evolving landscape of technology, we embark
              on a journey to harness the power of innovation. Our work process
              is a well-tuned symphony, where each note resonates with
              excellence.
            </p>
            <div className="md:grid grid-cols-2 justify-between">
              <div className="max-w-sm rounded-xl p-4 m-2 bg-white">
                <img src={Research} alt="research" className="h-20" />
                <h1 className="font-bold">1. Reasearch</h1>
                <p className="">
                  Explore and investigate the problem space, gathering insights
                  and data to inform our development decisions.
                </p>
              </div>
              <div className="max-w-sm rounded-xl p-4 m-2 bg-white">
                <img src={Analyze} alt="analyze" className="h-20" />
                <h1 className="font-bold">2. Analysis</h1>
                <p>
                  Delve into the acquired information, dissecting it to
                  understand its implications and significance for the project.
                </p>
              </div>
              <div className="max-w-sm rounded-xl p-4 m-2 bg-white">
                <img src={Design} alt="design" className="h-20" />
                <h1 className="font-bold">3. Design</h1>
                <p>
                  Craft innovative and user-centric solutions, employing
                  cutting-edge technology and design principles to shape the
                  digital experience.
                </p>
              </div>
              <div className="max-w-sm rounded-xl p-4 m-2 bg-white">
                <img src={Development} alt="launch" className="h-20" />
                <h1 className="font-bold">4. Development</h1>
                <p>
                  Translate designs into functional code, leveraging the latest
                  tools and methodologies to build robust and efficient
                  software.
                </p>
              </div>
            </div>
          </div>
          <div className="md:grid grid-cols-2 justify-between m-auto lg:w-[50%]">
            <div className="max-w-sm rounded-xl p-4 m-2 bg-white">
              <img src={Testing} alt="launch" className="h-20" />
              <h1 className="font-bold">5. Testing</h1>
              <p>
                Rigorously examine the software, running comprehensive tests to
                ensure it performs flawlessly and meets quality standards.
              </p>
            </div>
            <div className="max-w-sm rounded-xl p-4 m-2 bg-white">
              <img src={Deployment} alt="launch" className="h-20" />
              <h1 className="font-bold">6. Deployment</h1>
              <p>
                Launch the software, orchestrating a seamless transition from
                development to production, making it available for users.
              </p>
            </div>
            <div className="max-w-sm rounded-xl p-4 m-2 bg-white">
              <img src={Maintenance} alt="launch" className="h-20" />
              <h1 className="font-bold">7. Maintenance</h1>
              <p>
                Continuously monitor and maintain the software, addressing
                issues, implementing updates, and enhancing its performance.
              </p>
            </div>
            <div className="max-w-sm rounded-xl p-4 m-2 bg-white">
              <img src={Documentation} alt="launch" className="h-20" />
              <h1 className="font-bold">8. Documentation</h1>
              <p>
                Create detailed documentation to empower teams and users with
                the knowledge to maximize the software's potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
