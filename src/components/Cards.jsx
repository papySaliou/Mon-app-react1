<<<<<<< HEAD
import React from "react";
import { FaUserFriends } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className={props.className}>
      <div className="flex items-center justify-center">
        <p className="bg-white p-3 font-bold rounded-xl">{props.number}</p>
        <div className="bg-white p-3 rounded-full">
          <FaUserFriends />
        </div>
      </div>
      <h2 className="text-white text-3xl text-center">{props.text}</h2>
    </div>
  );
};

export default Card;
=======
import React from "react";
import { FaUserFriends } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className={props.className}>
      <div className="flex items-center justify-center">
        <p className="bg-white p-3 font-bold rounded-xl">{props.number}</p>
        <div className="bg-white p-3 rounded-full">
          <FaUserFriends />
        </div>
      </div>
      <h2 className="text-white text-3xl text-center">{props.text}</h2>
    </div>
  );
};

export default Card;
>>>>>>> 4b82636bdc7dc9af992838a8194007cffa7ba090
