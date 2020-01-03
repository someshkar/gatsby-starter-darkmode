import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from './header';
import SEO from './seo';

import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

import './styles/normalize.css';
import './styles/global.css';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  transition: all 0.5s ease-out;
`;

const Layout = ({ children }) => {
  let localIsDark;

  if (localStorage.getItem('isDark') === 'false') {
    localIsDark = false;
  } else {
    localIsDark = true;
  }

  console.log(localIsDark);

  const [isDark, setIsDark] = useState(localIsDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
