import './bodyMarque.css'

function BodyMarque() {
  return <>
        <section id="featured-cars" class="featured-cars">
			<div class="container">
				<div class="section-header">
					<h2 class="fw-bolder">Top 5 meilleurs marques</h2>
				</div>
				<div class="featured-cars-content">
					<div class="row">
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
                                <a href="#">
                                    <div class="featured-img-box">
                                        <div class="featured-cars-img">
                                            <img src="./images/brand/br1.png" alt="cars"/>
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
                                            <img src="./images/brand/br2.png" alt="cars"/>
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
                                            <img src="./images/brand/br3.png" alt="cars"/>
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
                                            <img src="./images/brand/br4.png" alt="cars"/>
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
                                            <img src="./images/brand/br4.png" alt="cars"/>
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


export default BodyMarque
