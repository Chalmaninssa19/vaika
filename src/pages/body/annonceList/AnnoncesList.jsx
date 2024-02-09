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
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        modele: '',
        lieu: '',
        categorie: '',
        marque: '',
        energie: '',
        modeTransmission: '',
        couleur: '',
        specification: '',
        anneeMin: '',
        anneeMax: '',
        prixMin: '',
        prixMax: '',
        dateMin: '',
        dateMax: '',
    });
    const [error, setError] = useState(null);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const param = searchParams.get('param');
    const value = searchParams.get('value');

    useEffect(() => {
        if (param && param.trim() !== '') {
            axios.get(`voiture-production-524c.up.railway.app/api/voiture/annonces/filter?param=${param}&value=${value}`)
                .then(response => {
                    setData(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        } else {
            axios.get('http://localhost:1970/api/voiture/annonces')
                .then(response => {
                    setData(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        }
    }, [param, value]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:1970/api/voiture/annonces/filter/multiCritere', formData);
            console.log(response.data);
            setData(response.data.data);
            setError(null);
        } catch (error) {
            console.log(error.response.data.message);
            setError(error.response.data.message);
            setData([]); // Réinitialisez les données en cas d'erreur
        }

        setLoading(false);
    };



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


    <div class="col-md-2 col-sm-6 filter">
            <div class="row filter-title">
                <div class="col-sm-6 col-md-12">
                    <h2 class="fw-bolder fs-3">Filtres avancees</h2>
                </div>
            </div>
            <div class="row filter-box">
                <form onSubmit={handleSubmit}>
                    <div class="mb-3 row filter-row">
                        <div class="col-sm-4 col-md-12">
                        <label for="exampleFormControlInput1" class="fw-bold fs-5">Description du modele</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="Entrer une modele..." name="modele"  value={formData.modele}
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="fw-bold fs-5">Lieu</label>
                            <select class="form-select" aria-label="Default select example" name="lieu"
                             value={formData.lieu} onChange={handleChange}>
                                {data.datasForFilter && 
                                data.datasForFilter.lieux.map(item => (
                                    <option value={item.idLieu}>{item.intitule}</option>
                                ))}
                                <option value="">None</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Categorie</label>
                            <select class="form-select" aria-label="Default select example" name="categorie"
                             value={formData.categorie} onChange={handleChange}>
                                {data.datasForFilter && 
                                data.datasForFilter.categories.map(item => (
                                    <option value={item.idCategorie}>{item.intitule}</option>
                                ))}
                                <option value="">None</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Marque</label>
                            <select class="form-select" aria-label="Default select example" name="marque"
                             value={formData.marque} onChange={handleChange}>
                                {data.datasForFilter && 
                                data.datasForFilter.marques.map(item => (
                                    <option value={item.idMarque}>{item.intitule}</option>
                                ))}
                                <option value="">None</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Energie</label>
                            <select class="form-select" aria-label="Default select example" name="energie"
                             value={formData.energie} onChange={handleChange}>
                                {data.datasForFilter && 
                                data.datasForFilter.energies.map(item => (
                                    <option value={item.idEnergie}>{item.intitule}</option>
                                ))}
                                <option value="">None</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Mode transmission</label>
                            <select class="form-select" aria-label="Default select example" name="modeTransmission"
                                value={formData.modeTransmission} onChange={handleChange}>
                                    {data.datasForFilter && 
                                    data.datasForFilter.modeTransmission.map(item => (
                                        <option value={item.idModeTransmission}>{item.intitule}</option>
                                    ))}
                                <option value="">None</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Couleur</label>
                            <select class="form-select" aria-label="Default select example" name="couleur"
                            value={formData.couleur} onChange={handleChange}>
                                {data.datasForFilter && 
                                data.datasForFilter.couleurs.map(item => (
                                    <option value={item.idCouleur}>{item.intitule}</option>
                                ))}
                                <option value="">None</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Specification</label>
                            <select class="form-select" aria-label="Default select example" name="specification"
                            value={formData.specification} onChange={handleChange}>
                                {data.datasForFilter && 
                                data.datasForFilter.specifications.map(item => (
                                    <option value={item.idSpecification}>{item.intitule}</option>
                                ))}
                                <option value="">None</option>
                            </select>
                        </div>
                    </div>

                    <div class="row filter-row">
                        <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Annee</label>
                        <div class="col-sm-2 col-md-6">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="min" name="anneeMin" value={formData.anneeMin} onChange={handleChange}/>
                        </div>
                        <div class="col-sm-2 col-md-6">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="max" name="anneeMax" value={formData.anneeMax} onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Prix</label>
                        <div class="col-sm-2 col-md-6">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="min" name="prixMin" value={formData.prixMin} onChange={handleChange}/>
                        </div>
                        <div class="col-sm-2 col-md-6">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="max" name="prixMax" value={formData.prixMax} onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Date</label>
                        <div class="col-sm-2 col-md-6">
                            <input type="date" class="form-control" id="exampleFormControlInput1" 
                            placeholder="min" name="dateMin" value={formData.dateMin} onChange={handleChange}/>
                        </div>
                        <div class="col-sm-2 col-md-6">
                            <input type="date" class="form-control" id="exampleFormControlInput1" 
                            placeholder="max" name="dateMax" value={formData.dateMax} onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="col-12 d-grid gap-2 col-6 mx-auto validate-button">
                        <button class="btn btn-success btn-lg" type="submit">Valider</button>
                    </div>
                </form>
            </div>
        </div>        
                                    
        {data && <List data ={data.annonces} loading = {loading}/>}
    </div>
    <Footer />
  </>
}

export default AnnoncesList
