import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 2em 0;
  margin: 2em 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  img {
    width: 75px;
    margin: 0 ${props => props.theme.global_margin} 0 0;
    border-radius: 50%;
  }

  h1 {
    font-size: ${props => props.theme.header_font_size};
    @media only screen and (max-width: ${props =>
        props.theme.breakpoint_mobile}) {
      font-size: ${props => props.theme.header_font_size_mobile};
    }
  }
`;

export default Wrapper;
