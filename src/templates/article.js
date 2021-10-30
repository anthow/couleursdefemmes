import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderProvi from "../components/header-provi"
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { ImageGallery } from "../components/imagegallery/imagegallery"

const ProductPage = ({ data })  => (



      <Layout>
          <Seo title="Boutique" />
          <section className="w-12/12">
    <header className=" w-12/12 mb-20 ">

    <figure>
        </figure>
        <HeaderProvi />
</header>
     
    </section>
        <section className=" w-10/12 md:w-8/12 m-auto flex flex-col mb-10  justify-center  ">
<div className="flex flex-col md:flex-row    md:space-x-40 ">


    <div className=" w-5/12 hidden md:block " >
<ImageGallery images={data.datoCmsBoutique.imagesProduits} />
             </div>


    <div className=" md:hidden " >

<GatsbyImage image={data.datoCmsBoutique.imagesProduits[0].gatsbyImageData} className="rounded mb-5" />
             </div>


      <article>
      <h1 className=" text-3xl md:text-5xl mb-4 text-center md:text-left">{data.datoCmsBoutique.nomDuProduit}</h1>

      <p className=" bg-or text-white p-2 w-max text-center rounded font-black text-xl ">{data.datoCmsBoutique.prix} euros</p>
      <p className="mt-5 mb-10">  poid: {data.datoCmsBoutique.poids} g </p> 
<div className="flex flex-row mb-4 space-x-2 content-center ">


     </div>
     <div className="flex hidden flex-col mb-5">
    <p> Quantité </p>
    <input type="number" name="quantite" className="  border text-or rounded px-2 w-1/3 content-center " placeholder="1"></input>
     </div>



     
     <div className="flex flex-row space-x-2">
        <button className="or text-sm md:text-lg p-2 snipcart-add-item rounded text-bold"
            data-item-id={data.datoCmsBoutique.id}
            data-item-weight={data.datoCmsBoutique.poids}
            data-item-price={data.datoCmsBoutique.prix}
            data-item-url={'https://hopeful-wright-6a9359.netlify.app/boutique/'+data.datoCmsBoutique.url}
            data-item-name={data.datoCmsBoutique.nomDuProduit}
          
    > Commander </button>
<Link to="/contact">
        <button className="or p-2 text-sm md:text-lg rounded text-bold"> Me contacter</button></Link>
</div>
      </article>
    </div>

</section>
<section className=" w-10/12 md:w-8/12 border p-4 md:p-12 m-auto ">
    <h2 className="mb-5 text-3xl"> Description </h2>
    <div className="text-sm mb-5" dangerouslySetInnerHTML={{ __html: data.datoCmsBoutique.description }} />

</section>
  </Layout>
  
)

export const query = graphql`
query ProductPageQuery($url: String){
   datoCmsBoutique(url: {eq: $url}) {
    couleursUnies {
      nom
    }
    poids
      description
      imagesProduits {
        originalId
        gatsbyImageData(aspectRatio: 1.1)
        
      }
      id
      typeDeProduit
      nomDuProduit
      prix
      url
      id
    }
  }
`;
export default ProductPage


