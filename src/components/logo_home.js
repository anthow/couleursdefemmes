import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function Logohome() {
  const data = useStaticQuery(graphql`
    {datoCmsLogo {
      logoAccueilSmart {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      logoCouleursDeFemme {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
  
  `)
  return (
    <header>
     <GatsbyImage className="md:hidden" image={data.datoCmsLogo.logoAccueilSmart.gatsbyImageData}  />
     <GatsbyImage className="hidden md:block" image={data.datoCmsLogo.logoCouleursDeFemme.gatsbyImageData}  />

    </header>
  )
}