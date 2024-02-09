import './messagerieInterne.css'
import Navbar from "../../navbar-fixed/Navbar"
import Footer from '../../footer/Footer'
import ListDiscussion from './ListDiscussion'
import Discussion from './Discussion'

function MessagerieInterne() {
  return <>
    <Navbar />
        <div class="row">
            <div class="bg-primary text-white header-annonce">
                <h2 class="fw-bold">Discuter librement dans le site VaikaMilay.com </h2>
                <p>Vous etes libres de discuter de votre negociation avec le proprietaire
                  du voiture qui vous interresse et gerer votre compte dans profile  
                </p>
            </div>
        </div>
        <div class="container-discussions">
            <div class="row">
              <ListDiscussion />
              <Discussion />
            </div>
        </div>
      <Footer />
  </>
}

export default MessagerieInterne
