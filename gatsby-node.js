const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
            internal {
            contentFilePath
          }
          }
        }
      }
    }
  `)
  const templatePath = path.resolve(`src/templates/article.js`)

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${templatePath}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
      },
      defer: true
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === 'Mdx' ||
    (node.internal.type === 'MarkdownRemark' &&
      node.fileAbsolutePath.includes('src/content'))
  ) {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode, trailingSlash: false }),
    });
  }
};