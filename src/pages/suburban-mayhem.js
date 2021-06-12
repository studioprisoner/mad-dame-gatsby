import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/gallery-main'
import Layout from '../components/layout'
import SEO from '../components/seo'

const query = graphql`
    query indexQuerySuburbanMayhem {
        allFile(filter: {relativePath: {regex: "images/gallery/albums/suburban-mayhem/"}}, sort: {order: ASC, fields: name}) {
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
    const SuburbanMayhem = () => {
    const data = useStaticQuery(query)
    return (
        <Layout>
            <SEO title="Suburban Mayhem" />
            <div className="bg-white overflow-hidden">
                <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
                    <div className="mx-auto text-base max-w-prose lg:max-w-none">
                    <h2 className="leading-6 text-blue-900 font-semibold tracking-wide uppercase">Death of the Wife, Death of the Marriage, Death of the Family?</h2>
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Surburban Mayhem</h2>
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
                            <p className="text-lg text-gray-500">My complete body of work surrounds the dilapidated idea of marriage in modern society, the distant, effortless and broken relationship between the husband and wife.</p>
                        </div>
                        <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                            <p>I have chosen to take this body of work to the next level of progress in the married relationship. I have decided not to just focus on the wife like in my last review, but to expand on each individual role of the family, to analyze and discover how gender identity is formed and influenced through the family and upbringing.</p>
                            <p>After watching a few episodes of Married with Children (CONAN, G. 1991) which presents no boundaries of the average shoe salesman and his deteriorated relationship with his wife. As they sit around on the couch all day sarcastically talking about how 'good' their sex was, I decided to take this average middle className living space out of its comfort zone and recreate how destructive it can be on the relationship. By displacing the living space into its new destructive atmosphere, it emphasizes and introduces the distance in the relationship that one side of the couch can have to the other.</p>
                            <p>My body of work presents private moments at home that are unseen by the general community. I have exposed the private sanctuary of the slaving husband that comes home to the nagging wife. The couple feel shame from failure (of the marriage), they want to socially present their marriage as a successful and functioning one. By displacement, their private space has been invaded by the viewer and the truth of failure is revealed.</p>
                            <p>I have used dumped furniture, a construction site, and a demolished house, which are all continuously being reconstructed and torn apart. Using these locations as a major part of the image and its story, they can be interpreted as the family is work to build upon the roles and relationships of each member, or that they are continuing their dysfunctional behaviors and deconstructing the roles and relationship within the family.</p>
                            <p>As this body of work has progressed, I have become more interested in exploring the cinematic element of recreating real life narrative and drama. I watched the techniques used by Gregory Crewdson (SHAPIRO, B. 2004) on how he conducts and controls his creative team and actors, the post production of how his images are constructed. Crewdson creates proofs of all the images shot on the day and extracts the best parts of each image to combine them altogether in the one perfect story telling image. After having some trouble shooting four people at once, I found this technique a must to help capture and preserve each important individual and their expressions. I would like to give more attention to every detail that builds the image and this is a technique I would like to learn more about and continue practicing.</p>
                            <p>I would like to continue expanding on this body of work as highly constructed narrative pieces, <span className="italic">"...Pair beauty with horror, fascination with disgust and the real with the surreal, suggesting narratives open to endless interpretations.... Something that ought to be hidden, but comes to light."</span> (MOODY, R. 2002)</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SuburbanMayhem