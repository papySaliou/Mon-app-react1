import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";
import axios from 'axios';

export const Patient = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = 'http://127.0.0.1:3005';

  const [editMode, setEditMode] = useState({
    prenom: false,
    nom: false,
    telephone: false,
    adresse: false
  });

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/patients/${id}`);
        setPatient(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du patient :", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchPatientDetails();
  }, [id]);

  const toggleEditMode = async (field) => {
    if (editMode[field]) {
      try {
        await axios.patch(`${API_URL}/patients/${id}`, { [field]: patient[field] });
      } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
      }
    }
    setEditMode(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field, value) => {
    setPatient(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`${API_URL}/patients/${id}`, patient);
      navigate('/dashbord/patients');
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du patient :", error);
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;
  if (!patient) return <div>Patient non trouvé</div>;

  return (
    <div id="root" className='h-screen'>
      <div>
        <div className="flex items-center py-3">
          <FaUserLarge className="text-xl text-sky-600 bg-sky-200 mx-auto p-2 w-24 h-24 rounded-full" alt="Float UI logo" />
        </div>
        <div className='w-3/5 mx-auto justify-between items-center py-2 border rounded-md border-slate-500'>
          {['prenom', 'nom', 'adresse', 'telephone'].map((field) => (
            <div key={field} className="my-3 px-5 py-5 flex w-3/4 mx-auto justify-between items-center">
              <p>
                <span className='font-semibold'>{field.charAt(0).toUpperCase() + field.slice(1)} :</span>
                {editMode[field] ? (
                  <input
                    value={patient[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    onBlur={() => toggleEditMode(field)}
                    className="mx-2 border rounded p-1"
                  />
                ) : (
                  <span className='mx-10'>{patient[field]}</span>
                )}
              </p>
              <svg
                onClick={() => toggleEditMode(field)}
                stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                style={{cursor: 'pointer'}}
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                <path d="m15 5 3 3"></path>
              </svg>
            </div>
          ))}

          <div className="my-3 px-5 py-5 flex w-3/4 mx-auto justify-between items-center">
            <p>
              <span className='font-semibold'>Mot de passe :</span>
              <span className='mx-10'>********</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center py-8">
          <button 
            onClick={handleSave}
            className="w-2/5 py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg"
          >
            Enregistrer
          </button>
        </div>

      </div>
    </div>
  );
};
