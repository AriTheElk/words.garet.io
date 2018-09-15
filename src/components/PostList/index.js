import React from "react";

import { categoryLink } from "utils/links";
import Wrapper from "./Wrapper";
import Entry from "./Entry";
import Link from "components/Link";
import Badge from "components/Badge";
import Meta from "components/Meta";

const Header = ({ posts }) => (
  <Wrapper>
    {posts.map(({ node }) => (
      <Entry key={node.id}>
        <Meta
          date={node.frontmatter.date}
          readingTime={node.fields.readingTime.text}
        />
        <h2>
          <Link to={node.fields.slug} noUnderline>
            {node.frontmatter.title}
          </Link>
        </h2>
        <p>
          {node.excerpt} <Link to={node.fields.slug}>Continue</Link>
          &rarr;
        </p>
        <Link to={categoryLink(node.frontmatter.category)} noUnderline>
          <Badge>{node.frontmatter.category}</Badge>
        </Link>
      </Entry>
    ))}
  </Wrapper>
);

export default Header;
