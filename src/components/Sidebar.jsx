import React from "react";
import logo from "../assets/RVS 1.png";
import userphoto from "../assets/user.png";
import { BsGridFill } from "react-icons/bs";
import { FaHome, FaConciergeBell, FaUserFriends } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="flex flex-col">
      <img
        className="bg-white rounded-xl mx-auto my-5"
        src={logo}
        alt="Mon_logo"
      />
      <button className="bg-white w-full flex items-center gap-3 justify-center py-5 rounded-r-xl">
        <BsGridFill />
        Tableau de bord
      </button>
      <ul className="my-10 mx-auto">
        <li>
          <img src={userphoto} className="w-28" alt="user_photo" />
        </li>
        <li>
          <Link
            className="flex items-center gap-3 text-white py-3"
            to="/dashbord/accueil"
          >
            <FaHome className="text-sky-900 text-xl" />
            Accueil
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-3 text-white py-3"
            to="/dashbord/rv"
          >
            <FaConciergeBell className="text-sky-900 text-xl" />
            Mes Rendez-vous
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-3 text-white py-3"
            to="/dashbord/patient"
          >
            <FaUserFriends className="text-sky-900 text-xl" />
            Mes Patients
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-3 text-white py-3"
            to="/dashbord/compte"
          >
            <BiSolidUserCircle className="text-sky-900 text-xl" />
            Mon compte
          </Link>
        </li>
      </ul>
      <Link to='/'>
        <button class="mx-auto group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1">
          <div class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
            <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            Logout
          </div>
        </button>
      </Link>
    </div>
  );
};
