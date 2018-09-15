import React from "react";

import Wrapper from "./Wrapper";
import Entry from "./Entry";
import Link from "components/Link";
import Meta from "components/Meta";
import TagList from "components/TagList";

const Header = ({ posts }) => (
  <Wrapper>
    {posts.map(({ node }) => (
      <Entry key={node.id}>
        <Meta
          date={node.frontmatter.date}
          readingTime={node.fields.readingTime && node.fields.readingTime.text}
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
        <TagList tags={node.frontmatter.tags} />
      </Entry>
    ))}
  </Wrapper>
);

export default Header;
