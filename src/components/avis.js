import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"



export default function Avis() {
  const data = useStaticQuery(graphql`
    query aviscequery {
       
        datoCmsAvi {
          auteurAvisDeux
          auteurAvisQuatre
          auteurAvisTrois
          auteurAvisUn
          texteAvisDeux
          texteAvisQuatre
          texteAvisTrois
          texteAvisUn
        }
      }
    
  `)


  return (
    <>
      <h2 className="w-10/12 m-auto mb-10 md:mb-16 mt-20 font-bold text-3xl md:text-5xl text-center">C'est vous qui en parlez le mieux</h2>

      <section className=" w-10/12 md:w-8/12 m-auto  grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 auto-cols-max  gap-x-28 content-center md:mb-10">
        <article className="border mb-10 md:mb-0 h-auto pt-10 px-2 pb-10 md:px-10">
          <h3 className="text-center mb-10 font-bold text-lg ">
            {data.datoCmsAvi.auteurAvisUn}    </h3>
          <p className="text-center text-sm italic">
          {data.datoCmsAvi.texteAvisUn}
            
            </p>  
        </article>
        <article className="border mb-10 md:mb-0 h-auto pt-10 px-2 pb-10 md:px-10">
          <h3 className="text-center mb-10 font-bold text-lg ">
          {data.datoCmsAvi.auteurAvisDeux}
          </h3>
          <p className="text-center text-sm italic">
          {data.datoCmsAvi.texteAvisDeux}
</p>
        </article>
        </section>
        <section className=" w-10/12 md:w-8/12 m-auto  grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 auto-cols-max  gap-x-28 content-center mb-10">

        <article className="border mb-10 md:mb-0 h-auto pt-10 px-2 pb-10 md:px-10">
          <h3 className="text-center mb-10 font-bold text-lg">
          {data.datoCmsAvi.auteurAvisTrois}          </h3>
          <p className="text-center text-sm italic">
          {data.datoCmsAvi.texteAvisTrois}
</p>
        </article>
        <article className="border mb-10 md:mb-0 h-auto pt-10 px-2 pb-10 md:px-10">
          <h3 className="text-center mb-10 font-bold text-lg ">
          {data.datoCmsAvi.auteurAvisQuatre}          </h3>
          <p className="text-center text-sm italic">
          {data.datoCmsAvi.texteAvisQuatre }
</p>
        </article>
      </section>
    </>

  )
}
