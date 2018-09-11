import React from "react";
import { graphql } from "gatsby";

import Layout from "layouts/Main";
import Post from "components/Post";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout title={post.frontmatter.title} excerpt={post.excerpt}>
      <Post
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        html={post.htmlAst}
      />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt(pruneLength: 200)
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
