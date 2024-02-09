import './login.css'
import { MdWarning } from 'react-icons/md';


function Login() {
    return <>
        <div class="container login">
          <div class="error-login">
            <p class="text-danger">
              <MdWarning /> Erreur d'authentification : Verifier votre mot de passe
            </p>
          </div>
          <div class="title-login">
            <h2 class="fw-bold">Bienvenue dans notre systeme de messagerie interne, 
            Veuillez vous connecter</h2>
          </div>
          <div class="champ-login">
            <form action="/discussions" method="POST">
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email or username</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control login-input" id="inputEmail3"/>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control login-input" id="inputPassword3"/>
                </div>
              </div>
              <div class="row button-login">
                  <button type="submit" class="btn-success">Se connecter</button>
              </div> 
            </form>
          </div>
        </div>
    </>
  }
  
  
  export default Login
  