import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import Header from './header'

import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'

import './styles/normalize.css'
import './styles/global.css'

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  transition: all 0.5s ease-out;
`

const Layout = ({ children }) => {
  let localIsDark

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('isDark') === 'false') {
      localIsDark = false
    } else {
      localIsDark = true
    }
    console.log(localIsDark ? 'dark mode' : 'light mode')
  }

  const [isDark, setIsDark] = useState(localIsDark)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
