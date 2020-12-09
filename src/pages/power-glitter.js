import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/gallery-main'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const query = graphql`
    query indexQueryPowerGlitter {
        allFile(filter: {relativePath: {regex: "images/gallery/albums/power-glitter/"}}, sort: {order: DESC, fields: modifiedTime}) {
            edges {
                node {
                    childImageSharp {
                        original {
                            width
                            height
                        }
                    fluid {
                        ...GatsbyImageSharpFluid
                        originalName
                        originalImg
                    }
                    }
                }
            }
        }
    }
    `
    const Lightbox = () => {
    const data = useStaticQuery(query)
    return (
        <Layout>
            <SEO title="Power Glitter" />
            <div className="m-4">
            <h2 className="text-4xl font-lato pb-5 uppercase">Power Glitter</h2>
            <Link to="/glitter" className="text-gray-400 italic underline">
                Back
            </Link>
            <Gallery
                columns={width => {
                    if (width < 700) {
                        return 2
                    } else if (width < 1000) {
                        return 3
                    } else {
                        return 6
                    }
                }}
                photos={data.allFile.edges}
            />
            </div>
        </Layout>
    )
}

export default Lightbox