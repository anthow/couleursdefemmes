import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import LogoBoutique from "../../components/logo_boutique"
import HeaderProvi from "../../components/header-provi"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PackPro from "../../components/boutique/pack"

const BoutiquePro = ({ data }) => (
  <Layout>
    <Seo title="Boutique" />
    <section className="w-12/12">
      <header className=" w-12/12 mb-32 ">
        <figure></figure>
        <HeaderProvi />
        <LogoBoutique />
      </header>
    </section>
    <section className="w-10/12 m-auto flex flex-col justify-center ">
      <h1 className=" titre text-4xl mb-10"> Les Ceintures</h1>
victime de leur succès, les ceintures sont en cours de réasort , n'hésitez pas à prendre contact avec moi pour votre commande.
      <div className="flex flex-col md: mb-20 md:grid md:grid-cols-3 m-auto md:gap-y-10 md:gap-x-16 ">
        {data.allDatoCmsBoutique.edges.map(({ node }) => {
          if (node.typeDeProduit === "Ceinture")
            return (
              <article>
                <Link to={node.url}>
                  <figure className="">
                    <GatsbyImage
                      image={node.imagesProduits[0].gatsbyImageData}
                      className="rounded-lg mb-2"
                    />
                  </figure>
                  <h2 className="text-xl text-center mb-1">
                    {node.nomDuProduit}
                  </h2>
                  <p className="text-lg text-center text-gray-600">
                    {node.prixPro} euros
                  </p>
                </Link>
              </article>
            )
        })}
      </div>
    </section>

    <section className="w-10/12 m-auto flex flex-col justify-center ">
      <h1 className=" titre text-4xl mb-10"> La collaboration du moment</h1>

      <div className="flex flex-col md:grid md:grid-cols-3 m-auto md:gap-y-10 md:gap-x-16 ">
        {data.allDatoCmsBoutique.edges.map(({ node }) => {
          if (node.typeDeProduit === "Collaboration")
            return (
              <article>
                <Link to={node.url}>
                  <figure className="">
                    <GatsbyImage
                      image={node.imagesProduits[0].gatsbyImageData}
                      className="rounded-lg mb-2"
                    />
                  </figure>
                  <h2 className="text-xl text-center mb-1">
                    {node.nomDuProduit}
                  </h2>
                  <p className="text-lg text-center text-gray-600">
                    {node.prixPro} euros
                  </p>
                </Link>
              </article>
            )
        })}
      </div>
    </section>
    <PackPro />
  </Layout>
)

export const query = graphql`
  {
    allDatoCmsBoutique
    (
    filter: {horsStockEnStock: {eq: true}, pasProPro: {eq: true}}
  ) {
      edges {
        node {
          description
          id
          nomDuProduit
          prix
          originalId
          typeDeProduit
          prixPro
          url
          imagesProduits {
            gatsbyImageData(aspectRatio: 1.1)
          }
        }
      }
    }
  }
`

export default BoutiquePro
