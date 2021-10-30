import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoTutoriel from "../components/logo_tutoriel"
import HeaderProvi from "../components/header-provi"
import { GatsbyImage } from "gatsby-plugin-image"


const TutoCeinture = ({ data }) => (

    <Layout>
        <Seo title="la ceinture" />
        <section className="w-12/12">
            <header className=" w-12/12 mb-10 md:mb-32 ">

                <figure>
                </figure>
                <HeaderProvi />
                <LogoTutoriel />

            </header>

        </section>
        <section className="md:w-8/12 w-10/12 gap-x-12 m-auto flex flex-col justify-center md:grid md:grid-cols-2 md:grid-rows-1  ">
        <h1 className="md:hidden w-10/12 m-auto text-center md:w-12/12 mb-5 text-3xl"> La ceinture</h1>
            <figure className="mb-10 md:mt-2 md:-mb-0">
                <GatsbyImage image={data.datoCmsTutoriel.imageVideoCeinture.gatsbyImageData} />

            </figure>

            <article className=" ">
                <h1 className="hidden md:block mb-5 text-5xl"> La ceinture</h1>
                <div className="text-sm mb-5 w-10/12 md:w-12/12 m-auto md:m-0" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.texteIntroduction }}>
                </div>
            </article>
        
        </section>
        <section className="md:w-8/12  w-10/12 m-auto mt-10 md:mt-20">
            <h1 className="mb-5 text-3xl md:text-5xl mb-10 text-center md:text-left"> Comment placer la ceinture ? </h1>
            </section>
            <section className="md:w-8/12  w-10/12 md:items-center auto-cols-min  md:gap-y-24 md:gap-x-20 m-auto flex flex-col justify-center md:grid md:grid-cols-2 md:grid-rows-1  ">

            <article className="order-2 md: order-1 w-12/12 mb-20 md:mb-0 md:w-12/12 m-auto md:m-0 ">
                    <h2 className=" text-2xl md:text-3xl mt-5 md:mt-0 mb-5"> Etape 1</h2>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.etape1 }} />
                </article>

                <figure className="order-1 md:order-2 md:mt-3">
                    <GatsbyImage image={data.datoCmsTutoriel.imageEtape1.gatsbyImageData} />
                </figure>
                


                <figure className="order-3 md:mt-3">
                    <GatsbyImage image={data.datoCmsTutoriel.imageEtape2.gatsbyImageData} />

                </figure>

                <article className="order-4  w-12/12 mb-20 md:mb-0 md:w-12/12 m-auto md:m-0 ">
                <h2 className=" text-2xl md:text-3xl mt-5 md:mt-0 mb-5"> Etape 2</h2>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.etape2 }} />

                </article>



                <article className="order-6 md:order-5 w-12/12 mb-20 md:mb-0  m-auto md:m-0 ">
                    <h2 className=" text-2xl md:text-3xl mt-5 md:mt-0 mb-5"> Etape 3: première méthode</h2>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.etape3 }} />

                </article>
                <figure className="order-5 md:order-6">
                    <GatsbyImage image={data.datoCmsTutoriel.imageEtape3.gatsbyImageData} />
                </figure>

    <article className="order-7 col-span-2 border border-or p-4 mb-10 md:mb-0 w-10/12 md:w-12/12 m-auto">
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.texteEntreEtapeTrois }} />

                </article>

                <article className="order-9  w-12/12 mb-20 md:mb-0  m-auto md:m-0 ">
                    <h2 className=" text-2xl md:text-3xl mt-5 md:mt-0 mb-5"> Etape 3: deuxième méthode</h2>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.texteEtapeTroisMethodeDeux}} />

                </article>

                <figure className="order-8 mt-3">
                    <GatsbyImage image={data.datoCmsTutoriel.etapeTroisMethodeDeux.gatsbyImageData} />
                </figure>
            


        </section>
        <h2 className=" md:mt-20 col-span-2 text-3xl md:text-5xl w-10/12 md:w-8/12 m-auto"> Les différentes utilisations</h2>
        <article className="md:mt-10 col-span-2 text-sm w-10/12 md:w-8/12 m-auto " dangerouslySetInnerHTML={{ __html: data.datoCmsTutoriel.prSentationCeinture }}>

</article>
    </Layout>
)

export const query = graphql`
  {
    datoCmsTutoriel {
      texteIntroduction
      etape1
      etape2
      etape3
      imageEtape1 {
        gatsbyImageData(
            height:2400,
            width: 3000,
        )
      }
      imageEtape2 {
        gatsbyImageData
      }
      imageEtape3 {
        gatsbyImageData
      }
      etapeTroisMethodeDeux {
        gatsbyImageData
      }
      texteEtapeTroisMethodeDeux
      texteEntreEtapeTrois
      imageVideoCeinture {
        gatsbyImageData(width: 1500
            height:1500)
      }
      prSentationCeinture
    }
  }
`

export default TutoCeinture
