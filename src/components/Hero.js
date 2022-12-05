import React from "react";

import { AiOutlineSearch } from 'react-icons/ai';
import { img1 } from "../assets";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img1}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">The Best Destination </h1>
          <p className="py-6">Top 1% of the world's most beautiful places</p>
          <div className="flex flex-row items-center relative max-w-xs">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <button className="btn btn-primary btn-circle btn-md absolute right-0"><AiOutlineSearch  className="icon" /> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
