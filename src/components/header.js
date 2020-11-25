import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/mad-dame-logo.png"

function Header ({ siteTitle }) {

  const [isExpanded, toggleExpansion] = useState(false)

  return(
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-8 w-auto">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
        <img src={logo} className="w-auto h-10 mr-2" alt="Mad Dame Logo" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <Link to="/about/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">About</Link>
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Gallery</Link>
          <a href="https://store.mad-dame.com" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Store</a>
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
