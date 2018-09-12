import styled from "styled-components";

const Post = styled.div`
  pre {
    max-width: 100%;
  }

  h1 {
    margin-top: 0;
    line-height: 1.25;
    font-size: ${props => props.theme.post_header_font_size};
    margin-bottom: ${props => props.theme.global_margin};

    @media only screen and (max-width: ${props =>
        props.theme.breakpoint_mobile}) {
      font-size: ${props => props.theme.post_header_font_size_mobile};
      margin-bottom: ${props => props.theme.global_margin_mobile};
    }
  }

  blockquote {
    border-color: ${props => props.theme.color_primary};
  }

  .twitter-tweet {
    margin: 2em auto !important;
  }

  p {
    font-size: ${props => props.theme.post_body_font_size};
    margin-bottom: ${props => props.theme.global_margin};

    @media only screen and (max-width: ${props =>
        props.theme.breakpoint_mobile}) {
      font-size: ${props => props.theme.post_body_font_size_mobile};
      margin-bottom: ${props => props.theme.global_margin_mobile};
    }
  }
`;

export default Post;
