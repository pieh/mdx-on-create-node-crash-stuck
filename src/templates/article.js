import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

const Page = ({ data, children }) => {
  console.log(data);

  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider>{data.mdx.body}</MDXProvider>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
      }
      body
    }
  }
`

export default Page