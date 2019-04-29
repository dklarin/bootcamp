import React from "react"
import { Link, graphql } from "gatsby"
import "./post.css"
import Layout from "../components/layout/layout"
import Sidebar from "../components/sidebar/sidebar"
import SEO from "../components/seo/seo"
const TodoPage = props => {
  return (
    <Layout>
      <SEO title="Lemon Mint bootcamp" />
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <Sidebar />
        <div style={{ flex: 12 }}>TODO</div>
      </div>
    </Layout>
  )
}
export default TodoPage
export const todoQuery = graphql`
  query TodoQuery {
    headerBgImage: file(relativePath: { eq: "headerBg.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 2000, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
