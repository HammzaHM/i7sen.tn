import React from "react"
import {
  useStaticQuery,
  graphql
} from "gatsby"
import Img from "gatsby-image"

import "./image.scss"

export const Image = () => {
  const data = useStaticQuery(graphql `
    query {
      placeholderImage: file(relativePath: { eq: "charity.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <div className="image">
    <Img fluid = {data.placeholderImage.childImageSharp.fluid} />
  </div>
  );
}