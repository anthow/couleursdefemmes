import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoCollaboration from "../components/logo_collaboration"
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const collaboration = ({ data })  => (

  <Layout>
    <Seo title="Boutique" />
    <section className="w-12/12">
    <header className=" w-12/12 mb-10  md:mb-32 ">

  
        <HeaderProvi />
        <figure>
         <LogoCollaboration />
        </figure>
</header>
     
    </section>
    <article className="">
    <h1 className=" w-10/12 md:w-8/12 m-auto mb-5 md:mb-0 mt-5 md:-mt-0 text-3xl md:text-5xl"> {data.datoCmsCollaboration.nomCollaboration}</h1>
</article>
    <section className="w-10/12 md:w-8/12 md:gap-x-10  md:gap-y-10 m-auto md:items-center flex flex-col justify-center md:grid md:grid-cols-2 md:grid-rows-2  ">
        <GatsbyImage image={data.datoCmsCollaboration.imageCollaboration.gatsbyImageData}           className="rounded-lg mb-2 order-1"

          />       
        <article className=" order-2">
           <div className="text-sm m-auto  mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsCollaboration.texteCollaboration }} />


        </article>

        <article className="order-4 md:order-3 ">
           <div className="text-sm m-auto  mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsCollaboration.collaborationDeuxiemeParagraphe }} />
           <div className="text-sm m-auto  mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsCollaboration.informationTechnique }} />


        </article>
        <GatsbyImage image={data.datoCmsCollaboration.imageCollaborationUn.gatsbyImageData}           className="order-3 md:order-4 rounded-lg mb-2" />
</section>





      <h1 className="  md:w-8/12 w-10/12 m-auto titre text-4xl mt-10 mb-10 md:mb-20"> Les articles </h1>
      <div className=" md:w-8/12 w-10/12 flex flex-col md:grid md:grid-cols-3 m-auto md:gap-y-10 md:gap-x-16 ">
    {   
    data.allDatoCmsBoutique.edges.map(({ node }) => (
<>
<article>

      <Link to={"../boutique/" + node.url} > 
      <figure className="">

      <GatsbyImage image={node.imagesProduits[0].gatsbyImageData}           className="rounded-lg mb-2"
 />
</figure>
<h2 className="text-xl text-center mb-1">{node.nomDuProduit}</h2>
<p className="text-lg text-center m-auto text-gray-600">{node.prix} euros</p>


</Link>
</article>

</>
    ))}
   
</div>
  </Layout>
)

export const query = graphql`
  {
    datoCmsCollaboration {
        texteCollaboration
        nomCollaboration
        collaborationDeuxiemeParagraphe
        informationTechnique
        imageCollaboration {
          gatsbyImageData
        }
        imageCollaborationUn {
          gatsbyImageData
        }
      }
      allDatoCmsBoutique(filter: {collaboration: {eq: true}}){
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

export default collaboration
