import React from "react";
import rehypeReact from "rehype-react";

import Wrapper from "./Wrapper";
import Meta from "./Meta";
import Footer from "./Footer";
import Link from "components/Link";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
  },
}).Compiler;

const Post = ({ title, date, category, html }) => (
  <Wrapper>
    <Meta date={date} category={category} />
    <h1>{title}</h1>
    {renderAst(html)}
    <Footer />
  </Wrapper>
);

export default Post;
