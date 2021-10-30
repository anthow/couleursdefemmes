import * as React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Logo() {
  const data = useStaticQuery(graphql`
    query creatricequery {
      datoCmsGriffeAccueil {
        
        
     
        griffeQuiSuisJe {
          gatsbyImageData(            height:200
            )
        }
      }
      datoCmsPageDAccueil {
        
        titreQuiSuisJe
        texteQuiSuisJe
        imageFanny {
          gatsbyImageData( width:600
            height:600
            )
        }
        }
      }
    
  `)
    
return ( 
<>

<h2 className="mt-20 font-bold text-3xl md:text-5xl text-center">Qui suis-je ?</h2>
<idv className="flex flex-col">
<figure className="m-auto ">
<GatsbyImage className="my-5 " image={data.datoCmsGriffeAccueil.griffeQuiSuisJe.gatsbyImageData} />
</figure>
</idv>
    <section className="md:py-20 w-10/12 m-auto grid grid-cols-1 grod-rows-2  md:grid-cols-2 md:grid-rows-1 auto-cols-max auto-rows-max gap-y-10 md:gap-y-20 gap-x-28 content-center mb-20 md:mb-0">
      <article>
        <h3 className="font-bold text-2xl md:3xl"> Fanny</h3>
        <figure className="place-self-center "
        >        


      <GatsbyImage image={data.datoCmsPageDAccueil.imageFanny.gatsbyImageData} className="rounded-full" />
        </figure>
      </article>
      <article>

        <h3 className=" mb-10 md:mb-20 font-bold text-2xl md:text-3xl" >  {data.datoCmsPageDAccueil.titreQuiSuisJe} </h3>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageDAccueil.texteQuiSuisJe  }}>
</div>
      </article>
    </section>
        </>

    )
}
    