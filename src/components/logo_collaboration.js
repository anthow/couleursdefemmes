import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



export default function LogoCollaboration() {
  const data = useStaticQuery(graphql`
    query logoCollaborationQuery {
      datoCmsLogo {
        logoCollaboration {
                gatsbyImageData(layout: FULL_WIDTH)
          
        }
        logoCollaborationSmartphone {
          gatsbyImageData(layout: FULL_WIDTH)
    
  }
      }
    }
  `)
  return (
    <header>
     <GatsbyImage  image={data.datoCmsLogo.logoCollaboration.gatsbyImageData}   className="hidden md:block"  />
     <GatsbyImage  image={data.datoCmsLogo.logoCollaborationSmartphone.gatsbyImageData}   className="md:hidden"  />

    </header>
  )
}