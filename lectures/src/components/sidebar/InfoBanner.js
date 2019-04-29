import * as React from "react"
import { TextButton } from "../textButton/textButton"
import { ImageButton } from "../imageButton/imageButton"
export class InfoBanner extends React.Component {
  state = { visible: true }
  componentDidMount() {
    let visible = localStorage.getItem("bannerInfoVisible")
    if (visible && visible === "NO") this.setState({ visible: false })
    else this.setState({ visible: true })
  }
  render() {
    return (
      <div
        style={{
          marginTop: "auto",
          alignSelf: "flex-end",
          justifySelf: "flex-end",
          padding: "10px",
        }}
      >
        {this.state.visible && (
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid silver",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              If you are interested in learning programming with us, and you
              live in or near Zadar Croatia, you can join us! Feel free to
              contact us at
              <a href="mailto:info@lemonmint.dev">info@lemonmint.dev</a> We
              gather twice a week, the courses are free, only requirement is
              that you have a positive attitude 😃.
              <TextButton
                style={{ alignSelf: "flex-end" }}
                onClick={() => {
                  localStorage.setItem("bannerInfoVisible", "NO")
                  this.setState({ visible: false })
                }}
                text="GOT IT"
              />
            </div>
          </div>
        )}
        {!this.state.visible && (
          <ImageButton
            image="scroll"
            size={32}
            onClick={() => {
              localStorage.setItem("bannerInfoVisible", "YES")
              this.setState({ visible: true })
            }}
          />
        )}
      </div>
    )
  }
}
