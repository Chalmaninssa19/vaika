import './ficheAnnonce.css'
import { FaGasPump } from 'react-icons/fa6'
import { BsCalendarDate } from 'react-icons/bs'
import { FaRoad } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa6'
import { FaCog } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import Navbar from "../../navbar-fixed/Navbar"
import Footer from "../../footer/Footer"
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function FicheAnnonce() {
    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://voiture-production-524c.up.railway.app/api/voiture/annonce/'+id)
            .then(response => {
                setData(response.data.data.annonce);
                console.log(response.data.data.annonce);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);


  return <>
    <Navbar />

    {data ? (
        

<   div class="container">
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
                        <h1 class="fw-bold">{data.marque+" "+data.modele}</h1>
                        <div class="d-flex flex-row bd-highlight mb-3 carac-item">
                            <div class="p-2 bd-highlight"><FaGasPump size={40}/> {data.energie} </div>
                            <div class="p-2 bd-highlight"><FaCog size={40}/> {data.modeTransmission} </div>
                            <div class="p-2 bd-highlight"><FaRoad size={40}/> <br></br>{data.kilometrage} Km </div>
                            <div class="p-2 bd-highlight"><BsCalendarDate size={40}/> {data.anneeSortie} </div>
                        </div>
                    </div>
                    <div class="tab-prix">
                        <h1 class="fw-bold text-primary">{data.prix} Ar</h1>  
                            <a href="/login">
                                <button class="btn btn-success btn-lg button-prix" type="submit">CONTACTER PROPRIETAIRE <FaPhone /></button>
                            </a>  
                            <a href="/discussions">
                                <button class="btn btn-primary btn-lg button-prix" type="submit">AJOUTER FAVORIS <FaHeart /> </button>
                            </a>
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
                            <span class="value">{data.marque}</span>
                        </div>
                        <div class="description-item">
                            <span class="">Couleur :</span>
                            <span class="value">{data.couleur}</span>
                        </div>
                        <div class="description-item">
                            <span class="">Modele :</span>
                            <span class="value">{data.modele}</span>
                        </div>
                        <div class="description-item">
                            <span class="">Kilometrage :</span>
                            <span class="value">{data.kilometrage} Km</span>
                        </div>
                        <div class="description-item">
                            <span class="">Boite de vitesse :</span>
                            <span class="value">{data.modeTransmission}</span>
                        </div>
                        <div class="description-item">
                            <span class="">Annee :</span>
                            <span class="value">{data.anneeSortie}</span>
                        </div>
                        <div class="description-item">
                            <span class="">Prix :</span>
                            <span class="value">{data.prix} Ar</span>
                        </div>
                        <div class="description-item">
                            <span class="">Autnomie :</span>
                            <span class="value">{data.autonomie} W</span>
                        </div>
                        <div class="description-item">
                            <span class="">Type de vehicule :</span>
                            <span class="value">{data.categorie}</span>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-6">
                        <div class="description-item">
                            <span class="">Energie :</span>
                            <span class="value">{data.energie}</span>
                        </div>
                        <div class="description-item">
                            <span class="">Portes :</span>
                            <span class="value">{data.nbPorte} portes</span>
                        </div>
                        <div class="description-item">
                            <span class="">Places :</span>
                            <span class="value">{data.nbSiege} places</span>
                        </div>
                        <div class="description-item">
                            <span class="">Villes :</span>
                            <span class="value">{data.lieu}</span>
                        </div>
                        <div class="description-item">
                            <span class="">Specification :</span>
                            <span class="value">{data.specification}</span>
                        </div>
                    </div>
                </div>
                <br></br>
                <h2 class="fw-bold">Description </h2>
                <hr></hr>
                    <p>
                        Mis en circulation pour la première fois le {data.anneeSortie}, ce véhicule {data.marque+" "+data.modele} 
                        d'occasion {data.energie} vous est proposé au prix de {data.prix} Ar.
                        {data.marque+" "+data.categorie} de couleur «{data.couleur}» avec {data.kilometrage} km à son compteur, 
                        cette automobile {data.marque+" "+data.modele+" "+data.energie} possède une boîte de vitesse {data.modeTransmission} et
                        une autonome de {data.autonomie} Watt. 
                        Ce véhicule d'occasion {data.nbPorte} portes (et {data.nbSiege} places) est accompagné d'une garantie 
                        «Autosphère Occasions Summum 12 mois».
                    </p>
            </div>
        </div>
    </div>
        ) : (
          <p>Chargement en cours...</p>
        )}

    <Footer />
  </>
}

export default FicheAnnonce
