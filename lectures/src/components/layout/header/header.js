import React from "react"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import styled from "styled-components"
const Header = ({ className, siteTitle, bgImage, logoImage }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "#39548B",
      opacity: 0.7,
    }}
  >
    <span style={{ color: "white", fontSize: "30px" }}>{siteTitle}</span>
  </div>
)
const StyledBackgroundSection = styled(Header)`
  width: 100%;
  height: 150px;
  background-repeat: repeat-y;
`
Header.defaultProps = {
  siteTitle: ``,
}

export default StyledBackgroundSection
