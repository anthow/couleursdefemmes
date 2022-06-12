import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoBoutique from "../components/logo_boutique"
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby"
import Pack from "../components/boutique/pack"
import Ceinture from "../components/boutique/ceinture"
import Collaboration from "../components/boutique/collaboration"
import Carte from "../components/boutique/carte"

const Boutique = ({ data }) => (
  <Layout>
    <Seo title="Boutique" />
    <section className="w-12/12">
      <header className=" w-12/12 mb-32 ">
        <HeaderProvi />
        <LogoBoutique />
      </header>
    </section>
    <Pack />
   <Ceinture />
<Collaboration/>
<Carte />
  </Layout>
)

export const query = graphql`
  {
    allDatoCmsBoutique {  
      edges {
        node {
          description
          id
          nomDuProduit
          prix
          originalId
          typeDeProduit
          url
          imagesProduits {
            gatsbyImageData(aspectRatio: 1.1)
          }
        }
      }
    }
  }
`

export default Boutique
