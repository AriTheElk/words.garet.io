import styled from "styled-components";

const Post = styled.div`
  pre {
    max-width: 100%;
  }

  h1 {
    margin-top: 0;
  }

  blockquote {
    border-color: ${props => props.theme.color_primary};
  }
`;

export default Post;
