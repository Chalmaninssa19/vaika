import './ficheAnnonce.css'
import { FaGasPump } from 'react-icons/fa6'
import { BsCalendarDate } from 'react-icons/bs'
import { FaRoad } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa6'
import { FaCog } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import Navbar from "../../navbar-fixed/Navbar"
import Footer from "../../footer/Footer"

function FicheAnnonce() {

  return <>
    <Navbar />
    <div class="container">
        <div class="row ">
            <div class="col-sm-4 col-md-8">
                <div class="profil-image">
                    <img src="./images/welcome-hero/welcome-banner.jpg" class="img-fluid" alt="VAIKA MILAY"/>
                </div>
                <div class="secondary-image">
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <div class="p-2 bd-highlight image-item">
                            <div class="image">
                                <img src="./images/welcome-hero/welcome-banner.jpg" class="img-fluid" alt="VAIKA MILAY"/>
                            </div>
                        </div>
                        <div class="p-2 bd-highlight image-item">
                            <div class="image">
                                <img src="./images/welcome-hero/welcome-banner.jpg" class="img-fluid" alt="VAIKA MILAY"/>
                            </div>
                        </div>
                        <div class="p-2 bd-highlight image-item">
                            <div class="image">
                                <img src="./images/welcome-hero/welcome-banner.jpg" class="img-fluid" alt="VAIKA MILAY"/>
                            </div>
                        </div>
                        <div class="p-2 bd-highlight image-item">
                            <div class="image">
                                <img src="./images/welcome-hero/welcome-banner.jpg" class="img-fluid" alt="VAIKA MILAY"/>
                            </div>
                        </div>
                        <div class="p-2 bd-highlight image-item">
                            <div class="image">
                                <img src="./images/welcome-hero/welcome-banner.jpg" class="img-fluid" alt="VAIKA MILAY"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 col-md-4">
                <div class="tab">
                    <div class="tab-carac">
                        <h1 class="fw-bold">BMW Serie 4 Gran Coupe 430d BVA...</h1>
                        <div class="d-flex flex-row bd-highlight mb-3 carac-item">
                            <div class="p-2 bd-highlight"><FaGasPump size={40}/> Essence </div>
                            <div class="p-2 bd-highlight"><FaCog size={40}/> Manuelle </div>
                            <div class="p-2 bd-highlight"><FaRoad size={40}/> <br></br>22 300 Km </div>
                            <div class="p-2 bd-highlight"><BsCalendarDate size={40}/> 2020 </div>
                        </div>
                    </div>
                    <div class="tab-prix">
                        <h1 class="fw-bold text-primary">35000000 Ar</h1>    
                            <button class="btn btn-success btn-lg button-prix" type="submit">CONTACTER PROPRIETAIRE <FaPhone /></button>
                            <button class="btn btn-primary btn-lg button-prix" type="submit">AJOUTER FAVORIS <FaHeart /> </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-md-8">
                <h2 class="fw-bold">Caracteristiques du vehicule</h2>
                <hr></hr>
                <div class="row">
                    <div class="col-sm-4 col-md-6">
                        <div class="description-item">
                            <span class="">Marque :</span>
                            <span class="value">PEUGEOT</span>
                        </div>
                        <div class="description-item">
                            <span class="">Couleur :</span>
                            <span class="value">Blanc nacre</span>
                        </div>
                        <div class="description-item">
                            <span class="">Modele :</span>
                            <span class="value">3008</span>
                        </div>
                        <div class="description-item">
                            <span class="">Kilometrage :</span>
                            <span class="value">22 300 Km</span>
                        </div>
                        <div class="description-item">
                            <span class="">Boite de vitesse :</span>
                            <span class="value">Automatique</span>
                        </div>
                        <div class="description-item">
                            <span class="">Annee :</span>
                            <span class="value">2022</span>
                        </div>
                        <div class="description-item">
                            <span class="">Prix :</span>
                            <span class="value">35 000 000 Ar</span>
                        </div>
                        <div class="description-item">
                            <span class="">Puissance :</span>
                            <span class="value">10 CV</span>
                        </div>
                        <div class="description-item">
                            <span class="">Type de vehicule :</span>
                            <span class="value">Berline</span>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-6">
                        <div class="description-item">
                            <span class="">Energie :</span>
                            <span class="value">Diesel</span>
                        </div>
                        <div class="description-item">
                            <span class="">Portes :</span>
                            <span class="value">5 portes</span>
                        </div>
                        <div class="description-item">
                            <span class="">Places :</span>
                            <span class="value">5 places</span>
                        </div>
                        <div class="description-item">
                            <span class="">Villes :</span>
                            <span class="value">ANTANANARIVO</span>
                        </div>
                        <div class="description-item">
                            <span class="">Provenance :</span>
                            <span class="value">Particulier</span>
                        </div>
                    </div>
                </div>
                <br></br>
                <h2 class="fw-bold">Description </h2>
                <hr></hr>
                    <p>
                        Mis en circulation pour la première fois le 28/04/2022, ce véhicule Peugeot 
                        3008 d'occasion HYBRID 225ch Allure Pack e-EAT8 vous est proposé au prix de 36 590 €.
                        Peugeot Suv de couleur «blanc nacré (n)» avec 22 588 km à son compteur, 
                        cette automobile Peugeot 3008 Hybride possède une boîte de vitesse automatique et
                        une puissance de 10 chevaux fiscaux, pour une puissance réelle de 181 Ch din. 
                        Ce véhicule d'occasion 5 portes (et 5 places) est accompagné d'une garantie 
                        «Autosphère Occasions Summum 12 mois».
                    </p>
            </div>
        </div>
    </div>
    <Footer />
  </>
}

export default FicheAnnonce
