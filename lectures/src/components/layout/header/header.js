import React from "react"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import styled from "styled-components"
import Logo from "../../../assets/logo_zeleni_mali.svg"
import { Link } from "gatsby"
const Header = ({ className, siteTitle, bgImage, logoImage }) => (
  <div
    style={{
      width: "100%",
      background: "white",
      borderBottom: "1px solid silver",
      opacity: 0.7,
      height: "80px",
      display: "flex",
      flexDirection: "row",
    }}
  >
    <Link to="/">
      <Logo style={{ marginTop: "10px", marginLeft: "20px" }} />
    </Link>
    <div
      style={{
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        fontSize: "24px",
      }}
    >
      {siteTitle}
    </div>
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
