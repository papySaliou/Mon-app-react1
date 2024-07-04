import React from "react";
import { FaBell } from "react-icons/fa6";
import user from "../assets/user.png";
import { FiSearch } from "react-icons/fi";

export const TopNav = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center h-16 bg-black text-white mx-10 rounded-full w-4/5">
      <FiSearch className="mx-10 w-12" />
      <input
      
        type="search"
        placeholder="Rechercher"
        className="bg-black text-white p-4 rounded-full w-3/5"
        
      />
      </div>
      
      
      <div className="flex gap-5 items-center">
        <FaBell className="text-4xl" />
        <img src={user} className="mx-5 w-12 ml-2" alt="" />
      </div>
    </div>
  );
};
