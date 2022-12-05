import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-3xl font-bold">Shark Beach</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Destination</a>
          </li>
          <li>
            <a>Travel</a>
          </li>
          <li>
            <a>Book</a>
          </li>
          <li>
            <a>View</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
