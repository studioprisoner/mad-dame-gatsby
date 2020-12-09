import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/gallery-main'
import Layout from '../components/layout'
import SEO from '../components/seo'

const query = graphql`
    query indexQueryNudeDead {
        allFile(filter: {relativePath: {regex: "images/gallery/albums/nude-dead/"}}, sort: {order: DESC, fields: modifiedTime}) {
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
    const NudeDead = () => {
    const data = useStaticQuery(query)
    return (
        <Layout>
            <SEO title="Nude Dead Women" />
            <div className="bg-white overflow-hidden">
                <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
                    <div className="mx-auto text-base max-w-prose lg:max-w-none">
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Nuded Dead Women</h2>
                    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:row-start-1 lg:col-start-2">
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
                        <div className="mt-8 lg:mt-0">
                        <div className="text-base max-w-prose mx-auto lg:max-w-none">
                            <p className="text-lg text-gray-500">This body of photographic work created on Medium format film, explored the women's vulnerability as sexual objects through the use of nudity, until discarded through murder.</p>
                        </div>
                        <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                            <p>The presence of nudity in the work depicts the subjects sexually, vulnerable to abuse of their role in the life cycle as procreators, the work produces a true confronting reality.</p>
                            <p>The work constructs a scene that can be based upon reality and fantasy, it invites the viewer to question and explore the possibilities of the narrative.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NudeDead