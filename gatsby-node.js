const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require("slugify");
const _ = require("lodash");

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
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges;
      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/singlepost.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });

        let tags = [];
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags);
          }
        });
        tags = _.uniq(tags);

        tags.forEach(tag => {
          createPage({
            path: `/tag/${_.kebabCase(tag)}/`,
            component: path.resolve(`./src/templates/tag.js`),
            context: {
              tag,
            },
          });
        });
      });
      resolve();
    });
  });
};
