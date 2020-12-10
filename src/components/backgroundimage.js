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
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          `)}
          initDelay={2}
          transition={4}
          duration={8}
          images={["image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg"]}
          style={{
            width: "100%",
            minHeight: "100vh",
            /* You should set a background-size as the default value is "cover"! */
            backgroundSize: "auto",
            /* So we won't have the default "lightgray" background-color. */
            backgroundColor: "transparent",
            /* Now again, remember the stacking order of CSS: lowermost comes last! */
            backgroundRepeat: "no-repeat, no-repeat, repeat",
            backgroundPosition: "center 155%, center, center",
          }}
          >
          </BackgroundSlider>
    )
}

export default BackgroundImage