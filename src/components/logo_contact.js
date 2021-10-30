import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function LogoContact() {
  const data = useStaticQuery(graphql`
    query logoContactQuery {
      datoCmsLogo {
     
            logoPageContact {
              gatsbyImageData(layout: FULL_WIDTH
                outputPixelDensities: 0.5     )
            }
            logoPageContactSmartphone {
              gatsbyImageData(
      height:1000)
            }
            
      }
    }
  `)
  return (
    <header>
     <GatsbyImage className="hidden md:block" image={data.datoCmsLogo.logoPageContact.gatsbyImageData}  />

    </header>
  )
}