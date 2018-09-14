import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import theme from "themes/default";
import GlobalStyles from "styles/GlobalStyles";
import Header from "components/Header";
import Wrapper from "./Wrapper";
import Avatar from "images/avatar.jpg";

const Layout = ({ title, excerpt, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Helmet
            title={title || data.site.siteMetadata.title}
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" },
            ]}
          >
            <html lang="en" />
            {title
              ? [
                  <meta name="twitter:card" content="summary_large_image" />,
                  <meta name="twitter:image" content="./twitter-card.jpg" />,
                ]
              : [
                  <meta name="twitter:card" content="summary" />,
                  <meta name="twitter:image" content={Avatar} />,
                ]}
            <meta name="twitter:site" content="@gareteliot" />
            <meta name="twitter:creator" content="@gareteliot" />
            <meta
              name="twitter:title"
              content={title || data.site.siteMetadata.title}
            />
            {excerpt && <meta name="twitter:description" content={excerpt} />}
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <GlobalStyles />
          {children}
        </Wrapper>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
