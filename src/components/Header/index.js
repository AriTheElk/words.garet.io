import React from "react";
import { Link } from "gatsby";

import Wrapper from "./Wrapper";
import Avatar from "images/avatar.jpg";

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Link to="/">
      <img src={Avatar} alt="Picture of Garet McKinley" />
    </Link>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </Wrapper>
);

export default Header;
