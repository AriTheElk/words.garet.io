import React from "react";

import Subtext from "components/Subtext";

const Timestamp = ({ date }) => (
  <Subtext as="time" dateTime={date}>
    {date}
  </Subtext>
);

export default Timestamp;
