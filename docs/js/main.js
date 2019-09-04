import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import '@fortawesome/fontawesome-free/css/all.css';

import theme from '../../src/theme';

import '../../src/fonts/proximanova-regular.woff';

import Root from './Root';

import '../css/demo.scss';
import '../img/favicon.ico';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  /* https://github.com/necolas/normalize.css/issues/694 */
  button,
  input,
  optgroup,
  select,
  textarea {
    /* stylelint-disable sh-waqar/declaration-use-variable */
    font-family: inherit;
    /* stylelint-enable sh-waqar/declaration-use-variable */
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Root />
    </>
  </ThemeProvider>,
  document.getElementById('demo')
);

if (module.hot) {
  module.hot.accept();
}
