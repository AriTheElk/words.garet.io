import React from "react";
import { graphql } from "gatsby";

import Layout from "layouts/Main";
import Post from "components/Post";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Post
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        html={post.html}
      />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
