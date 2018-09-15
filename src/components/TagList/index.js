import React from "react";

import { tagLink } from "utils/links";
import Wrapper from "./Wrapper";
import Badge from "components/Badge";
import Link from "components/Link";

const TagList = ({ tags }) => (
  <Wrapper>
    {tags.sort().map(tag => (
      <li>
        <Link to={tagLink(tag)} noUnderline>
          <Badge>{tag}</Badge>
        </Link>
      </li>
    ))}
  </Wrapper>
);

export default TagList;
