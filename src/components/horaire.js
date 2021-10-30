import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


export default function Horaire() {
  const data = useStaticQuery(graphql`
    query horrairequery {
      datoCmsHorraire {
            horraireSectionUn
            horraireSectionDeux
            horraireSection3
            joursSectionUn
            joursSectionTrois
            joursSectionDeux
          }
        }
     
    
  `)

return( 
<>
<h2 className="mb-10 md:mb-20 m-auto text-xl text-center" > Horaire d’ouveture </h2>
    <section className="md:py-20 w-10/12 m-auto grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 auto-cols-max auto-rows-max gap-y-20 gap-x-28 content-center">
      <article className=" border-b-2 md:border-r-2 md:border-b-0 p-5 text-center">
        <h3 className="font-bold text-lg">{data.datoCmsHorraire.joursSectionUn} </h3>
        <p className="text-sm text-center"> {data.datoCmsHorraire.horraireSectionUn}</p>
      </article>
      <article className=" border-b-2 md:border-r-2 md:border-b-0 p-5 text-center">
        <h3 className="font-bold text-lg"> {data.datoCmsHorraire.joursSectionDeux} </h3>
        <p className="text-sm text-center">{data.datoCmsHorraire.horraireSectionDeux}</p>
      </article>
      <article className=" border-b-2 md:border-b-0 p-5 text-center">
        <h3 className="font-bold text-lg"> {data.datoCmsHorraire.joursSectionTrois}</h3>
        <p className="text-sm text-center">{data.datoCmsHorraire.horraireSection3}</p>
      </article>
    </section>
        </>

    )
}
