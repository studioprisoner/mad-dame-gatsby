import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/gallery-main'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const query = graphql`
    query indexQueryMoreGlitter {
        allFile(filter: {relativePath: {regex: "images/gallery/albums/more-glitter/"}}, sort: {order: ASC, fields: name}) {
            edges {
                node {
                    childImageSharp {
                        original {
                            width
                            height
                        }
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                        originalName
                        originalImg
                    }
                    }
                }
            }
        }
    }
    `
    const MoreGlitter = () => {
    const data = useStaticQuery(query)
    return (
        <Layout>
            <SEO title="More Glitter" />
            <div className="m-4">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">More Glitter</h2>
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

export default MoreGlitter