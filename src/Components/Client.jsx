import React from "react";
import Google from "../assets/clients/google.png";
import Dribbble from "../assets/clients/dribbble.png";
import Linkedin from "../assets/clients/linkedin.png";
import Stackswap from "../assets/clients/stackswap.png";
import Medium from "../assets/clients/medium.png";
import Spotify from "../assets/clients/spotify.png";

function Client() {
  return (
    <div className="bg-gray-50">
      <div className="lg:w-9/12 w-10/12 m-auto py-8 md:py-16">
        <div className="grid place-items-center container">
          <h1 className="font-bold text-4xl">Happy Client</h1>
          <p className="md:py-8 py-4 text-center">
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration.
          </p>
        </div>

        <ul className="grid md:grid-cols-6 grid-cols-3 items-center pt-4">
          <a href="">
            <li>
              <img
                src={Google}
                alt="Google"
                className="md:h-20 h-10 w-full object-contain pr-4"
              />
            </li>
          </a>
          <a href="">
            <li>
              <img
                src={Dribbble}
                alt="Dribbble"
                className="md:h-20 h-10 w-full object-contain pr-4"
              />
            </li>
          </a>
          <a href="">
            <li>
              <img
                src={Linkedin}
                alt="Linkedin"
                className="md:h-20 h-10 w-full object-contain md:pr-4"
              />
            </li>
          </a>
          <a href="">
            <li>
              <img
                src={Stackswap}
                alt="Stackswap"
                className="md:h-20 h-10 w-full object-contain pr-4"
              />
            </li>
          </a>
          <a href="">
            <li>
              <img
                src={Medium}
                alt="Medium"
                className="md:h-20 h-10 w-full object-contain pr-4"
              />
            </li>
          </a>
          <a href="">
            <li>
              <img
                src={Spotify}
                alt="Spotify"
                className="md:h-20 h-10 w-full object-contain"
              />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Client;
