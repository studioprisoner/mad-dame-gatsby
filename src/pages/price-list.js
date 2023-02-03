import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PriceList = () => (
    <Layout>
        <SEO title="Mad Dame Gallery" />
        <div className="bg-white">
            <h1>Price List</h1>
            <a href={`../public/Mad-Dame-2023-photoshoot-pricelist-compressed.pdf`} title="Download Price List">
                Download Price List
            </a>
        </div>
    </Layout>
)

export default PriceList