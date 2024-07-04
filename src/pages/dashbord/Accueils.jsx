import React from "react";
import { FaBell } from "react-icons/fa6";
import imgUser from "../../assets/user.png";
import SecondCard from "../../components/SecondCard";
import { Link } from "react-router-dom";

export const Accueils = () => {
  const table = [
    {
      classess: "bg-sky-800 p-8 rounded-xl",
      numberss: "65",
      textess: "listes des Rendez-vous",
    },
    {
      classess: "bg-green-600 p-8 rounded-xl",
      numberss: "69",
      textess: "listes des Patients",
    },
    {
      classess: "bg-slate-900 p-8 rounded-xl",
      numberss: "86",
      textess: "listes des Rendez-vous",
    },
    {
      classess: "bg-sky-300 p-8 rounded-xl",
      numberss: "35",
      textess: "listes des Patients",
    },
  ];

  return (
    <div className="p-5 mx-16">
      <div className="flex justify-between items-start py-5">
        <div className="w-2/4">
          <h2 className="text-sky-600 text-2xl mb-5 font-semibold">
            Bienvenue ! Docteur
          </h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            explicabo, voluptates nostrum corporis illo voluptate assumenda
            officiis, ut sapiente facilis, officia quae quas!
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <FaBell className="text-2xl" />
          <Link to="/dashbord/compte">
            <img src={imgUser} className="w-10" alt="User" />
          </Link>
        </div>
      </div>
      <h2 className="text-7xl">Rendez-vous</h2>
      <div className="grid grid-cols-2 gap-5 my-5">
        {table.map((item, index) => (
          <SecondCard
            key={index}
            classe={item.classess}
            number={item.numberss}
            texte={item.textess}
          />
        ))}
      </div>
    </div>
  );
};
