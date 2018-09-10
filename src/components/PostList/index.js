import React from "react";

import Wrapper from "./Wrapper";
import Entry from "./Entry";
import Link from "components/Link";
import Timestamp from "components/Timestamp";

const Header = ({ posts }) => (
  <Wrapper>
    {posts.map(({ node }) => (
      <Entry key={node.id}>
        <Timestamp date={node.frontmatter.date} />
        <h2>
          <Link to={node.fields.slug.replace("/posts", "")}>
            {node.frontmatter.title}
          </Link>
        </h2>
        <p>{node.excerpt}</p>
      </Entry>
    ))}
  </Wrapper>
);

export default Header;
