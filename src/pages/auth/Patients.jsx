// src/components/DetailsRv.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const DetailsRv = () => {
  const { id } = useParams();
  const [rendezvous, setRendezvous] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRendezvous = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3005/rendezvous/${id}`);
        setRendezvous(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRendezvous();
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error.message}</div>;
  }

  return (
    <div className="p-12 mx-5">
      <h2 className="text-3xl font-bold text-slate-800">Détails du Rendez-vous</h2>
      <div className="my-10">
        <p><strong>Avec:</strong> {rendezvous.avec}</p>
        <p><strong>Date:</strong> {new Date(rendezvous.date).toLocaleDateString()}</p>
        <p><strong>Heure:</strong> {new Date(rendezvous.date).toLocaleTimeString()}</p>
        <p><strong>Description:</strong> {rendezvous.description}</p>
      </div>
    </div>
  );
};
