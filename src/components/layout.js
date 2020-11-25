/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
    <div className="flex flex-col h-screen mx-auto max-h-full mb-auto justify-between">
      <Header/>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default Layout
