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
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            category
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
