import React from "react"

export default ({ text }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      marginTop: "8px",
      marginBottom: "8px",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
    }}
  >
    <div
      style={{
        color: "black",
        backgroundColor: "#E4FFF9",
        padding: "6px",
        border: "1px solid silver",
        color: "darkgreen",
        fontSize: "12px",
        fontStyle: "italic",
        maxWidth: "400px",
        marginRight: "20px",
        borderRadius: "4px",
      }}
    >
      {text}
    </div>
  </div>
)
