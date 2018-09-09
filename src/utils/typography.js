import Typography from "typography";
import stAnnesTheme from "typography-theme-st-annes";

import theme from "themes/default";

stAnnesTheme.baseFontSize = "20px";

stAnnesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: theme.color_primary,
  },
});

const typography = new Typography(stAnnesTheme);

export default typography;
