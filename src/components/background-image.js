import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image-es5'

const MultiBackground = ({ className }) => {
  const {
    image1,
    image2,
  } = useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "image1.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image2: file(
          relativePath: { eq: "image2.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 420) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    image1.childImageSharp.fluid,
    `linear-gradient(rgba(38, 38, 114, 0.73), rgba(53, 234, 255, 0.73))`,
    image2.childImageSharp.fluid,
  ].reverse()

  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={backgroundFluidImageStack}
    >
    </BackgroundImage>
  )
}

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledMultiBackground = styled(MultiBackground)`
  width: 100%;
  min-height: 100vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: auto;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: center 155%, center, center;
  color: #fff;
`

export default StyledMultiBackground