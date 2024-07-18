import React from "react";
import { TopNav } from "../../components/TopNav";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Mesrvs = () => {
    
  const date = new Date().toDateString();
  const heure = new Date().toLocaleTimeString();

  return (
    <div className="p-12 mx-5">
      <TopNav />
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-bold text-slate-800">Mes Rendez-vous</h2>
        <button>
          <Link to="/dashbord/ajoutrv">
          <FaCirclePlus className="text-3xl font-bold text-sky-500" /></Link>
        </button>
      </div>
      <table class="table-auto w-full border-slate-500">
        <tbody>
          <tr>
            <td class="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <FaRegUserCircle className="text-4xl text-slate-800" />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-500 font-semibold">Saliou Diouf</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-slate-800 text-2xl font-semibold">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  
                  <FaRegUserCircle className="text-4xl text-slate-800" />
                
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-500 font-semibold">
                    <Link to="/dashbord/detailsrv">Pape Saliou</Link></span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <Link to="/dashbord/detailsrv"><span>{heure}</span></Link>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
                    <Link to="/dashbord/detailsrv"><IoIosArrowForward /></Link>
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <FaRegUserCircle className="text-4xl text-slate-800" />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-500 font-semibold">Pape Saliou</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-slate-800 text-2xl font-semibold">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <FaRegUserCircle className="text-4xl text-slate-800" />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-500 font-semibold">Diouf Saliou</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-slate-800 text-2xl font-semibold">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
