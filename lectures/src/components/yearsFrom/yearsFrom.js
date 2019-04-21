import React from "react"

export default ({ year }) => (
  <span style={{ color: "black" }}>{new Date().getFullYear() - year}</span>
)
