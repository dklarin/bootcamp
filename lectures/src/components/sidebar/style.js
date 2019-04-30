import styled from "styled-components"
import { Link } from "gatsby"
import { lighten, desaturate, darken } from "polished"

const activeClassName = "link-active"
const textColor = `${lighten(0.3, desaturate(0.82, "darkgreen"))} !important}`
const activeTextColor = `${darken(0.9, "darkgreen")} !important}`
const highlightColor = `${lighten(
  0.7,
  desaturate(0.6, "darkgreen")
)} !important`

export const StyledSidebarContainer = styled.div`
  color: green;
  flex: 2;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-right: 1px solid silver;
  height: 100%;
`

export const StyledSidebarLink = styled(Link).attrs({
  activeClassName,
})`
  margin-top: 2px;
  color: ${textColor};
  width: 100%;
  text-align: left;
  &:hover {
    color: darkgreen !important;
  }
  &.${activeClassName} {
    background-color: ${highlightColor};
    & .active-indicator {
      background-color: darkgreen !important;
    }
    color: ${activeTextColor};
  }
`
