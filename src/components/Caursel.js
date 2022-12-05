import React from "react";
import { img1, img2, img3, img4, img5 } from "../assets";

const Caursel = () => {
  return (
    <>
      <div className="carousel w-full h-[45vh] m-4">
        <div id="item1" className="carousel-item w-full">
          <img src={img1} className="w-full object-cover" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img2} className="w-full object-cover" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full object-cover" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={img4} className="w-full object-cover" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mb-10">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Caursel;
