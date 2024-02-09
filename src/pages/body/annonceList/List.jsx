import { Link } from 'react-router-dom';

function List({ data }) {
    return <>
        <div class="col-md-10 col-sm-6 list-annonces-box">
            <div class="row">
                <h2 class="fw-bold">Toutes les annonces</h2>
                {data && data.length > 0 ? (
                data.map(item => (
                    <div key={item.idAnnonce} class="col-sm-6 col-md-3 annonce-item">
                        <Link to={`/ficheAnnonce/${item.idAnnonce}`}>
                        <div class="single-annonce-box">
                            <div class="img-annonce">
                                <img src="./images/featured-cars/fc1.png" alt={item.marque+" "+item.modele}/>
                            </div>
                            <div class="annonce-info">
                                <p>
                                    {item.marque+" "+item.modele}
                                </p>
                            </div>
                            <div class="annonce-carac">
                                <div class="annonce-descri">
                                    <p>
                                        {item.lieu}
                                        <span class="featured-mi-span"> {item.energie} </span> 
                                        <span class="featured-hp-span"> {item.modeTransmission} </span>
                                        {item.anneeSortie}
                                    </p>
                                </div>
                                <div class="annonce-prix">{item.prix} Ar</div>
                            </div>
                        </div>
                        </Link>
                    </div>
         
                ))
                ) : (
                    <p>Chargement en cours...</p>
                )}
            </div>
        </div>
    </>
}

export default List