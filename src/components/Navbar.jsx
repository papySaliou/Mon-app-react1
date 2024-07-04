import React from "react";
import logo from "../assets/RVS 1.png";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-10">
      <Link to="/"> <img src={logo} alt="fghjkl" /></Link>
        
        <nav>
          <ul className="flex font-medium">
            <li>
              <Link to="/"> ACCUEIL</Link>
            </li>
            <li className="mx-20">
              <Link to="/rendezvous">MES RENDEZ-VOUS</Link>
            </li>
            <li>
              <Link to="/dashbord/compte">MON COMPTE</Link>
            </li>
          </ul>
        </nav>
        <div>
        <Link to="/connexion">
        <button className="bg-sky-500 p-4 rounded-xl font-semibold text-white">
            Connexion
          </button>
        </Link>
          
        <Link to="/deconnexion">
        <button className="mx-10 bg-black p-4 rounded-xl font-semibold text-white">
            Deconnexion
          </button>

        </Link>
          
        </div>
      </div>
      <Outlet />
    </>
  );
};
