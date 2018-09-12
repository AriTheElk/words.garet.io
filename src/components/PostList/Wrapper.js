import styled from "styled-components";

const Wrapper = styled.div`
  h2 {
    margin-top: 0;
    line-height: 1.25;
    font-size: ${props => props.theme.postlist_header_font_size};
    margin-bottom: ${props => props.theme.global_margin};

    @media only screen and (max-width: ${props =>
        props.theme.breakpoint_mobile}) {
      font-size: ${props => props.theme.postlist_header_font_size_mobile};
      margin-bottom: ${props => props.theme.global_margin_mobile};
    }
  }

  p {
    font-size: ${props => props.theme.postlist_body_font_size};
    margin-bottom: ${props => props.theme.global_margin};

    @media only screen and (max-width: ${props =>
        props.theme.breakpoint_mobile}) {
      font-size: ${props => props.theme.postlist_body_font_size_mobile};
      margin-bottom: ${props => props.theme.global_margin_mobile};
    }
  }
`;

export default Wrapper;
