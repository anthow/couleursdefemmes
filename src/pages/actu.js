import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import HeaderProvi from "../components/header-provi"

const actuPage = ({ data }) =>(
  <Layout>
    <Seo title="Home" />
    <section className="w-12/12">
    <div className=" w-12/12 mb-4  ">

        <header>
        <HeaderProvi />
        </header>
        <article>
        <h1 className="titre text-4xl my-10  w-10/12 m-auto"> Mes actualités </h1>
</article>
        <div className="  w-10/12  mt-10 flex flex-col md:grid md:grid-cols-3 m-auto md:gap-y-10 md:gap-x-16 ">
    {   
    
    data.allDatoCmsActualite.edges.map(({ node }) => {
return(
<article>

      <Link to={node.url} > 
      <figure className="">

      <GatsbyImage image={node.imageActualite.gatsbyImageData}  className="rounded-lg mb-2"
 />
</figure>
</Link>
<h2 className="text-4xl">{node.titreActualit}</h2>
<span className="text-sm "> Le {node.meta.publishedAt}</span>
<p className="mt-5 text-black">{node.chapeau}...</p>
<Link to={node.url} > 
<span>lire la suite </span>
</Link>


</article>

) })}
   
</div>
</div>
 
</section>
  </Layout>
)



export const query = graphql`
{
  allDatoCmsActualite {
    edges {
      node {
        url
        chapeau
        texteActualite
        titreActualit
        imageActualite {
          gatsbyImageData (width: 500, height: 500)
        }
        meta {
          publishedAt(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
}
`


export default actuPage



