import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function LogoTutoriel() {
  const data = useStaticQuery(graphql`
      {
        datoCmsLogo {
          logoPageTutorielSmartphone {
            gatsbyImageData(layout: FULL_WIDTH
              )
          }
          logoPageTutoriel {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    
  `)
  return (
    <header>
     <GatsbyImage className="hidden md:block" image={data.datoCmsLogo.logoPageTutoriel.gatsbyImageData}  />
     <GatsbyImage className="md:hidden" image={data.datoCmsLogo.logoPageTutorielSmartphone.gatsbyImageData}  />

    </header>
  )
}