import '../assets/dist/css/bootstrap.min.css'
import '../assets/dist/css/style.css'
import './navbar-top-fixed.css'
import { FaUser } from 'react-icons/fa6'
import Profile from '../body/profile/Profile'

function Navbar() {
  return <>
      <Profile />
      <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand text-success" href="#">VAIKA MILAY</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Type to search..." aria-label="Search"/>
              <button class="btn btn-success btn-lg" type="submit">Search</button>
          </form>
          <div class="collapse navbar-collapse" id="navbarCollapse" className="navbar">
            <ul class="navbar-nav me-auto mb-2 mb-md-0 navbar-right">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/annonces">Annonces</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ficheAnnonce">A propos</a>
              </li>
              <li class="nav-item profile-item">
                  <a>
                    <button class="btn btn-success btn-lg" data-bs-toggle="modal" href="#exampleModalToggle"  type="button"><FaUser /> Profile</button>
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </>
}


export default Navbar
