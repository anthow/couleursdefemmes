import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar/navbar"
 const HeaderProvi = ({ siteTitle }) => (
  <>
    <Navbar />
  </> 
)

HeaderProvi.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderProvi.defaultProps = {
  siteTitle: ``,
}

export default HeaderProvi
