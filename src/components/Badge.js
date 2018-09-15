import styled from "styled-components";
import { transparentize, darken } from "polished";

const Badge = styled.a`
  display: inline-block;
  padding: 4px 12px;
  background: ${props => transparentize(0.75, props.theme.color_secondary)};
  color: ${props => darken(0.05, props.theme.color_secondary)};
  font-size: ${props => props.theme.badge_font_size};
  transition: all 0.2s;
  border-radius: 4px;
  backface-visibility: hidden;
  transform: translateZ(0);

  a:hover & {
    color: ${props => darken(0.05, props.theme.color_secondary)};
  }

  :hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px
      ${props => transparentize(0.92, darken(0.5, props.theme.color_secondary))};
  }
`;

export default Badge;
