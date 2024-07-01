import React from "react";
import image1 from "../assets/image1.png";
import { Link } from "react-router-dom";

export default function FirstSreen() {
  return (
    <div className="flex items-center px-10 overflow-hidden">
      <div>
        <h1 className="text-8xl">Rendez-Vous</h1>
        <p className="my-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          sed dolores praesentium porro perspiciatis sit quaerat omnis, quae
          quia asperiores recusandae ex unde mollitia dignissimos consequuntur!
          Excepturi aliquam quam et!
        </p>
        <Link to='/inscrire'>
          <button className="bg-sky-600 text-white py-2 rounded-xl text-xl font-bold w-full">
            Commencer
          </button>
        </Link>
      </div>
      <div>
        <img src={image1} className="max-w-xl" alt="" />
        <div className="relative bottom-16">
          <div className="bg-sky-950 absolute right-5 rotate-45 w-48 h-48 rounded-xl"></div>
          <div className="bg-sky-500 absolute right-16 rotate-45 w-48 h-48 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
