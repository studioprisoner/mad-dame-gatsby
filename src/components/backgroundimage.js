import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

const BackgroundImage = () => {
    return(
        <BackgroundSlider
          query={useStaticQuery(graphql`
            query {
              backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
                nodes {
                  relativePath
                  childImageSharp {
                    fluid (maxWidth: 4000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          `)}
          initDelay={2}
          transition={4}
          duration={8}
          images={["image1.jpg", "image2.jpg"]}
          >
          </BackgroundSlider>
    )
}

export default BackgroundImage