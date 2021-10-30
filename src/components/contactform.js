import * as React from "react"

const Contactform = () => ( 
<>
    <h2 className="mb-10 mt-20 font-bold text-xl text-center"> Contactez-moi </h2>
        <section className=" w-10/12 md:w-6/12 m-auto mb-20"> 
        <form className="flex flex-col " action="https://formspree.io/f/xayakwbr"
  method="POST">
            <label className="mb-5" htmlFor="nom">Nom</label>
            <input type="text" name="nom" className="pl-2 mb-5 border"></input>
            <label className="mb-5" htmlFor="mail">Adresse mail</label>
            <input type="mail" name="mail" className="pl-2  mb-5 border"></input>
            <label className="mb-5"  htmlFor="message"> Message</label>
            <textarea cols="25" name="message" className=" pl-2 h-20 border"></textarea>
            <button className="mt-10 px-5 rounded font-bold py-2 or w-min" type="submit">envoyer</button>
        </form>
        </section>
        </>

    )

export default Contactform
