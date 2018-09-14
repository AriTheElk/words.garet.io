import React from "react";

import Wrapper from "./Wrapper";
import Subtext from "components/Subtext";
import Timestamp from "components/Timestamp";

const Meta = ({ date, category, readingTime }) => (
  <Wrapper>
    <Timestamp date={date} />
    <Subtext>{readingTime}</Subtext>
    {category && <span>Filed under: {category}</span>}
  </Wrapper>
);

export default Meta;
