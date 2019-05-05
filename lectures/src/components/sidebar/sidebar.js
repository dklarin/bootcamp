import * as React from "react"
import { StyledSidebarContainer, StyledSidebarLink } from "./style"
import { InfoBanner } from "./InfoBanner"
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
              paddingTop: "2px",
              paddingBottom: "2px",
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
        <SidebarNavLink to="/posts/00_About/" title="About" isTopic={true} />
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
          title="JavaScript fundamentals"
          isTopic={true}
        >
          <SidebarNavLink
            to="/posts/1_js_basic/1_1_types"
            title="variables and type system"
          />
          <SidebarNavLink
            to="/todo?topic=operators"
            title="operators, expressions, assignment"
          />
          <SidebarNavLink
            to="/todo?topic=more_about_objects"
            title="more about objects"
          />
          <SidebarNavLink
            to="/todo?topic=more_about_strings"
            title="more about strings"
          />
          <SidebarNavLink
            to="/todo?topic=more_about_numbers"
            title="more about numbers"
          />
          <SidebarNavLink to="/todo?topic=control_flow" title="control flow" />
          <SidebarNavLink to="/todo?topic=functions" title="functions" />
          <SidebarNavLink to="/todo?topic=arrays" title="arrays" />
          <SidebarNavLink
            to="/todo?topic=functions_closures/"
            title="function as first class object, closures"
          />
        </SidebarNavLink>
        <SidebarNavLink
          to="/posts/1_js_basic/"
          title="ES6/ES7 and beyond"
          isTopic={true}
        />
        <InfoBanner />
      </StyledSidebarContainer>
    )
  }
}
