import './profile.css'

function Profile() {
    return <>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <img src="./images/profiles/author1.jpg" alt="Rakoto jean"/>
                        <h5 class="modal-title" id="exampleModalToggleLabel">Rakoto Jean</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                Voir historiques annonces
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" data-bs-target="#modalFavoris" data-bs-toggle="modal">
                                liste favoris
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel2">Historiques annonces</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                Vous avez vendu le BMW 208 le 02/01/2024.
                                <a href="#">Voir annonce</a>
                            </p>
                        </div>
                        <div class="modal-body">
                            <p>
                                Vous avez vendu le PEUGEOT 206 le 02/04/2024.
                                <a href="#">Voir annonce</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modalFavoris" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel2">Annonces favoris</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <a href="#">
                            <div class="row row-favoris">
                                <div class="col-md-2">
                                    <img src="./images/featured-cars/fc1.png" alt="Rakoto jean" width={50} height={50}/>
                                </div>
                                <div class="col-md-10">
                                    BMW 206...
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div class="row row-favoris">
                                <div class="col-md-2">
                                    <img src="./images/featured-cars/fc1.png" alt="Rakoto jean" width={50} height={50}/>
                                </div>
                                <div class="col-md-10">
                                    PORSCHE 42...
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  }
  
  
  export default Profile
  