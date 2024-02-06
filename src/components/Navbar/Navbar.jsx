import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav flex w-full h-fit bg-[#FF9653] justify-center p-5">
      <div className="flex gap-12">
        <div className="logo">
          <Link to="/">
            <img
              src="/BethanysPieShop/images/logos/bethany-horizontal-logo.png"
              width={"150px"}
              height={"150px"}
              alt=""
            />
          </Link>
        </div>
        <div className="links flex gap-[10px] font-bold text-white items-center">
          <Link className="hover:bg-[#b4734b] pl-2 pr-2 rounded-md" to={"/"}>
            Home
          </Link>
          <Link
            className="hover:bg-[#b4734b] pl-2 pr-2 rounded-md"
            to="/allpies"
          >
            Pies
          </Link>
          <Link
            className="hover:bg-[#b4734b] pl-2 pr-2 rounded-md"
            to={"/contact"}
          >
            Contact
          </Link>
          <Link
            className="hover:bg-[#b4734b] pl-2 pr-2 rounded-md"
            to={"/about"}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
