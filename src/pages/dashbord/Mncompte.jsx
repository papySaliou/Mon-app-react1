import React from 'react';
import user from "../../assets/user.png"
import { Link } from 'react-router-dom';

export const Mncompte = () => {
  return (
    <div id="root" className='h-screen'>
      <div>
        <h1 className="text-4xl text-center text-sky-500 py-5">Rendez-vous</h1>
        <div className="flex items-center">
          <img src={user} className="bg-sky-500 p-2 ms-14 translate-x-8 rounded-full" width="120" alt="Float UI logo" />
          <h4 className="bg-sky-500 font-bold ps-11 text-2xl h-14 w-full flex items-center text-white ">
             <span className='mx-20'>Mon Compte</span></h4>
        </div>
        <div className="p-2 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className="flex flex-col mx-5">
            <span className="text-xl font-bold text-sky-500">Dr DIOUF</span>
            <span className='py- font-semibold'>Dentiste</span>
          </p>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-5xl text-sky-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4l3 3 3-3h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 3c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zM7.177 16c.558-1.723 2.496-3 4.823-3s4.266 1.277 4.823 3H7.177z"></path>
          </svg>
        </div>
        <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Adresse :</span>
            <span className='mx-10'>Diamniadio, Rufisque</span>
          </p>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
            <path d="m15 5 3 3"></path>
          </svg>
        </div>
        <div className="my-5 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Téléphone :</span>
            <span className='mx-10'>+221 78 569 99 21</span>
          </p>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
            <path d="m15 5 3 3"></path>
          </svg>
        </div>
        <div className="my-5 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Adresse e-mail :</span>
            <span className='mx-10'>papydiouf@gmail.sn</span>
          </p>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
            <path d="m15 5 3 3"></path>
          </svg>
        </div>
        <div className="my-5 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <span className='font-semibold '>Mot de passe :</span>
            <span className='mx-10'>xxxxxx</span>
          </p>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
            <path d="m15 5 3 3"></path>
          </svg>
        </div>
        <div className="flex justify-center">
          <button className="w-2/5 py-3 text-white duration-150 bg-sky-500 
          rounded-lg hover:bg-sky-900 active:shadow-lg">
            <Link to="/dashbord">Enregistrer</Link></button>
        </div>
      </div>
    </div>
  );
};
