
import React from "react";
import { Link } from "react-router-dom";
import { SlSocialGoogle } from "react-icons/sl";
// import Inscrire from "./Inscrire";
// import { FcGoogle } from "react-icons/fc";

export const Deconnexion = () => {
  return (
    <div className=" flex">
      <div className="w-1/4 h-screen"></div>
      <div className="flex flex-col justify-start items-center w-2/4">
        <h2 className="text-4xl m-5 font-bold">Se Connecter</h2>
        <input className="w-full p-5 m-4 bg-slate-50 py-3 rounded-xl" type="text" placeholder="Adresse e-mail" />
        <input className="w-full p-5 m-4 bg-slate-50 py-3 rounded-xl"  type="password" placeholder="Mot de passe" />
        <Link to="/connexion" className="w-full">
          <button className="bg-sky-600 text-white py-3 rounded-xl text-xl font-bold w-full">
            Se Connecter
          </button>
        </Link>
        <Link to="/connexion" className="w-full">
          <button className="bg-black  my-3 flex items-center justify-center text-white py-3 rounded-xl text-xl font-bold w-full">
            Continuer avec Google
            <SlSocialGoogle className="mx-5" />
            {/* <FcGoogle  className="mx-5"/> */}
          </button>
        </Link>
        <div className="p-4 m-4">
        <h3>Mot de passe oublié ? 
          <Link to="/inscrire" className="text-blue-500 font-bold">S'inscrire
          </Link></h3>
      </div>
      </div>
      
      <div className="w-1/4 h-screen"></div>
    </div>
  );
};
