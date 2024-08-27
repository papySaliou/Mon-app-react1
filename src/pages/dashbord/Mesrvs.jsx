


// import React, { useEffect, useState } from "react";
// import { TopNav } from "../../components/TopNav";
// import { FaCirclePlus } from "react-icons/fa6";
// import { IoIosArrowForward } from "react-icons/io";
// import { FaRegUserCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export const Mesrvs = () => {
//   const [rendezvous, setRendezvous] = useState([]);
  
//   const dates = new Date().toDateString();
//   const heure = new Date().toLocaleTimeString();

//   useEffect(() => {
//     const mesRv = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:3005/rendezvous');
//         setRendezvous(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des rendez-vous:', error);
//       }
//     };

//     mesRv();
//   }, []);

//   return (
//     <div className="p-12 mx-5">
//       <TopNav />
//       <div className="flex justify-between items-center my-10">
//         <h2 className="text-3xl font-bold text-slate-800">Mes Rendez-vous</h2>
//         <button>
//           <Link to="/dashbord/ajoutrv">
//             <FaCirclePlus className="text-3xl font-bold text-sky-500" />
//           </Link>
//         </button>
//       </div>
//       <table className="table-auto w-full border-slate-500">
//         <tbody>
//           {rendezvous.map((rv) => (
//             <tr key={rv.id}>
//               <td className="border-b-2 border-slate-600">
//                 <div className="flex gap-5 py-4 items-center">
//                   <span>
//                     <FaRegUserCircle className="text-4xl text-slate-800" />
//                   </span>
//                   <div className="flex flex-col">
//                     <span>{dates}</span>
//                     <span className="text-sky-500 font-semibold">
//                       <Link to={`/dashbord/detailsrv/${rv.id}`}>{rv.avec}</Link>
//                     </span>
//                   </div>
//                 </div>
//               </td>
//               <td className="border-b-2 border-slate-600">
//                 <div className="flex items-end flex-col">
//                   <span>{heure}</span>
//                   <button className="text-sky-600 text-2xl font-semibold">
//                     {/* <span > */}
//                       <Link to={`/dashbord/detailsrv/${rv.id}`}>
//                         <IoIosArrowForward />
//                       </Link>
//                     {/* </span> */}
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import { TopNav } from "../../components/TopNav";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const ITEMS_PER_PAGE = 4; // Nombre d'éléments par page

export const Mesrvs = () => {
  const [rendezvous, setRendezvous] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const mesRv = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3005/rendezvous');
        setRendezvous(response.data);
        setTotalPages(Math.ceil(response.data.length / ITEMS_PER_PAGE));
      } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous:', error);
      }
    };

    mesRv();
  }, []);

  // Calcul des éléments à afficher pour la page actuelle
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedRendezvous = rendezvous.slice(startIndex, endIndex);

  // Fonction pour changer de page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-12 mx-5">
      <TopNav />
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-bold text-slate-800">Mes Rendez-vous</h2>
        <button>
          <Link to="/dashbord/ajoutrv">
            <FaCirclePlus className="text-3xl font-bold text-sky-500" />
          </Link>
        </button>
      </div>
      <table className="table-auto w-full border-slate-500">
        <tbody>
          {paginatedRendezvous.map((rv) => (
            <tr key={rv.id}>
              <td className="border-b-2 border-slate-600">
                <div className="flex gap-5 py-4 items-center">
                  <span>
                    <FaRegUserCircle className="text-4xl text-slate-800" />
                  </span>
                  <div className="flex flex-col">
                    <span>{new Date().toDateString()}</span>
                    <span className="text-sky-500 font-semibold">
                      <Link to={`/dashbord/detailsrv/${rv.id}`}>{rv.avec}</Link>
                    </span>
                  </div>
                </div>
              </td>
              <td className="border-b-2 border-slate-600">
                <div className="flex items-end flex-col">
                  <span>{new Date().toLocaleTimeString()}</span>
                  <button className="text-sky-600 text-2xl font-semibold">
                    <Link to={`/dashbord/detailsrv/${rv.id}`}>
                      <IoIosArrowForward />
                    </Link>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center my-5">
        <button
          className="px-4 py-2 mx-1 bg-sky-400 rounded"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span>Page {currentPage} sur {totalPages}</span>
        <button
          className="px-4 py-2 mx-1 bg-sky-400 rounded"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};
