import React from "react"
import { Link, graphql } from "gatsby"
import "./post.css"
import Layout from "../components/layout/layout"
const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link">
          <div className="post-list">
            <h4>{node.frontmatter.title}</h4>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}
export default IndexPage
export const listQuery = graphql`
  query ListQuery {
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

    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___index] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            index
          }
        }
      }
    }
  }
`
