import styled from "styled-components";

const Entry = styled.div`
  margin-bottom: ${props => props.theme.global_margin};
  padding-bottom: ${props => props.theme.global_margin};

  :not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  @media only screen and (max-width: ${props =>
      props.theme.breakpoint_mobile}) {
    margin-bottom: ${props => props.theme.global_margin_mobile};
  }
`;

export default Entry;
