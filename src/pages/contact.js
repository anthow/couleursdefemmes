import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contactform from "../components/contactform"
import HeaderProvi from "../components/header-provi"
import LogoContact from "../components/logo_contact"
import Horaire from "../components/horaire"
const Contact = () => (

    <Layout>
        
        <Seo title="contact" />
        <section className="w-12/12">
    <header className=" w-12/12 mb-32 ">

  
        <HeaderProvi />
        <figure>
         <LogoContact />
        </figure>
</header>
     
    </section>
<Contactform />
<Horaire />

    </Layout>
)

export default Contact
