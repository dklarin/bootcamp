import * as React from "react"
import { StyledSidebarContainer, StyledSidebarLink } from "./style"
const SidebarNavLink = props => {
  const { isTopic } = props
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <StyledSidebarLink to={props.to} activeClassName="link-active">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              flex: 1,
              paddingLeft: "30px",
              fontWeight: isTopic ? "bold" : "normal",
            }}
          >
            {props.title}
          </div>
          <div
            className="active-indicator"
            style={{
              width: "6px",
              display: "flex",
            }}
          />
        </div>
      </StyledSidebarLink>
      <div style={{ marginLeft: "20px" }}>{props.children}</div>
    </div>
  )
}
export default class Sidebar extends React.Component {
  render() {
    return (
      <StyledSidebarContainer>
        <SidebarNavLink
          to="/posts/0_intro/"
          title="Introduction"
          isTopic={true}
        >
          <SidebarNavLink
            to="/posts/0_intro/0_1_vsCode/"
            title="Visual Studio Code"
          />
          <SidebarNavLink to="/posts/0_intro/0_2_git/" title="Git" />
          <SidebarNavLink to="/posts/0_intro/0_3_npm/" title="Npm" />
        </SidebarNavLink>
        <SidebarNavLink
          to="/posts/1_js_basic/"
          title="JavaScript basics"
          isTopic={true}
        />
      </StyledSidebarContainer>
    )
  }
}
