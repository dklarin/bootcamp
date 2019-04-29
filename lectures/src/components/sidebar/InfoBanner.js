import * as React from "react"

export class InfoBanner extends React.Component {
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
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid silver",
            borderRadius: "4px",
            padding: "8px",
            fontSize: "12px",
          }}
        >
          If you are interested in learning programming with us and you live in
          or near Zadar Croatia, you can join us! Feel free to contact us at{" "}
          {"  "}
          <a href="mailto:info@lemonmint.dev">info@lemonmint.dev</a>. We gather
          twice a week, the courses are free, only requirement is that you have
          a positive attitude 😃.
        </div>
      </div>
    )
  }
}
