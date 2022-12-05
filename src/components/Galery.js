import React from "react";

import { img1, img2, img3, img4, img5 } from "../assets";

const Galery = () => {
  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      <div className="relative">
        <img src={img1} className="h-full object-cover" />
        <p className="absolute bottom-2 left-2 text-gray-100 text-2xl capitalize font-semibold p-2 bg-gray-600 rounded">
          shoot one
        </p>
      </div>
      <div className="relative">
        <img src={img2} className="h-full object-cover" />
        <p className="absolute bottom-2 left-2 text-gray-100 text-2xl font-semibold bg-gray-600 rounded p-2">
          shoot two
        </p>
      </div>
      <div className="relative">
        <img src={img3} className="h-full object-cover" />
        <p className="absolute bottom-2 left-2 text-2xl font-semibold text-gray-100 p-2 bg-gray-600 rounded">
          shoot three
        </p>
      </div>
      <div className="relative">
        <img src={img4} className="h-full object-cover" />
        <p className="absolute bottom-2 left-2 text-2xl text-gray-100 p-2 font-semibold bg-gray-600 rounded">
          shoot four
        </p>
      </div>
      <div className="relative">
        <img src={img5} className="h-full object-cover" />
        <p className="absolute bottom-2 left-2 text-2xl font-semibold p-2 bg-gray-600 rounded text-gray-100">
          shoot five
        </p>
      </div>
    </div>
  );
};

export default Galery;
