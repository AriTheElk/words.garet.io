import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

const Styled = styled.a`
  text-decoration: none;
  ${props => `text-shadow: 0.03em 0 ${props.theme.body_background}, -0.03em 0 ${
    props.theme.body_background
  }, 0 0.03em ${props.theme.body_background}, 0 -0.03em ${
    props.theme.body_background
  },
      0.06em 0 ${props.theme.body_background}, -0.06em 0 ${
    props.theme.body_background
  }, 0.09em 0 ${props.theme.body_background}, -0.09em 0 ${
    props.theme.body_background
  },
      0.12em 0 ${props.theme.body_background}, -0.12em 0 ${
    props.theme.body_background
  }, 0.15em 0 ${props.theme.body_background}, -0.15em 0 ${
    props.theme.body_background
  }`};
  ${props => `background-image: linear-gradient(${
    props.theme.body_background
  }, ${props.theme.body_background}), linear-gradient(${
    props.theme.body_background
  }, ${props.theme.body_background}),
    linear-gradient(${props.theme.color_primary}, ${
    props.theme.color_primary
  })`};
  background-size: 0em 2px, 0em 2px, 2px 2px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0 92%, 100% 90%, 0 92%;
  color: ${props => props.theme.body_color};
`;

const Link = ({ to, href, ...props }) => (
  <Styled
    as={to ? GatsbyLink : "a"}
    to={to}
    href={href}
    target={href && "_blank"}
    {...props}
  />
);

export default Link;
