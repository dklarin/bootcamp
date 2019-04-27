import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import YearsFrom from "../components/yearsFrom/yearsFrom"
import CurrentTime from "../components/currentTime/currentTime"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "years-from": YearsFrom, "current-time": CurrentTime },
}).Compiler

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter
  return (
    <Layout>
      <div
        style={{
          background: "white",
          padding: "10px",
          margin: "10px",
          border: "1px solid silver",
          flex: "1",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            background: "#00848C",
            padding: "10px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {title}
        </div>
        <div style={{ color: "#004156" }}>{renderAst(post.htmlAst)}</div>
      </div>
    </Layout>
  )
}

export default BlogPost
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        description
      }
    }
  }
`
