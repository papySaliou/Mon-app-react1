import React from "react";
import { TopNav } from "../../components/TopNav";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
export const Mesrvs = () => {
    
  const date = new Date().toDateString();
  const heure = new Date().toLocaleTimeString();

  return (
    <div className="p-12">
      <TopNav />
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-bold text-sky-500">Mes Rendez-vous</h2>
        <button>
          <FaCirclePlus className="text-3xl font-bold text-sky-500" />
        </button>
      </div>
      <table class="table-auto w-full border-slate-500">
        <tbody>
          <tr>
            <td class="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <FaRegUserCircle className="text-5xl text-sky-600" />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">A.latyr</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
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
                  <FaRegUserCircle className="text-5xl text-sky-600" />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">A.latyr</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
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
                  <FaRegUserCircle className="text-5xl text-sky-600" />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">A.latyr</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
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
                  <FaRegUserCircle className="text-5xl text-sky-600" />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">A.latyr</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
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
