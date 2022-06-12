import React from "react"
import { useStaticQuery, graphql,Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const PackPro = () => {
  const data = useStaticQuery(graphql`
       {
      allDatoCmsBoutique(
    filter: {horsStockEnStock: {eq: true}, pasProPro: {eq: true}}
  ) {
        edges {
          node {
            description
          id
          nomDuProduit
          prix
          prixPro
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
  `)
  return   <section className="w-10/12 m-auto flex flex-col justify-center ">
  <h1 className=" titre text-4xl mb-10"> Les packs</h1>

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
                {node.prixPro} euros
              </p>
            </Link>
          </article>
        )
    })}
  </div>
</section>
}

export default PackPro
