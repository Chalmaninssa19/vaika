import Header from '../../header/Header'
import BodyCategorie from './categorie/BodyCategorie'
import BodyMarque from './marque/BodyMarque'
import Navbar from "../../navbar-fixed/Navbar"
import Footer from "../../footer/Footer"
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function BodyAccueil() {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get('https://voiture-production-524c.up.railway.app/api/voiture/accueil')
          .then(response => {
              setData(response.data.data);
              console.log(response.data.data);
          })
          .catch(error => {
              console.error('Error fetching data: ', error);
          });
  }, []);

  return <>
      <Navbar />
      <Header />
      {data && <BodyCategorie data={data.categories}/>}
      {data && <BodyMarque data={data.marques}/>}
      <Footer />
  </>
}

export default BodyAccueil
