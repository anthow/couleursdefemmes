import React, { useState } from "react";
import NavbarLinks from "./navarbarlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Logo from "../logo";

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <>
      <nav className=" w-10/12 m-auto flex pt-5 flex-col justify-between items-center">
        <article className="flex gap-x-10 items-center">
          <Link href="/">
          </Link>
        </article>
        <article className="hidden md:block">
          <NavbarLinks />
        </article>
        <article className=" flex items-center md:hidden">
          <Link href="/" >
          <h1 className=" mr-20 md:hidden"> Couleurs de Femmes </h1>
          </Link>
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded  border-black hover:text-black hover:border-black"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </article>
      </nav>
      <article className="md:hidden">
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <section className="w-10/12 m-auto justify-between text-center items-center py-2 md:flex ">
          <figure className="">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1645609363/couleurs%20de%20femmes/cdflogoartprimarygold-1_rgfp2g.jpg"
                width={200}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
              />
            </figure>
            <NavbarLinks />
          </section>
        </div>
      </article>
    </>
  );
};

export default Navbar;
