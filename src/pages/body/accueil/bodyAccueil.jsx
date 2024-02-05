import Header from '../../header/Header'
import BodyCategorie from './categorie/BodyCategorie'
import BodyMarque from './marque/BodyMarque'
import Navbar from "../../navbar-fixed/Navbar"
import Footer from "../../footer/Footer"

function BodyAccueil() {
  return <>
      <Navbar />
      <Header />
      <BodyCategorie />
      <BodyMarque />
      <Footer />
  </>
}

export default BodyAccueil
