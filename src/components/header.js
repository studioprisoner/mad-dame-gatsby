import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/mad-dame-logo.png"

function Header ({ siteTitle }) {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div className="relative">
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
        <img src={logo} className="h-14 w-auto" alt="Mad Dame" />
        <span className="sr-only">{ siteTitle }</span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-white">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-base lg:flex-grow text-white font-garamond italic text-lg">
          <Link to={`/about/`} href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 lg:pl-10 mr-4 hover:underline">
            About
          </Link>
          <Link to={`/gallery/`} className="block mt-4 lg:inline-block lg:mt-0 lg:pl-10 mr-4 hover:underline">
            Gallery
          </Link>
          <a href="https://store.mad-dame.com" className="block mt-4 lg:inline-block lg:mt-0 lg:pl-10 mr-4 hover:underline">
            Store
          </a>
          <Link to={`/contact/`} className="block mt-4 lg:inline-block lg:mt-0 lg:pl-10 mr-4 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
