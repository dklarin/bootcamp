import styled from "styled-components"
import { Link } from "gatsby"
import { lighten, desaturate } from "polished"

const activeClassName = "link-active"

export const StyledSidebarContainer = styled.div`
  color: green;
  flex: 2;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-right: 1px solid silver;
`

export const StyledSidebarLink = styled(Link).attrs({
  activeClassName,
})`
  margin-top: 2px;
  color: ${props =>
    `${lighten(0.3, desaturate(0.82, "darkgreen"))} !important}`};
  width: 100%;
  text-align: left;
  &:hover {
    color: darkgreen !important;
  }
  &.${activeClassName} {
    color: darkgreen !important;
    & .active-indicator {
      background-color: darkgreen !important;
    }
  }
`
