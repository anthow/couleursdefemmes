import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./navarbarlinks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Navigation = styled.nav`
  height: auto;
  display: flex;
  background-color: #fff;
  justify-content: space-around;
  width: 100%;
  z-index: 999;
  align-self: baseline;
  align-items: end;

  @media (max-width: 768px) {
    position: fixed;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    width:100%;
    padding-left:10px;
    z-index:999;

  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
    height:100vh;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = ({ data }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation classname="items-center z-50 align-center">
      <div classname=" ">
      <Link to="/">
        <h2 className=" md:hidden text-xl my-2 "> Couleurs de femmes </h2>
        </Link>
      </div>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <article className="flex flex-col align-center">
          <StaticImage className="w-8/12 mb-10 m-auto" src="../../images/cdflogoartprimarygold-1.jpg" alt="logo couleurs de femmes" />

          <button className=" flex items-center align-center m-auto md:hidden snipcart-checkout"> <FontAwesomeIcon icon={faShoppingCart} size="1x" className=" m-auto fonta mr-2" />
         <p> mon panier</p></button>
          </article>
          <NavbarLinks />

        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
      <article className="hidden md:block md:my-5">
        <button className="snipcart-checkout"><FontAwesomeIcon icon={faShoppingCart} size="1x" className=" fonta mr-2" />
          <span> mon panier</span>

        </button>
      </article>
    </Navigation>
  )
}


export default Navbar
