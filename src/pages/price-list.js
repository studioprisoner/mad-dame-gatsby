import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import priceListPdf from '../static/Mad-Dame-2023-photoshoot-pricelist-compressed.pdf'


const PriceList = () => {
    <Layout>
        <SEO title="Mad Dame Gallery" />
        <div className="bg-white">
            <h1>Price List</h1>
            <a href={priceListPdf} title="Download Price List">
                Download Price List
            </a>
        </div>
    </Layout>
}

export default priceListPdf