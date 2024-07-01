// import React from "react";
// import { BsFillBellFill } from "react-icons/bs";
// import userphoto from "../assets/user.png";
// import Card from "../components/Card";

// const Accueil = () => {
//   const table = [
//     {
//       className: "bg-sky-700 p-10",
//       number: "98",
//       text: "Liste des rendez-vous",
//     },
//     {
//       className: "bg-green-700 p-10",
//       number: "76",
//       text: "Liste des patients",
//     },
//     {
//       className: "bg-purple-700 p-10",
//       number: "29",
//       text: "Liste des client",
//     },
//     {
//       className: "bg-yellow-700 p-10",
//       number: "49",
//       text: "Liste des employers",
//     },
//   ];
//   return (
//     <div className="p-8">
//       <div className="flex justify-between gap-5">
//         <div className="w-1/2">
//           <h2 className="text-3xl font-bold text-sky-600">Bienvenu! Docteur</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//             Voluptatem, aspernatur error! Nisi voluptatum omnis, a unde soluta
//             perferendis nam iste alias nulla tempore in eligendi ipsa magnam vel
//             minima impedit?
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <BsFillBellFill className="text-3xl" />
//           <img className="w-14" src={userphoto} alt="user" />
//         </div>
//       </div>

//       <h2 className="text-7xl my-5">Rendez-Vous</h2>
//       <div className="grid grid-cols-2 gap-5">
//             {table.map((awa) => {
//             return (
//                 <Card
//                 className={awa.className}
//                 number={awa.number}
//                 text={awa.text}
//                 />
//             );
//             })}
//         {/* <Card className="bg-green-700 p-10" number="98" text='bonsoir awa' />
//         <Card className="bg-sky-700 p-10" number="98" text='bonsoir awa' />
//         <Card className="bg-red-700 p-10" number="98" text='bonsoir awa' />
//         <Card className="bg-pink-800 p-10" number="98" text='bonsoir awa' /> */}
//       </div>
//     </div>
//   );
// };

// export default Accueil;

// src/pages/dashbord/Accueils.jsx
// import React from 'react';

// export const Accueils = () => {
//   return (
//     <div>
//       <h1>Bienvenue au tableau de bord</h1>
//     </div>
//   );
// };


import React from "react";
import { FaBell } from "react-icons/fa6";
import imgUser from "../../assets/user.png";
import SecondCard from "../../components/SecondCard";

export const Accueils = () => {
  const table = [
    {
      classess: "bg-sky-600 p-8 rounded-xl",
      numberss: "102",
      textess: "listes patients",
    },
    {
      classess: "bg-green-600 p-8 rounded-xl",
      numberss: "98",
      textess: "listes rendez-vous",
    },
    {
      classess: "bg-pink-600 p-8 rounded-xl",
      numberss: "48",
      textess: "listes personnels",
    },
    {
      classess: "bg-yellow-600 p-8 rounded-xl",
      numberss: "39",
      textess: "listes frais",
    },
  ];

  return (
    <div className="p-10">
      <div className="flex justify-between items-start py-5 ">
        <div className="w-2/4">
          <h2 className="text-sky-600 text-3xl font-bold">
            Bienvenue ! Docteur
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            explicabo, voluptates nostrum corporis illo voluptate assumenda
            officiis, ut sapiente facilis, officia quae quas!
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <FaBell className="text-2xl" />
          <img src={imgUser} className="w-10" alt="" />
        </div>
      </div>
      <h2 className="text-7xl">Rendez-vous</h2>
      <div className="grid grid-cols-2 gap-5 my-5">
        {table.map((latyr) => (
          <SecondCard
            classe={latyr.classess}
            number={latyr.numberss}
            texte={latyr.textess}
          />
        ))}
      </div>
    </div>
  );
};
