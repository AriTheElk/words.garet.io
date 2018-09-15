import React from "react";
import rehypeReact from "rehype-react";

import Wrapper from "./Wrapper";
import Footer from "./Footer";
import Link from "components/Link";
import Meta from "components/Meta";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
  },
}).Compiler;

const Post = ({ title, date, category, html, readingTime }) => (
  <Wrapper>
    <Meta date={date} category={category} readingTime={readingTime} />
    <h1>{title}</h1>
    {renderAst(html)}
    <Footer />
  </Wrapper>
);

export default Post;
