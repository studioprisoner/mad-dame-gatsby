import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PriceList = () => (
    <Layout>
        <SEO title="Mad Dame Gallery" />
        <div className="bg-white">
            <h1>Price List</h1>
            <Link to={`./static/Mad-Dame-2023-photoshoot-pricelist-compressed.pdf`} title="Download Price List">
                Download Price List
            </Link>
        </div>
    </Layout>
)

export default PriceList