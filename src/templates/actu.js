import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

const ActuPage = ({ data })  => (



      <Layout>
          <Seo title="Actualité" />
          <section className="w-12/12">
    <header className=" w-12/12 mb-20 ">

    <figure>
        </figure>
        <HeaderProvi />
</header>
     
    </section>
<article className="  w-8/12 m-auto flex flex-col"> 
<figure className="w-12/12 m-auto">
<GatsbyImage image={data.datoCmsActualite.imageActualite.gatsbyImageData} className=" m-auto mb-5" />
</figure>
<h1 className="text-4xl">{data.datoCmsActualite.titreActualit}</h1>
<span className="text-sm mb-5"> le {data.datoCmsActualite.meta.publishedAt} </span>
<div className=" text-m text-black mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsActualite.texteActualite }} />

 </article>

  </Layout>
  
)

export const query = graphql`
query actuPageQuery($url: String){
  datoCmsActualite(url: {eq: $url}) {
    url
    chapeau
    texteActualite
    titreActualit
    imageActualite {
      gatsbyImageData (width: 1000, height: 800)
    }
    meta {
      publishedAt(formatString: "DD/MM/YYYY")
    }
    }
  }
`;
export default ActuPage


