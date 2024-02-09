import FilterAnnonce from './FilterAnnonce'
import List from './List'
import './annoncesList.css'
import Navbar from "../../navbar-fixed/Navbar"
import Footer from "../../footer/Footer"

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

  
function AnnoncesList() {
    const [data, setData] = useState([]);


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const param = searchParams.get('param');
    const value = searchParams.get('value');
    
    let dataToUse;
  
    if (param && param.trim() !== '') {
        useEffect(() => {
            axios.get('http://localhost:1970/api/voiture/annonces/filter?param='+param+'&value='+value)
                .then(response => {
                    setData(response.data.data);
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        }, []);
    } else {
        useEffect(() => {
            axios.get('http://localhost:1970/api/voiture/annonces')
                .then(response => {
                    setData(response.data.data);
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        }, []);
    }

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
        {data && <List data ={data.annonces} />}
    </div>
    <Footer />
  </>
}

export default AnnoncesList
