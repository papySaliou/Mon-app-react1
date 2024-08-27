// import React, { useState } from 'react';
// import { TopNav } from "../../components/TopNav";
// import { FaCirclePlus } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import user from '../../assets/user.png'

// import { FaUserGroup } from "react-icons/fa6";
// import { FaUserFriends } from "react-icons/fa";
// import { FaUserLarge } from "react-icons/fa6";


 

// export const Mespatients = () => {

//   const [patients, setPatients] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getPatients = async () => {
//       try {
//         const data = await fetchPatients();
//         setPatients(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     getPatients();
//   }, []);

//   if (loading) {
//     return <div>Chargement...</div>;
//   }

//   if (error) {
//     return <div>Erreur: {error.message}</div>;
//   }




//   // apiService.js


// const API_URL = 'http://127.0.0.1:3005'; // Remplacez par l'URL de votre API

//  const fetchPatients = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/patients`);
//     return response.data;
//   } catch (error) {
//     console.error("Erreur lors de la récupération des patients :", error);
//     throw error;
//   }
// };



//   return (



//     <div className="p-12 mx-5">
//       <TopNav />
//       <div className="flex justify-between items-center my-10">
//         <h2 className="text-3xl font-bold text-slate-800 mx-14">Mes Patients</h2>
//         <Link to="/dashbord/ajoutpatient">
//         <button>
//           <FaCirclePlus className="text-3xl font-bold text-green-500" />
//         </button>
//         </Link>
//       </div>

//       <div className="flex justify-end">
//         <table className="table-auto w-full mx-14">
//           <thead className='text-2xl'>
//             <tr >
//             <th className=" px-4 py-2 text-center"></th>
//               <th className=" px-4 py-2 text-center font-semibold">Prénom</th>
//               <th className="bpx-4 py-2 text-center font-semibold">Nom</th>
//               <th className=" px-4 py-2 text-center font-semibold">Profil</th>
//             </tr>
//           </thead>
//           <tbody>
            
//             <tr className='font-semibold'>
//               <td className=" px-4 py-2 text-center">
//              <FaUserLarge   className="mx-5 w-16 h-14 ml-2" alt="" />

//               </td>
//               <td className=" px-4 py-2 text-center">Alfreds</td>
//               <td className=" px-4 py-2 text-center">Futterkiste</td>
//               <td className=" px-4 py-2 text-center">
//                 <button className='bg-green-800 px-8 py-2 rounded-md border
//                  border-white text-white font-bold'>VOIR</button>
//               </td>
//             </tr>


//             <tr className="bg-slate-100 font-semibold">
//               <td className=" px-4 py-2 text-center">
//               <FaUserFriends className="mx-5 w-16 h-14  ml-2" alt="" />
                
//               </td>
//               <td className=" px-4 py-2 text-center">Centro</td>
//               <td className=" px-4 py-2 text-center">comercial Moctezuma</td>
//               <td className=" px-4 py-2 text-center">
//                 <button className='bg-green-800 px-8 py-2 rounded-md border
//                  border-white text-white font-bold'>VOIR</button>
//               </td>
//             </tr>
//             <tr className='font-semibold'>
//               <td className=" px-4 py-2 text-center">
//               <FaUserGroup  className="mx-5 w-16 h-14 ml-2" alt="" />
                
//               </td>
              
//               <td className=" px-4 py-2 text-center"> 
//                 <Link to ="/dashbord/patient">Ernst</Link></td>
//               <td className=" px-4 py-2 text-center">
//                 <Link to="/dashbord/patient">Handel</Link></td>
//               <td className=" px-4 py-2 text-center">
//                 <Link to="/dashbord/patient">
                
//                 <button className='bg-green-500 px-8 py-2 rounded-md border border-white text-white font-bold'>VOIR</button>
//                 </Link>
//               </td>
//             </tr>
//             <tr className="bg-slate-100 font-semibold">
//               <td className=" px-4 py-2 text-center">
//               <FaUserFriends className="mx-5 w-16 h-14 ml-2" alt="" />
                
//               </td>
//               <td className=" px-4 py-2 text-center">Ernst</td>
//               <td className=" px-4 py-2 text-center">Handel</td>
//               <td className=" px-4 py-2 text-center">
//                 <button className='bg-green-800 px-8 py-2 rounded-md border border-white text-white font-bold'>VOIR</button>
//               </td>
//             </tr>
            
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
import React, { useEffect, useState } from 'react';
import { TopNav } from "../../components/TopNav";
import { FaCirclePlus, FaUserLarge } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Mespatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'http://127.0.0.1:3005'; // Remplacez par l'URL de votre API

  const fetchPatients = async () => {
    try {
      const response = await axios.get(`${API_URL}/patients`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des patients :", error);
      throw error;
    }
  };

  useEffect(() => {
    const getPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getPatients();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error.message}</div>;
  }

  return (
    <div className="p-12 mx-5">
      <TopNav />
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-bold text-slate-800 mx-14">Mes Patients</h2>
        <Link to="/dashbord/ajoutpatient">
          <button>
            <FaCirclePlus className="text-3xl font-bold text-green-500" />
          </button>
        </Link>
      </div>

      <div className="flex justify-end">
        <table className="table-auto w-full mx-14">
          <thead className='text-2xl'>
            <tr>
              <th className="px-4 py-2 text-center"></th>
              <th className="px-4 py-2 text-center font-semibold">Prénom</th>
              <th className="px-4 py-2 text-center font-semibold">Nom</th>
              <th className="px-4 py-2 text-center font-semibold">Profil</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className={`font-semibold ${patient.id % 2 === 0 ? 'bg-slate-100' : ''}`}>
                <td className="px-4 py-2 text-center">
                  <FaUserLarge className="mx-5 w-16 h-14 ml-2" alt="" />
                </td>
                <td className="px-4 py-2 text-center">{patient.prenom}</td>
                <td className="px-4 py-2 text-center">{patient.nom}</td>
                <td className="px-4 py-2 text-center">
                  <Link to={`/dashbord/patient/${patient.id}`}>
                    <button className='bg-green-800 px-8 py-2 rounded-md border border-white text-white font-bold'>
                      VOIR
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
