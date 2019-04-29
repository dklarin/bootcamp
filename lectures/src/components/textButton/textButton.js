import * as React from "react"
import styled from "styled-components"

const StyledButtonDiv = styled.div`
  cursor: pointer;
  &:hover {
    color: #41b619;
  }
`
export class TextButton extends React.Component {
  render() {
    const { text, onClick, style } = this.props

    return (
      <StyledButtonDiv style={style} onClick={onClick}>
        {text}
      </StyledButtonDiv>
    )
  }
}
