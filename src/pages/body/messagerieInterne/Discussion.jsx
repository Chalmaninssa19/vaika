function Discussion() {
  return <>
            <div class=" col-sm-6 col-md-9 discussion">
                <div class="row profile-bar">
                    <div class="col-sm-4 col-md-4 bar-discussion-title">
                      <h2>Ma discussion</h2>
                    </div>
                    <div class="col-sm-4 col-md-1 img-bar-box">
                      <img src="./images/profiles/author1.jpg" alt="Rakoto jean"/>
                    </div>
                    <div class="col-sm-4 col-md-6 descri-bar-box">Rakoto Jean</div>
                </div>
                <div class="row messages">
                  <div class="col-md-4 col-md-5 message-recu">
                    <div class = "text-box-recu">
                      <p>
                        Salut! Je suis interresse.. 
                      </p>
                    </div>
                    <div class="date">
                      <p>
                        Sam, 11:40 
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 col-md-5 message-send">
                    <div class = "text-box-send">
                      <p>
                        Bonjour! Qu'est ce que je puissse faire pour vous monsieur
                      </p>
                    </div>
                    <div class="date">
                      <p>
                        Sam, 11:40 
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 col-md-4 message-send">
                    <div class = "text-box-send">
                      <p>
                        J'aimerai juste demander le prix de votre voiture BMW 208 
                      </p>
                    </div>
                    <div class="date">
                      <p>
                        Sam, 11:40 
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 col-md-4 message-recu">
                    <div class = "text-box-recu">
                      <p>
                        C'est au prix de 23000000 Ar
                      </p>
                    </div>
                    <div class="date">
                      <p>
                        Sam, 11:40 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 sender-form">
                  <form action="/discussions" method="POST">
                      <input type="text" class="input-sender" placeholder="Ecrivez un message"/>
                      <button type="submit" class="btn-success btn-sender">Envoyer</button>
                  </form>
                </div>
            </div>
  </>
}

export default Discussion
