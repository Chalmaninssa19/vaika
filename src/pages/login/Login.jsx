import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate depuis react-router-dom
import { MdWarning } from 'react-icons/md';
import './login.css';

function Login() {
  const navigate = useNavigate(); // Utiliser useNavigate pour la redirection
  const [redirectToDiscussion, setRedirectToDiscussion] = useState(false); // Ajouter un état pour gérer la redirection

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, vous pouvez ajouter la logique de vérification d'authentification, puis :
    setRedirectToDiscussion(true); // Définir redirectToDiscussion à true pour déclencher la redirection
  };

  if (redirectToDiscussion) {
    navigate('/discussions'); // Rediriger vers la page de discussion en utilisant navigate
  }

  return (
    <div className="login">
      <div className="error-login">
        <p className="text-danger">
          <MdWarning /> Erreur d'authentification : Veuillez vérifier votre mot de passe
        </p>
      </div>
      <div className="title-login">
        <h2 className="fw-bold">Bienvenue dans notre système de messagerie interne, Veuillez vous connecter</h2>
      </div>
      <div className="champ-login">
        <form onSubmit={handleSubmit}> {/* Utiliser onSubmit pour gérer la soumission du formulaire */}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-md-2 col-form-label">Email or username</label>
            <div className="col-md-8">
              <input type="email" className="form-control login-input" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-md-2 col-form-label">Password</label>
            <div className="col-md-8">
              <input type="password" className="form-control login-input" id="inputPassword3" />
            </div>
          </div>
          <div className="row button-login">
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
