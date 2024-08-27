import React, { useState } from 'react'

import {  FaUserLarge } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



export const Ajoutpatient = () => {

  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');
  const [adresse, setAdrsse] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const detailsPatient = {
      prenom,
      nom,
      age,
      adresse,
      telephone,
    };

    try { 
      // 
      const response = await axios.post('http://127.0.0.1:3005/patients', detailsPatient, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.detailsRv);
      navigate("/dashbord/patients");
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la création du rendez-vous: ' + 
        (error.response ? error.response.data.message : error.message));
    }
  };


  return (
      <div id="root" className='h-screen'>
      <div>
        
      <div className="flex  items-center py-5">
        <FaUserLarge className="text-xl  text-sky-600
         bg-sky-200 mx-auto  p-2 w-36 h-36 rounded-full" width="" alt="Float UI logo" />
      </div>
      <form onSubmit={handleSubmit}>

          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <label className='font-semibold '>Prénom :</label>
            <input className='mx-5 outline-none' type="text" 
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}/>
          </p>
          </div>

          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <label className='font-semibold '>Nom :</label>
            <input className='mx-5 outline-none' type="text" 
            value={nom}
            onChange={(e) => setNom(e.target.value)}/>
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <label className='font-semibold '>Age :</label>
            <input className='mx-5 outline-none' type="text" 
            value={age}
            onChange={(e) => setAge(e.target.value)}/>
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <label className='font-semibold '>Adresse :</label>
            <input className='mx-5 outline-none' type="text" 
            value={adresse}
            onChange={(e) => setAdrsse(e.target.value)}/>
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <label className='font-semibold '>Téléphone :</label>
            <input className='mx-5 outline-none' type="text" 
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}/>
          </p>
          </div>

          <div className="flex justify-center">
          <button className="w-2/5 py-3 text-white text-xl duration-150
             bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg" type="submit">
              Valider
            </button>

        </div>
        </form>

      </div>
    </div>
  )
}
