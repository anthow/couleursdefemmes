import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function LogoBoutique() {
  const data = useStaticQuery(graphql`
  {
    datoCmsLogo {
      logoPageBoutiqueSmartphone {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      logoPageBoutique {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`)
  return (
    <header>
     <GatsbyImage  className="hidden md:block" image={data.datoCmsLogo.logoPageBoutique.gatsbyImageData}  />
     <GatsbyImage className="md:hidden" image={data.datoCmsLogo.logoPageBoutiqueSmartphone.gatsbyImageData}  />

    </header>
  )
}