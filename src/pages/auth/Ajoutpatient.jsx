<<<<<<< HEAD
import React from 'react'

import { FaUser, FaUserLarge } from "react-icons/fa6";
import { Link } from 'react-router-dom';
{/* <FaUser /> */}


export const Ajoutpatient = () => {
  return (
      <div id="root" className='h-screen'>
      <div>
        
      <div className="flex  items-center py-5">
        <FaUserLarge className="text-xl  text-sky-600 bg-sky-200 mx-auto  p-2 w-36 h-36 rounded-full" width="" alt="Float UI logo" />
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Prénom :</span>
          </p>
          </div>

          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Nom :</span>
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Age :</span>
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Adresse :</span>
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Téléphone :</span>
          </p>
          </div>

          <div className="flex justify-center">
          <button className="w-2/5 py-3 text-white text-xl duration-150 bg-sky-500 
          rounded-lg hover:bg-sky-900 active:shadow-lg">
            <Link to="/dashbord/patients">Valider</Link></button>
        </div>

      </div>
    </div>
  )
}
=======
import React from 'react'

import { FaUser } from "react-icons/fa6";
{/* <FaUser /> */}


export const Ajoutpatient = () => {
  return (
    <div>Ajoutpatient</div>
  )
}
>>>>>>> 4b82636bdc7dc9af992838a8194007cffa7ba090
