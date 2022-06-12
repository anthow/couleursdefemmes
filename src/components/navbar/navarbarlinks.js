
import React from "react"
import { Link } from "gatsby"
import Logo from "../../components/logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavbarLinks = () => {
  return (
       <div className=" md:flex flex-col md:justify-items-center md:justify-center md:m-auto mt-10 md:-mt-0 text-center   w-12/12 text-xl    ">

    <figure className="hidden md:block">
         <Logo className="hidden md:block" />
        </figure> 
      <ul className="flex flex-col md:flex-row justify-center md:space-x-5 md:my-5">

        <li>
          <Link to="/">
            Accueil
          </Link>
        </li>
         

        <li>
        
          <div className="dropdown inline-block relative">
            <button className=" f rounded flex md:inline-flex items-center">
            <Link to="/boutique">
            Boutique
          </Link>
              <svg
                className="ml-2 fill-current h-4  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute z-50 bg-white p-5 hidden space-y-4  text-or pt-">
            <Link to="/boutique/#pack">
              <li className="md:w-max">Packs</li>
              </Link>
              <Link to="/boutique/#ceinture">
              <li className="md:w-max"> Ceintures</li>
              </Link>
              <Link to="/boutique/#collaboration">
              <li className="md:w-max"> Collaboration</li>
              </Link>
              <Link to="/boutique/#carte">
              <li className="md:w-max"> Carte cadeaux</li>
              </Link>
            </ul>
          </div>
        </li>



        <li>
          <Link to="/ceinture">
            La ceinture
          </Link>
        </li>
        <li>
          <Link to="/collaboration">
            Collaboration
          </Link>
        </li>
        <li className="hidden">
          <Link to="/actu">
            Actualités
          </Link>
        </li>
        <li className="hidden">
          <div className="dropdown inline-block relative">
            <button className=" f rounded flex md:inline-flex items-center">
              <Link to="/#">
                <li>Professionnels</li>
              </Link>
              <svg
                className="ml-2 fill-current h-4  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute z-50 bg-white p-5 hidden space-y-4  text-or pt-">
            <Link to="/inscription">
              <li className="md:w-max">Inscription</li>
              </Link>
              <Link to="/professionnels/boutique">
              <li className="md:w-max"> boutique</li>
              </Link>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
          </li>

    

     <li> <button className=" flex items-center align-center m-auto md:hidden snipcart-checkout"> <FontAwesomeIcon icon={faShoppingCart} size="1x" className=" m-auto fonta mr-2" />
         <p> mon panier</p></button></li>
      </ul>

    </div>
  )
}



export default NavbarLinks