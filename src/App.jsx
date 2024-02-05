import { useState } from "react"
import BodyAccueil from "./pages/body/accueil/bodyAccueil"
import AnnoncesList from "./pages/body/annonceList/AnnoncesList"
import FicheAnnonce from "./pages/body/ficheAnnonce/FicheAnnonce"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from "./pages/login/Login";

function App() {
  return <>
      <Router>
        <Routes>
          <Route path='/' element={<BodyAccueil />} />
          <Route path='/annonces' element={<AnnoncesList />} />
          <Route path='/ficheAnnonce' element={<FicheAnnonce />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
  </>
}


export default App
