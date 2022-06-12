import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

const Ceinture = () => (
  <StaticQuery
    query={graphql`
      {
        allDatoCmsBoutique(
          filter: {horsStockEnStock: {eq: true}, typeDeProduit: {eq: "Ceinture"}}
        ) {
          totalCount
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
    `}
    render={data => 
    <section id="ceinture" className="w-10/12 m-auto flex flex-col justify-center ">
    <h1 className=" titre text-4xl mb-10"> Les Ceintures</h1>
    <p>victime de leur succès, les ceintures sont en cours de réasort , 
  n'hésitez pas à prendre contact avec moi pour votre commande.</p>
    <div className="flex flex-col md: mb-20 md:grid md:grid-cols-3 m-auto md:gap-y-10 md:gap-x-16 ">
      {data.allDatoCmsBoutique.edges.map(({ node }) => {
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
                  {node.prix} euros
                </p>
              </Link>
            </article>
          )
      })}
    </div>
  </section>}
  ></StaticQuery>
)




export default Ceinture
