import React from "react";

import Wrapper from "./Wrapper";

const Timestamp = ({ date }) => <Wrapper dateTime={date}>{date}</Wrapper>;

export default Timestamp;
