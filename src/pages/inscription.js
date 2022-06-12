import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import HeaderProvi from "../components/header-provi"
import Logohome from "../components/logo_home"

const IndexPage = ({ data }) =>(
  <Layout>
    <Seo title="Home" />
    <section className="w-12/12">
    <div className=" w-12/12 mb-4  ">

        <header>
        <HeaderProvi />
        </header>
     
</div>
<Logohome />
 

      <h1 className=" w-10/12 md:w-8/12 m-auto italic text-center text-3xl md:text-5xl mt-10 mb-10 md:mb-24 ">
          {data.datoCmsInscriptionPro.titre}
        </h1>
    </section>
  <div className="flex flex-col gap-y-10">
    <section className=" w-10/12 md:w-8/12 m-auto   auto-cols-min  md:gap-y-20 md:gap-x-20 flex flex-col md:grid  md:grid-cols-2 ">
      <GatsbyImage className="rounded-lg md:mt-2 order-1" image={data.datoCmsInscriptionPro.image.gatsbyImageData} alt={data.datoCmsInscriptionPro.image.alt} />

      <article className="text-sm order-2 mb-20">  

        <div dangerouslySetInnerHTML={{ __html: data.datoCmsInscriptionPro.pagrapheUn }} />


      </article>

</section>
<div className="w-10/12 md:w-8/12 m-auto" dangerouslySetInnerHTML={{ __html: data.datoCmsInscriptionPro.paragrapheDeux }} />
<div className="w-10/12 md:w-8/12 m-auto">
<a href={data.datoCmsInscriptionPro.urlFormulaire} target="_blank">
        <button className="or p-2 text-sm md:text-lg rounded text-bold"> s'inscrire</button></a>
</div>
</div>

  </Layout>
)



export const query = graphql`
{
    datoCmsInscriptionPro {
    pagrapheUn
    paragrapheDeux
    titre
    urlFormulaire
    image {
      alt
      gatsbyImageData
    }
  }
}

`


export default IndexPage



