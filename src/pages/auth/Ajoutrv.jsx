import React from 'react'
import logo from "../../assets/RVS 1.png"
import { Link } from 'react-router-dom'

export const Ajoutrv = () => {
  return (
    <div id="root" className='h-screen'>
      <div>
        
      <div className="flex  items-center py-5">
      <img src={logo} alt="fghjkl"  className="text-xl  text-sky-600
       bg-sky-200 mx-auto  p-2 w-44 h-44 rounded-full" width=""  />
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Titre  Rendez-vous:</span>
          </p>
          </div>

          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Avec qui ? :</span>
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Date Rendez-vous :</span>
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Heure Rendez-vous :</span>
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Lieu Rendez-vous :</span>
          </p>
          </div>

          <div className="flex justify-center">
          <button className="w-2/5 py-3 text-white text-xl duration-150 bg-sky-500 
          rounded-lg hover:bg-sky-900 active:shadow-lg">
            <Link to="/dashbord/rv">Valider</Link></button>
        </div>

      </div>
    </div>
  )
}
