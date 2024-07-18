<<<<<<< HEAD
import React from "react";
// import { FaListAlt } from "react-icons/fa";
import logo from "../assets/RVS 1.png"
import { Link } from "react-router-dom";

const SecondCard = (props) => {
  return (
    <div className={props.classe}>
      <div className="flex items-center justify-center">
        <span className="bg-white p-3 translate-x-2 font-bold rounded-xl">{props.number}</span>
        <span className="bg-white p-3 rounded-full">
          <Link to="/dashbord/patients">
          <img src={logo} width={45} />
          </Link>
        </span>
      </div>
      <Link to="/dashbord/patients">
      <h2 className="text-center text-2xl font-bold text-white">{props.texte}</h2>
      </Link>
    </div>
  );
};

export default SecondCard;
=======
import React from "react";
// import { FaListAlt } from "react-icons/fa";
import logo from "../assets/RVS 1.png"
import { Link } from "react-router-dom";

const SecondCard = (props) => {
  return (
    <div className={props.classe}>
      <div className="flex items-center justify-center">
        <span className="bg-white p-3 translate-x-2 font-bold rounded-xl">{props.number}</span>
        <span className="bg-white p-3 rounded-full">
          <Link to="/dashbord/patients">
          <img src={logo} width={45} />
          </Link>
        </span>
      </div>
      <Link to="/dashbord/patients">
      <h2 className="text-center text-2xl font-bold text-white">{props.texte}</h2>
      </Link>
    </div>
  );
};

export default SecondCard;
>>>>>>> 4b82636bdc7dc9af992838a8194007cffa7ba090
