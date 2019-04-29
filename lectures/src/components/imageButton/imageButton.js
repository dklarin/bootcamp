import * as React from "react"
import { vectors } from "../../assets"
import styled from "styled-components"

const SvgContainer = styled.div`
  cursor: pointer;
  &:hover .button-icon {
    filter: grayscale(0.9);
  }
`

export class ImageButton extends React.Component {
  render() {
    const { image, size, onClick } = this.props

    const Image = vectors[image]
    return (
      <SvgContainer onClick={onClick}>
        <Image className="button-icon" style={{ width: size, height: size }} />
      </SvgContainer>
    )
  }
}
