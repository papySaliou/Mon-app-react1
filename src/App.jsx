import React from "react";
import { Navbar } from "./components/Navbar";
// import FirstScreen from "./components/FirstScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Connexion } from "./pages/auth/Connexion";
import { NoPage } from "./pages/auth/NoPage";
import Accueil from "./components/Accueil";
import { Deconnexion } from "./pages/auth/Deconnexion";
import Moncompte from "./pages/auth/Moncompte";
import Rendezvous from "./pages/auth/Rendezvous";
import Inscrire from "./pages/auth/Inscrire";

import { SecondDashboard } from "./components/SecondDashboard";
import { Accueils } from "./pages/dashbord/Accueils";
import { Mesrvs } from "./pages/dashbord/Mesrvs";
import { Mespatients } from "./pages/dashbord/Mespatients";
import { Mncompte } from "./pages/dashbord/Mncompte";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Accueil />} />
            <Route path="/rendezvous" element={<Rendezvous />} />
            <Route path="/moncompte" element={<Moncompte />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/deconnexion" element={<Deconnexion />} />
            <Route path="/inscrire" element={<Inscrire />} />
            <Route path="*" element={<NoPage />} />
          </Route>

           {/* dashboard */}

           <Route path="/dashbord" element={<SecondDashboard />}>
            <Route index element={<Accueils />} />
            {/* <Route path="/dashbord/accueils" element={<Accueils />} /> */}
            <Route path="/dashbord/rv" element={<Mesrvs />} />
            <Route path="/dashbord/patients" element={<Mespatients />} />
            <Route path="/dashbord/compte" element={<Mncompte />} />
          </Route>

        </Routes>

        
      </BrowserRouter>
    </>
  );
}

export default App;
