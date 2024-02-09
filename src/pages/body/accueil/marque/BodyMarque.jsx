import './bodyMarque.css'
import { Link } from 'react-router-dom';

function BodyMarque({ data }) {
  return <>
        <section id="featured-cars" class="featured-cars">
			<div class="container">
				<div class="section-header">
					<h2 class="fw-bolder">Top 5 meilleurs marques</h2>
				</div>
				<div class="featured-cars-content">
					<div class="row">

                        {data && data.length > 0 ? (
                            data.map(item => (
                                <div key={item.idCategorie} className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-featured-cars">
                                        <Link to={`/annonces/filter?param=marque&value=${item.idMarque}`}>
                                            <div className="featured-img-box">
                                                <div className="featured-cars-img">
                                                <img src="./images/featured-cars/fc1.png" alt="cars"/>
                                                </div>
                                                <div className="featured-model-info">
                                                <p>{item.intitule}</p>    
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                            ) : (
                                <p>Chargement en cours...</p>
                            )}
                    </div>
				</div>
			</div>
		</section>
  </>
}


export default BodyMarque
