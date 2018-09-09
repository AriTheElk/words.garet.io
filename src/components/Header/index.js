import React from "react";
import { Link } from "gatsby";

import Wrapper from "./Wrapper";

const Header = ({ siteTitle }) => (
  <Wrapper>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </Wrapper>
);

export default Header;
