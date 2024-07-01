import React from "react";
import { FaBell } from "react-icons/fa6";
// import imgUser from "../assets/user.png";

export const TopNav = () => {
  return (
    <div className="flex items-center justify-between">
      <input
        type="search"
        placeholder="Rechercher"
        className="bg-black text-white p-4 rounded-full w-3/5"
      />
      <div className="flex gap-5 items-center">
        <FaBell className="text-2xl" />
        {/* <img src={imgUser} className="w-10" alt="" /> */}
      </div>
    </div>
  );
};
