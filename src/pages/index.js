import React from "react";
import { graphql } from "gatsby";

import Layout from "layouts/Main";
import PostList from "components/PostList";

export default ({ data }) => (
  <Layout>
    <PostList posts={data.allMarkdownRemark.edges} />
  </Layout>
);

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`;
