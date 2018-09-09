import React from "react";

import Timestamp from "components/Timestamp";

const Meta = ({ date, category }) => (
  <div>
    <Timestamp date={date} />
    {category && <span>Filed under: {category}</span>}
  </div>
);

export default Meta;
