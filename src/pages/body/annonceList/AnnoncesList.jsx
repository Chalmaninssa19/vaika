import FilterAnnonce from './FilterAnnonce'
import List from './List'
import './annoncesList.css'
import Navbar from "../../navbar-fixed/Navbar"
import Footer from "../../footer/Footer"

function AnnoncesList() {
  return <>
      <Navbar />
    <div class="row">
        <div class="bg-primary text-white header-annonce">
            <h2 class="fw-bold">Trouvez des voitures d'occasions de qualite chez VAIKA MILAY </h2>
            <p>Vous etes libres de choisir des voitures dans votre gout et d'entretenir avec 
                le proprietaire grace au syteme de messagerie interne    
            </p>
        </div>
    </div>
    <div class="row list-annonces">
        <FilterAnnonce/>
        <List />
    </div>
    <Footer />
  </>
}

export default AnnoncesList
