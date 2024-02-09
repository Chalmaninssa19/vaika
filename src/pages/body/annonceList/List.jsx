import React from 'react';
import { Link } from 'react-router-dom';

function List({ data, loading}) {
    return (
        <div className="col-md-10 col-sm-6 list-annonces-box">
            <div className="row">
                <h2 className="fw-bold">Toutes les annonces</h2>
                {loading ? (
                     <p>Chargement en cours...</p>
                ) : data === undefined ? (
                    <p>Chargement en cours...</p>
                ) : data.length === 0 ? (
                    <p>Aucun résultat</p>
                ) : (
                    data.map(item => (
                        <div key={item.idAnnonce} className="col-sm-6 col-md-3 annonce-item">
                            <Link to={`/ficheAnnonce/${item.idAnnonce}`}>
                                <div className="single-annonce-box">
                                    <div className="img-annonce">
                                        <img src="./images/featured-cars/fc1.png" alt={item.marque + " " + item.modele} />
                                    </div>
                                    <div className="annonce-info">
                                        <p>
                                            {item.marque + " " + item.modele}
                                        </p>
                                    </div>
                                    <div className="annonce-carac">
                                        <div className="annonce-descri">
                                            <p>
                                                {item.lieu}
                                                <span className="featured-mi-span"> {item.energie} </span>
                                                <span className="featured-hp-span"> {item.modeTransmission} </span>
                                                {item.anneeSortie}
                                            </p>
                                        </div>
                                        <div className="annonce-prix">{item.prix} Ar</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default List;
