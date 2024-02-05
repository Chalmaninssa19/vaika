import './header.css'

function Header() {
  return <>
        <main class="container">
            <div class="row">
                <div class="col-sm-4 col-md-6">
					<div class="bg-light p-5 rounded">
						<h1>Bienvenue dans VAIKA MILAY</h1>
						<p class="lead fw-bolder">
						Votre destination pour des voitures d'occasions exceptionnelles
						</p>
						<p class="lead fw-normal">
						Explorez notre vaste selection de voitures d'occasion de haute qualite,
						soigneusement choisies pour repondre a vos besoins et a votre style de vie.
						Chez VAIKA MILAY, nous nous engageons a offrir une experience d'achat transparente
						et fiable.
						</p>
						<a class="btn btn-lg btn-success" href="../components/navbar/" role="button">Voir annonces</a>
					</div>
                </div>
                <div class="col-sm-4 col-md-6">
                	<img src="./images/welcome-hero/welcome-banner.jpg" class="img-fluid" alt="VAIKA MILAY"/>
                </div>
            </div>
        </main>
        <section id="service" class="service">
			<div class="container">
				<div class="service-content">
                    <div class="row">
                        <h2 class="fw-bolder">Pourquoi choisir VAIKA MILAY ?</h2>
                    </div>
					<div class="row service-items">
						<div class="col-md-3 col-sm-6">
							<div class="single-service-item">
								<div class="single-service-icon">
									<i class="flaticon-car"></i>
								</div>
								<h2>Qualite garantie</h2>
								<p class="lead fw-normal">
									Chacune de nos voitures d'occasion est rigoureusement 
                                    inspectee pour assurer une qualite optimale
								</p>
							</div>
						</div>
						<div class="col-md-3 col-sm-6">
							<div class="single-service-item">
								<div class="single-service-icon">
									<i class="flaticon-car"></i>
								</div>
								<h2>Large gamme de choix</h2>
								<p class="lead fw-normal">
									Trouvez la voiture parfaite parmi notre diversite de marques, modeles
                                    et options 
								</p>
							</div>
						</div>
						<div class="col-md-3 col-sm-6">
							<div class="single-service-item">
								<div class="single-service-icon">
									<i class="flaticon-car"></i>
								</div>
								<h2>Transparence totale</h2>
								<p class="lead fw-normal">
									Nous croyons en une tranparence totale. Otenez toutes les 
                                    informations necessaires sur le vehicule avant de prendre une 
                                    decision
								</p>
							</div>
						</div>
                        <div class="col-md-3 col-sm-6">
							<div class="single-service-item">
								<div class="single-service-icon">
									<i class="flaticon-car"></i>
								</div>
								<h2>Systeme de messagerie</h2>
								<p class="lead fw-normal">
									Simplifiez le processus d'achat en contactant le proprietaire
                                    par le systeme de messagerie. Vous pouvez y discuter librement et
                                    organiser votre achat
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
  </>
}


export default Header
