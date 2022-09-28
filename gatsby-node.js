const path = require(`path`)

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