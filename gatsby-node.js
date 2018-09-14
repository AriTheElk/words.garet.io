const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require("slugify");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                category
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/singlepost.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
        createPage({
          path: `/category/${slugify(node.frontmatter.category, {
            lower: true,
          })}`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            category: node.frontmatter.category,
          },
        });
      });
      resolve();
    });
  });
};
