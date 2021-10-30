import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoBoutique from "../components/logo_boutique"
import HeaderProvi from "../components/header-provi"
import { graphql } from "gatsby"

const pageFaq = ({ data })  => (

  <Layout>
    <Seo title="Boutique" />
    <section className="w-12/12">
    <header className=" w-12/12 m   b-32 ">

        <HeaderProvi />
        <LogoBoutique />

</header>
     
<div className=" w-12/12   mt-20">
      <h2 className=" w-10/12  m-auto pt-10 text-center text-3xl md:text-4xl font-bold  "> Foire aux questions </h2>
        <section className=" mt-10 md:mt-0 md:py-20 w-10/12 md:w-8/12 m-auto grid grid-cols-1 grid-rows-4  md:grid-cols-2 md:grid-rows-2 auto-cols-max auto-rows-max gap-y-10 md:gap-y-20 md:gap-x-28 content-center">
        {data.allDatoCmsFaq.edges.map(({ node }, i) => (
            <article className="">
            <h3 className=" mb-5 font-bold text-xl">
            {node.question} </h3>
              <p className="text-sm italic"> {node.reponse}</p>
            </article>
            
         ))}
                </section>

      
        
      </div>
      </section>    
  </Layout>
)

export const query = graphql`
{
    allDatoCmsFaq {
      edges {
        node {
          question
          reponse
          }
        }
      }
    }
  `


export default pageFaq
