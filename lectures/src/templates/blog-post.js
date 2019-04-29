import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import YearsFrom from "../components/yearsFrom/yearsFrom"
import CurrentTime from "../components/currentTime/currentTime"
import InfoBanner from "../components/info-banner/InfoBanner"
import Sidebar from "../components/Sidebar/sidebar"
import SEO from "../components/seo/seo"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "years-from": YearsFrom,
    "current-time": CurrentTime,
    "info-banner": InfoBanner,
  },
}).Compiler

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter
  return (
    <Layout>
      <SEO title="Lemon Mint bootcamp" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          overflowY: "hidden",
        }}
      >
        <Sidebar />
        <div style={{ flex: 12, overflowY: "auto" }}>
          <div
            style={{
              padding: "5px",
              margin: "5px",

              flex: "1",
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
        </div>
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
