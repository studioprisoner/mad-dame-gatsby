import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/gallery-main'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const query = graphql`
    query indexQueryDamedIssue1 {
        allFile(filter: {relativePath: {regex: "images/gallery/albums/damed-magazine-01/"}}, sort: {order: ASC, fields: modifiedTime}) {
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
    const DamedIssue01 = () => {
    const data = useStaticQuery(query)
    return (
        <Layout>
            <SEO title="Damed Magazine 01" />
            <div className="m-4">
            <h2 className="text-4xl font-lato pb-5 uppercase">Damed Magazine Issue 01</h2>
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

export default DamedIssue01