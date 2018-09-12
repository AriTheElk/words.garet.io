import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled, { css } from "styled-components";

const underlineStyles = css`
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
    0.14em 0 ${props.theme.body_background}, -0.14em 0 ${
    props.theme.body_background
  }, 0.15em 1px ${props.theme.body_background}, -0.15em 1px ${
    props.theme.body_background
  }`};
  ${props => `background-image: linear-gradient(${
    props.theme.body_background
  }, ${props.theme.body_background}), linear-gradient(${
    props.theme.body_background
  }, ${props.theme.body_background}),
  linear-gradient(${props.theme.color_primary}, ${props.theme.color_primary})`};
  background-size: 0em 1px, 0em 1px, 1px 1px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0 92%, 100% 90%, 0 92%;
`;

const Styled = styled.a`
  color: ${props => props.theme.body_color};
  ${props => (props.noUnderline ? `` : underlineStyles)};

  h1 &,
  h2 &,
  h3 &,
  h4 &,
  h5 &,
  h6 & {
    background-position: 0 88%, 100% 90%, 0 88%;
  }
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
