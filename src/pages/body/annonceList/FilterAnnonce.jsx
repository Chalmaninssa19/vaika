import React, { useState } from 'react';
import axios from 'axios';


function FilterAnnonce({data}) {

    return <>
        <div class="col-md-2 col-sm-6 filter">
            <div class="row filter-title">
                <div class="col-sm-6 col-md-12">
                    <h2 class="fw-bolder fs-1">Filtres avancees</h2>
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
                                {data && 
                                data.lieux.map(item => (
                                    <option value={item.idLieu}>{item.intitule}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Categorie</label>
                            <select class="form-select" aria-label="Default select example" name="categorie"
                             value={formData.categorie} onChange={handleChange}>
                                {data && 
                                data.categories.map(item => (
                                    <option value={item.idCategorie}>{item.intitule}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Marque</label>
                            <select class="form-select" aria-label="Default select example" name="marque"
                             value={formData.marque} onChange={handleChange}>
                                {data && 
                                data.marques.map(item => (
                                    <option value={item.idMarque}>{item.intitule}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Energie</label>
                            <select class="form-select" aria-label="Default select example" name="energie"
                             value={formData.energie} onChange={handleChange}>
                                {data && 
                                data.energies.map(item => (
                                    <option value={item.idEnergie}>{item.intitule}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Mode transmission</label>
                            <select class="form-select" aria-label="Default select example" name="mode_transmission"
                            value={formData.modeTransmission} onChange={handleChange}>
                                {data && 
                                data.modeTransmission.map(item => (
                                    <option value={item.idModeTransmission}>{item.intitule}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Couleur</label>
                            <select class="form-select" aria-label="Default select example" name="couleur"
                            value={formData.couleur} onChange={handleChange}>
                                {data && 
                                data.couleurs.map(item => (
                                    <option value={item.idCouleur}>{item.intitule}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Specification</label>
                            <select class="form-select" aria-label="Default select example" name="specification"
                            value={formData.specification} onChange={handleChange}>
                                {data && 
                                data.specifications.map(item => (
                                    <option value={item.idSpecification}>{item.intitule}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Annee</label>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="min" name="anneeMin" value={formData.anneeMin} onChange={handleChange}/>
                        </div>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="max" name="anneeMax" value={formData.anneeMax} onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Prix</label>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="min" name="prixMin" value={formData.prixMin} onChange={handleChange}/>
                        </div>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="max" name="prixMax" value={formData.prixMax} onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Date</label>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="min" name="dateMin" value={formData.dateMin} onChange={handleChange}/>
                        </div>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="max" name="dateMax" value={formData.dateMax} onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="col-12 d-grid gap-2 col-6 mx-auto validate-button">
                        <button class="btn btn-success btn-lg" type="submit">Valider</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default FilterAnnonce