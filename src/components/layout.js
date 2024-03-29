/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 
 //import Header from "./header"
 import Footer from "./footer"
 
 const Layout = ({ children }) => {
   
 
   return (


     <>
         <main>{children}</main>
         <Footer />
         <script async defer src="https://scripts.withcabin.com/hello.js%22%3E"> </script>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 
