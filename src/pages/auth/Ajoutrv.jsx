import React, { useState } from 'react'
import logo from "../../assets/RVS 1.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export const Ajoutrv = () => {

  const [titre, setTitre] = useState('');
  const [avec, setAvec] = useState('');
  const [date, setDate] = useState('');
  const [heure, setHeure] = useState('');
  const [lieu, setLieu] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const detailsRv = {
      titre,
      avec,
      date,
      heure,
      lieu,
    };
    try {
      const response = await axios.post('http://127.0.0.1:3005/rendezvous', detailsRv, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.detailsRv);
      navigate("/dashbord/rv");
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la création du rendez-vous: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  
  return (
    <div id="root" className='h-screen'>
      <div>
        
      <div className="flex  items-center py-5">
          <img src={logo} alt="fghjkl"  className="text-xl  text-sky-600
       bg-sky-200 mx-auto  p-2 w-44 h-44 rounded-full" width=""  />
      </div>

      <form onSubmit={handleSubmit}>
      <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <label className='font-semibold '>Titre  Rendez-vous:</label>
            <input className='mx-5 outline-none' type="text" 
            value={titre}
            onChange={(e) => setTitre(e.target.value)}/>
          </p>
      </div>

      <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <label className='font-semibold '>Avec qui ? :</label>
            <input className='mx-5 outline-none' type="text"
            value={avec}
            onChange={(e) => setAvec(e.target.value)} />
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <label className='font-semibold '>Date Rendez-vous :</label>
            <input className='mx-2 outline-none' type="text" 
            value={date}
            onChange={(e) => setDate(e.target.value)} />
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <label className='font-semibold '>Heure Rendez-vous :</label>
            <input className='mx-2 outline-none' type="text"
            value={heure}
            onChange={(e) => setHeure(e.target.value)} />
          </p>
          </div>
          <div className="my-3 px-5 py-3 flex w-2/5 mx-auto justify-between items-center border rounded-xl border-slate-400">
          <p className='mx-4'>
            <label className='font-semibold '>Lieu Rendez-vous :</label>
            <input className='mx-2 outline-none' type="text" 
            value={lieu}
            onChange={(e) => setLieu(e.target.value)}/>
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

