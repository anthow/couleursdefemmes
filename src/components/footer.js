import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"


export default function Footer() {
  const data = useStaticQuery(graphql`
    query contactquery {
      datoCmsContact {
        adresse
        adresseMail
        bonneAdresse
        facebook
        instagram
        pays
        ville
        numeroDeTelephone
      }
        }
     
    
  `)


return ( 
    <footer>
        
        
        
                <section className="py-20 w-10/12 flex flex-col  md:w-8/12 m-auto md:grid md:grid-cols-3 md:grid-rows-1 auto-cols-max auto-rows-max gap-y-12 md:gap-y-20 gap-x-28 content-center">
<article className="flex">
<figure className="mr-10"
      >               <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="fonta" />                                                                                       

      </figure> 
<div className="flex flex-col">
    <h3 className="font-bold text-lg"> Adresse</h3>
    <p className="text-sm text-left adresse">{data.datoCmsContact.adresse} <br></br>
    {data.datoCmsContact.bonneAdresse}<br></br>
    {data.datoCmsContact.ville}</p>
</div>
</article>

<article className="flex">
<figure className="mr-10 "
      >
                            <FontAwesomeIcon icon={faEnvelope} size="2x" className="fonta" />                                                                                       

      </figure> 
<div className="flex flex-col">
    <h3 className="font-bold text-lg"> Email</h3>
    <p className="text-sm"> {data.datoCmsContact.adresseMail} </p>
    <div className="flex flex-row">
<a target="_blank" rel="noreferrer" href={data.datoCmsContact.facebook} > 
    <figure className=" mr-2">
      
      
      
                <StaticImage
          src="../images/facebook.png"
          width={35}  
          height={35}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Lien vers la page Facebook de Couleurs de femmes"
          className="rounded-full"



        />

      </figure>
      </a>

      <a target="_blank" rel="noreferrer" href={data.datoCmsContact.instagram} > 

      <figure className=" "
      >          <StaticImage
          src="../images/insta.png"
          width={35}
          height={35}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Lien vers la page Instagram de Couleurs de femmes"
          className="rounded-full"



        />
      </figure>
      </a>
    </div>
</div>
</article>
<article className="flex">
<figure className="mr-10"
      >       <FontAwesomeIcon size="2x" className="fonta" icon={faPhoneAlt} />                                                                                       

      </figure> 
<div className="flex flex-col">
    <h3 className="font-bold text-lg"> Téléphone</h3>
    <p className="text-sm">{data.datoCmsContact.numeroDeTelephone}</p>
</div>
</article>
        </section>
        <section className="w-10/12 md:w-8/12 m-auto">
      <article className="md:flex m-auto  justify-center space-x-4 w-10/12">
       <Link Link to="/condition"> <p className="text-center">
Conditions générales de vente</p></Link>
        <p className="text-center">  <Link Link to="/charte"> Charte de la protection des données</Link></p>
        
      </article>
      <p className=" text-sm text-center">Couleurs de Femmes - 2021 </p>
        </section>
    </footer>
)
}   

