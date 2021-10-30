
import React from "react"
import { Link } from "gatsby"
import Logo from "../../components/logo"

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
     
      <Link to="/boutique">
            Boutique
          </Link>
        

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
        <li>
          <Link to="/contact">
            Contact
          </Link>
          </li>
     
      </ul>

    </div>
  )
}



export default NavbarLinks