import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlSocialGoogle } from "react-icons/sl";
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Inscrire() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (dataInsc) => {
    try {
      const response = await axios.post('http://localhost:3005/authentification/signup', dataInsc);

      console.log(response.dataInsc);
      // Redirection après une inscription réussie
      navigate("/connexion");
    } catch (error) {
      console.error('Erreur:', error);
      // Vous pouvez gérer l'affichage d'un message d'erreur ici
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start items-center w-2/4">
        <h2 className="text-4xl m-3 font-bold">S'inscrire</h2>

        <input
          className="w-full p-5 m-3 bg-slate-50 py-2 rounded-xl"
          type="text"
          placeholder="Nom"
          {...register('nom', { required: 'Nom est requis' })}
        />
        {errors.nom && <span className="text-red-500">{errors.nom.message}</span>}

        <input
          className="w-full p-5 m-3 bg-slate-50 py-2 rounded-xl"
          type="text"
          placeholder="Prénom"
          {...register('prenom', { required: 'Prénom est requis' })}
        />
        {errors.prenom && <span className="text-red-500">{errors.prenom.message}</span>}

        <input
          className="w-full p-5 m-3 bg-slate-50 py-2 rounded-xl"
          type="email"
          placeholder="Adresse e-mail"
          {...register('mail', {
            required: 'Email est requis',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Email invalide'
            }
          })}
        />
        {errors.mail && <span className="text-red-500">{errors.mail.message}</span>}

        <input
          className="w-full p-5 m-3 bg-slate-50 py-2 rounded-xl"
          type="password"
          placeholder="Mot de passe"
          {...register('motdepass', {
            required: 'Mot de passe est requis',
            minLength: {
              value: 8,
              message: 'Mot de passe doit être au moins 8 caractères'
            }
          })}
        />
        {errors.motdepass && <span className="text-red-500">{errors.motdepass.message}</span>}

        <button
          className="bg-sky-600 text-white py-2 rounded-xl text-xl font-bold w-full"
          type="submit"
        >
          S'inscrire
        </button>

        <Link to="/connexion" className="w-full">
          <button
            className="bg-black my-3 flex items-center justify-center text-white py-2 rounded-xl text-xl font-bold w-full"
          >
            Continuer avec Google
            <SlSocialGoogle className="mx-5" />
          </button>
        </Link>
      </form>
      <div className="w-1/4 h-screen"></div>
    </div>
  );
}

export default Inscrire;
