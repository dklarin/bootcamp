import React from "react"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import styled from "styled-components"
import Logo from "../../../assets/logo_sareni_bijeli.svg"
import StudentLogo from "../../../assets/student_cap_white.svg"
import { Link } from "gatsby"
const Header = ({ className, siteTitle, bgImage, logoImage }) => (
  <div
    style={{
      width: "100%",
      background: "#004156",
      borderBottom: "1px solid silver",
      opacity: 0.7,
      height: "40px",
      display: "flex",
      flexDirection: "row",
    }}
  >
    <Link to="/">
      <Logo
        style={{
          marginTop: "6px",
          width: "220px",
          height: "30px",
        }}
      />
    </Link>
    <div
      style={{
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        fontSize: "14px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StudentLogo
        style={{
          width: "30px",
          height: "30px",
          alignSelf: "center",
        }}
      />
      <div
        style={{
          color: "silver",
          fontSize: "12px",
          marginTop: "-5px",
          fontFamily: "Inconsolata",
        }}
      >
        {siteTitle}
      </div>
    </div>
    <div
      style={{
        color: "white",
        alignSelf: "center",
        fontSize: "14px",
        marginRight: "12px",
        fontFamily: "Inconsolata",
      }}
    >
      {"{...💗}"} from zadar
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
