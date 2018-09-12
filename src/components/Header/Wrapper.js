import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 0 2em 0;
  margin: 2em 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  h1 {
    font-size: ${props => props.theme.header_font_size};
    @media only screen and (max-width: ${props =>
        props.theme.breakpoint_mobile}) {
      font-size: ${props => props.theme.header_font_size_mobile};
    }
  }
`;

export default Wrapper;
