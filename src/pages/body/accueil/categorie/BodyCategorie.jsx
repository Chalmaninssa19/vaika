import './bodyCategorie.css'

function BodyCategorie() {
  return <>
        <section id="featured-cars" class="featured-cars">
			<div class="container">
				<div class="section-header">
					<h2 class="fw-bolder">Choisir votre categorie</h2>
				</div>
				<div class="featured-cars-content">
					<div class="row">
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
                                <a href="#">
                                    <div class="featured-img-box">
                                        <div class="featured-cars-img">
                                            <img src="./images/featured-cars/fc1.png" alt="cars"/>
                                        </div>
                                        <div class="featured-model-info">
                                            <p>
                                                Cabriolet
                                            </p>    
                                        </div>
                                    </div>
                                </a>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
                                <a href="#">
                                    <div class="featured-img-box">
                                        <div class="featured-cars-img">
                                            <img src="./images/featured-cars/fc2.png" alt="cars"/>
                                        </div>
                                        <div class="featured-model-info">
                                            <p>
                                                Citadine-Berline-Break
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
                                <a href="#">
                                    <div class="featured-img-box">
                                        <div class="featured-cars-img">
                                            <img src="./images/featured-cars/fc3.png" alt="cars"/>
                                        </div>
                                        <div class="featured-model-info">
                                            <p>
                                                Coupe-Sport
                                            </p>
                                        </div>
                                    </div>
                                </a>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
                                <a href="#">
                                    <div class="featured-img-box">
                                        <div class="featured-cars-img">
                                            <img src="./images/featured-cars/fc4.png" alt="cars"/>
                                        </div>
                                        <div class="featured-model-info">
                                            <p>
                                                Monospace-Minibus   
                                            </p>
                                        </div>
                                    </div>
                                </a>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
                                <a href="#">
                                    <div class="featured-img-box">
                                        <div class="featured-cars-img">
                                            <img src="./images/featured-cars/fc4.png" alt="cars"/>
                                        </div>
                                        <div class="featured-model-info">
                                            <p>
                                                Pickup-4x4  
                                            </p>
                                        </div>
                                    </div>
                                </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

  </>
}


export default BodyCategorie
