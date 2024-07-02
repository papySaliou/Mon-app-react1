

import React from 'react';
import { TopNav } from "../../components/TopNav";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

export const Mespatients = () => {
  return (
    <div className="p-12 mx-5">
      <TopNav />
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-bold text-slate-800">Mes Patients</h2>
        <button>
          <FaCirclePlus className="text-3xl font-bold text-sky-500" />
        </button>
      </div>
      {/* <table class="table-auto w-full border-slate-500">
        <tbody>
          <tr>
            <td class="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <FaRegUserCircle className="text-4xl text-slate-800" />
                </span>
                <div className="flex flex-col">
                  <span className=" font-semibold">Saliou Diouf</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
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
                
                  <span className=" font-semibold">Pape Saliou</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
               
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
                 
                  <span className=" font-semibold">Pape Saliou</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                
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
                
                  <span className=" font-semibold">Diouf Saliou</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                
                <button>
                  <span className="text-slate-800 text-2xl font-semibold">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table> */}

<table class="table-auto w-full items-center border-slate-500 ">
  <tbody>
  <tr class="border-b-2 gap-10 justify-start border-slate-600 ">
    <th className='gap-10'>Prénom</th>
    <th>Nom</th>
    <th>Profil</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  </tbody>
</table>
    </div>
  );
};
