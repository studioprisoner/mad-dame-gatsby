import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/mad-dame-logo.png"

function Header ({ siteTitle }) {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div className="relative">
    <nav className="flex flex-wrap items-center justify-between p-6 bg-gray-900">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <Link to="/">
        <img src={logo} className="w-auto h-14" alt="Mad Dame" />
        <span className="sr-only">{ siteTitle }</span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 text-white border rounded">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-base text-lg italic text-white lg:flex-grow font-garamond">
          <Link to={`/about/`} href="#responsive-header" className="block mt-4 mr-4 lg:inline-block lg:mt-0 lg:pl-10 hover:underline">
            About
          </Link>
          <Link to={`/gallery/`} className="block mt-4 mr-4 lg:inline-block lg:mt-0 lg:pl-10 hover:underline">
            Gallery
          </Link>
          <a href="http://static.mad-dame.com/Mad-Dame-2023-photoshoot-pricelist-compressed.pdf" className="block mt-4 mr-4 lg:inline-block lg:mt-0 lg:pl-10 hover:underline">
            Price List
          </a>
          <a href="https://store.mad-dame.com" className="block mt-4 mr-4 lg:inline-block lg:mt-0 lg:pl-10 hover:underline">
            Store
          </a>
          <Link to={`/contact/`} className="block mt-4 mr-4 lg:inline-block lg:mt-0 lg:pl-10 hover:underline">
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
