import React from "react";

import Wrapper from "./Wrapper";
import Meta from "./Meta";
import Footer from "./Footer";

const Post = ({ title, date, category, html }) => (
  <Wrapper>
    <Meta date={date} category={category} />
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <Footer />
  </Wrapper>
);

export default Post;
