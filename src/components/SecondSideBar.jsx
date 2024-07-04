import React from "react";
import logo from "../assets/RVS 1.png";
import { IoGrid, IoHomeSharp } from "react-icons/io5";
import { FaConciergeBell, FaListAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import user from "../assets/user.png";
import { RiLogoutCircleLine } from "react-icons/ri";

export const SecondSideBar = () => {
  return (
    <div>
      <Link to="/">
      <img src={logo} className="bg-white mx-auto my-5 rounded-xl" alt="" width="130"/></Link>
      <ul className=" font-semibold text-sky-600 text-xl ">
        <Link to="/dashbord">
          <li className="flex items-center gap-4 bg-white  p-4">
            <IoGrid className="text-xl mx-5 text-sky-600" />
            Tableau de bord
          </li>
        </Link>
        <li>
          <img src={user} className="w-24 mx-auto my-4" alt="" />
        </li>
        <Link to="/dashbord">
          <li className="flex items-center mx-5 gap-4 hover:bg-sky-900 p-3 text-white">
            <IoHomeSharp className="text-xl text-sky-600" />
            Accueil
          </li>
        </Link>
        <Link to="/dashbord/rv">
          <li className="flex items-center mx-5 gap-4 hover:bg-sky-900 p-3 text-white">
            <FaConciergeBell className="text-xl text-sky-600" />
            Mes Rendez-vous
          </li>
        </Link>
        <Link to="/dashbord/patients">
          <li className="flex items-center mx-5 gap-4 hover:bg-sky-900 p-3 text-white">
            <FaListAlt className="text-xl text-sky-600" />
            Mes Patients
          </li>
        </Link>
        <Link to="/dashbord/compte">
          <li className="flex items-center mx-5 gap-4 hover:bg-sky-900 p-3 text-white">
            <FaCircleUser className="text-xl text-sky-600" />
            Mon Compte
          </li>
        </Link>
      </ul>

      <Link to="/">
          <button className="flex items-center mx-5 font-bold border
           border-white bg-sky-600 rounded-xl gap-4 hover:bg-sky-900 p-3 text-xl text-white">
            <RiLogoutCircleLine  className="text-2xl text-white" />
            Déconnexion
          </button>
        </Link>
    </div>
  );
};
