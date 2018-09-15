import styled from "styled-components";

const Wrapper = styled.ul`
  display: inline;
  list-style-type: none;
  margin: 0;

  li {
    display: inline;
    margin: 0 12px 0 0;

    :last-child {
      margin: 0;
    }
  }
`;

export default Wrapper;
