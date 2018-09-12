import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.body_background};
    color: ${props => props.theme.body_color};
    margin: ${props => props.theme.body_margin};

    @media only screen and (max-width: ${props =>
      props.theme.breakpoint_mobile}) {
      margin: ${props => props.theme.body_margin_mobile};
    }
  }

  ::selection {
    color: ${props => props.theme.body_background};
    background: ${props => props.theme.color_primary};
    text-shadow: none;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: black;
    background: none;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*="language-"] {
    position: relative;
    margin: 1.5em 0;
    border-left: 10px solid ${props => props.theme.color_primary};
    background-color: ${props => props.theme.prism_background};
    background-size: 3em 3em;
    background-origin: content-box;
    overflow: visible;
    padding: 0;
  }

  code[class*="language"] {
    max-height: inherit;
    height: 100%;
    padding: 0 1em;
    display: block;
    overflow: auto;
  }

  code[class="language-term"] {
    &::before {
      position: relative;
      content: "$";
      left: -5px;
      opacity: 0.5;
    }
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    position: relative;
    padding: 0.2em;
    border-radius: 0.3em;
    color: ${props => props.theme.color_primary};
    display: inline;
    white-space: normal;
  }

  :not(pre) > code[class*="language-"]:after,
  pre[class*="language-"]:after {
    right: 0.75em;
    left: auto;
    -webkit-transform: rotate(2deg);
    -moz-transform: rotate(2deg);
    -ms-transform: rotate(2deg);
    -o-transform: rotate(2deg);
    transform: rotate(2deg);
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #7d8b99;
  }

  .token.punctuation {
    color: #5f6364;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #c92c2c;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.function,
  .token.builtin,
  .token.inserted {
    color: #2f9c0a;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: #a67f59;
    background: rgba(255, 255, 255, 0.5);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword,
  .token.class-name {
    color: #1990b8;
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .language-css .token.string,
  .style .token.string {
    color: #a67f59;
    background: rgba(255, 255, 255, 0.5);
  }

  .token.important {
    font-weight: normal;
  }

  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .namespace {
    opacity: 0.7;
  }

  @media screen and (max-width: 767px) {
    pre[class*="language-"]:before,
    pre[class*="language-"]:after {
      bottom: 14px;
      box-shadow: none;
    }
  }

  /* Plugin styles */
  .token.tab:not(:empty):before,
  .token.cr:before,
  .token.lf:before {
    color: #e0d7d1;
  }

  /* Plugin styles: Line Numbers */
  pre[class*="language-"].line-numbers {
    padding-left: 0;
  }

  pre[class*="language-"].line-numbers code {
    padding-left: 3.8em;
  }

  pre[class*="language-"].line-numbers .line-numbers-rows {
    left: 0;
  }

  /* Plugin styles: Line Highlight */
  pre[class*="language-"][data-line] {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
  }
  pre[data-line] code {
    position: relative;
    padding-left: 4em;
  }
  pre .line-highlight {
    margin-top: 0;
  }
`;

export default GlobalStyle;
