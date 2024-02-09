import { useState } from "react"
import BodyAccueil from "./pages/body/accueil/bodyAccueil"
import AnnoncesList from "./pages/body/annonceList/AnnoncesList"
import FicheAnnonce from "./pages/body/ficheAnnonce/FicheAnnonce"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from "./pages/login/Login"
import MessagerieInterne from "./pages/body/messagerieInterne/MessagerieInterne"

function App() {
  return <>
      <Router>
        <Routes>
          <Route path='/' element={<BodyAccueil />} />
          <Route path='/annonces' element={<AnnoncesList />} />
          <Route path='/annonces/filter' element={<AnnoncesList />} />
          <Route path='/ficheAnnonce/:id' element={<FicheAnnonce />} />
          <Route path='/login' element={<Login />} />
          <Route path='/discussions' element={<MessagerieInterne />} />
        </Routes>
      </Router>
  </>
}


export default App
