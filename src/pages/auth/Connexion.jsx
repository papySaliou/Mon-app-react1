// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { SlSocialGoogle } from "react-icons/sl";
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// export const Connexion = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (dataConn) => {
//     try {
//       const response = await axios.post('http://localhost:4000/auth/signin', dataConn, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       // console.log(response.data);
//       // Redirection après une connexion réussie
//       navigate("/dashbord");
//     } catch (error) {
//       // console.error('Erreur:', error);
//       // Affichage d'un message d'erreur
//       alert('Erreur de connexion: ' + (error.response ? error.response.data.message : error.message));
//     }
//   };

//   return (
//     <div className="flex">
//       <div className="w-1/4 h-screen"></div>
//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start items-center w-2/4">
//         <h2 className="text-4xl m-5 font-bold">Se Connecter</h2>

//         <input
//           className="w-full p-5 m-3 bg-slate-50 py-3 rounded-xl"
//           type="email"
//           placeholder="Adresse e-mail"
//           {...register('mail', {
//             required: 'Email est requis',
//             pattern: {
//               value: /^\S+@\S+$/i,
//               message: 'Email invalide'
//             }
//           })}
//         />
//         {errors.mail && <span className="text-red-500">{errors.mail.message}</span>}

//         <input
//           className="w-full p-5 m-3 bg-slate-50 py-3 rounded-xl"
//           type="password"
//           placeholder="Mot de passe"
//           {...register('motdepass', {
//             required: 'Mot de passe est requis',
//             minLength: {
//               value: 8,
//               message: 'Mot de passe doit être au moins 8 caractères'
//             }
//           })}
//         />
//         {errors.motdepass && <span className="text-red-500">{errors.motdepass.message}</span>}

//         <button className="bg-sky-600 text-white py-3 rounded-xl text-xl font-bold w-full" type="submit">
//           Se Connecter
//         </button>

//         <button className="bg-black my-3 flex items-center justify-center text-white py-3 rounded-xl text-xl font-bold w-full">
//           Continuer avec Google
//           <SlSocialGoogle className="mx-5" />
//         </button>

//         <div className="p-4 m-4">
//           <h3>J'ai pas de compte ?  
//             <Link to="/inscrire" className="text-blue-500 font-bold">  S'inscrire</Link>
//           </h3>
//         </div>
//       </form>
//       <div className="w-1/4 h-screen"></div>
//     </div>
//   );
// };

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlSocialGoogle } from "react-icons/sl";
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const Connexion = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (dataConn) => {
    try {
      const response = await axios.post('http://localhost:3005/authentification/signin', dataConn, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Assurez-vous que la réponse contient les informations attendues
      console.log(response.data);

      // Stockez l'ID de l'utilisateur dans le localStorage ou un contexte global si nécessaire
      localStorage.setItem('userId', response.data.userId);

      // Redirection après une connexion réussie
      navigate("/dashbord");
    } catch (error) {
      console.error('Erreur:', error.response ? error.response.data : error.message);
      alert('Erreur de connexion: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start items-center w-2/4">
        <h2 className="text-4xl m-5 font-bold">Se Connecter</h2>

        <input
          className="w-full p-5 m-3 bg-slate-50 py-3 rounded-xl"
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
          className="w-full p-5 m-3 bg-slate-50 py-3 rounded-xl"
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

        <button className="bg-sky-600 text-white py-3 rounded-xl text-xl font-bold w-full" type="submit">
          Se Connecter
        </button>

        <button className="bg-black my-3 flex items-center justify-center text-white py-3 rounded-xl text-xl font-bold w-full">
          Continuer avec Google
          <SlSocialGoogle className="mx-5" />
        </button>

        <div className="p-4 m-4">
          <h3>J'ai pas de compte ?  
            <Link to="/inscrire" className="text-blue-500 font-bold">  S'inscrire</Link>
          </h3>
        </div>
      </form>
      <div className="w-1/4 h-screen"></div>
    </div>
  );
};

