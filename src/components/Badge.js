import styled from "styled-components";
import { transparentize, darken } from "polished";

const Badge = styled.a`
  display: inline-block;
  padding: 4px 12px;
  background: ${props => transparentize(0.75, props.theme.color_primary)};
  color: ${props => darken(0.05, props.theme.color_primary)};
  font-size: ${props => props.theme.badge_font_size};
`;

export default Badge;
