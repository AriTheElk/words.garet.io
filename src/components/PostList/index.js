import React from "react";

import { categoryLink } from "utils/links";
import Wrapper from "./Wrapper";
import Entry from "./Entry";
import Link from "components/Link";
import Timestamp from "components/Timestamp";
import Badge from "components/Badge";

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
        <p>
          {node.excerpt}{" "}
          <Link to={node.fields.slug.replace("/posts", "")}>
            Read more &rarr;
          </Link>
        </p>
        <Link to={categoryLink(node.frontmatter.category)} noUnderline>
          <Badge>{node.frontmatter.category}</Badge>
        </Link>
      </Entry>
    ))}
  </Wrapper>
);

export default Header;
