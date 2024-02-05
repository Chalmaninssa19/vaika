function FilterAnnonce() {
    return <>
        <div class="col-md-2 col-sm-6 filter">
            <div class="row filter-title">
                <div class="col-sm-6 col-md-12">
                    <h2 class="fw-bolder fs-3">Filtres avancees</h2>
                </div>
            </div>
            <div class="row filter-box">
                <form action="" method="POST">
                    <div class="mb-3 row filter-row">
                        <div class="col-sm-4 col-md-12">
                        <label for="exampleFormControlInput1" class="fw-bold fs-5">Description du modele</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="Entrer une desciption..."/>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="fw-bold fs-5">Lieu</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>ANTANANARIVO</option>
                                <option value="1">TOAMASINA</option>
                                <option value="2">MAHAJANGA</option>
                                <option value="3">TOLIARA</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Categorie</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Berline</option>
                                <option value="1">Citadine</option>
                                <option value="2">4x4</option>
                                <option value="3">Minibus</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Marque</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Nissan</option>
                                <option value="1">Renault</option>
                                <option value="2">BMW</option>
                                <option value="3">Toyota</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Energie</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Diesel</option>
                                <option value="1">Essence</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Mode transmission</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Manuelle</option>
                                <option value="1">Automatique</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Couleur</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Noir</option>
                                <option value="1">Blanc</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <div class="col-sm-4 col-md-12">
                            <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Specification</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Bluetooth</option>
                                <option value="1">Climatiseur</option>
                            </select>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Annee</label>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="min"/>
                        </div>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="max"/>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Prix</label>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="min"/>
                        </div>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="max"/>
                        </div>
                    </div>
                    <div class="row filter-row">
                        <label for="exampleFormControlInput1" class="form-label fw-bolder fs-5">Date</label>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="min"/>
                        </div>
                        <div class="col-sm-2 col-md-4">
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            placeholder="max"/>
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