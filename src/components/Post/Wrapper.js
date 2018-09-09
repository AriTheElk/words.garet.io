import styled from "styled-components";

const Post = styled.div`
  pre {
    max-width: 100%;
  }

  h1 {
    margin-top: 0;
  }

  a {
    text-decoration: none;
    text-shadow: 0.03em 0 #fff, -0.03em 0 #fff, 0 0.03em #fff, 0 -0.03em #fff,
      0.06em 0 #fff, -0.06em 0 #fff, 0.09em 0 #fff, -0.09em 0 #fff,
      0.12em 0 #fff, -0.12em 0 #fff, 0.15em 0 #fff, -0.15em 0 #fff;
    ${props => `background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
    linear-gradient(${props.theme.color_primary}, ${
      props.theme.color_primary
    })`};
    background-size: 0.05em 2px, 0.05em 2px, 2px 2px;
    background-repeat: no-repeat, no-repeat, repeat-x;
    background-position: 0 90%, 100% 90%, 0 90%;
    color: #1d1d1d !important;
  }

  blockquote {
    border-color: ${props => props.theme.color_primary};
  }
`;

export default Post;
