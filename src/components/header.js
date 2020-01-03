import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Icon from './icon'

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

const Container = styled.div`
  max-width: 100vw;
  height: 17vh;
  margin: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};
  transition: all 0.5s ease-out;
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`

const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  cursor: default;
  text-align: center;
`

const LinksItem = styled.li`
  padding: 0;
  margin: 0;
  display: inline-block;
  margin-left: 18px;
  cursor: pointer;
  color: ${props => props.theme.colors.textColor};
  user-select: none;
`

const Header = ({ isDark, setIsDark }) => (
  <Container>
    <Icon isDark={isDark} setIsDark={setIsDark} />
    <Links>
      {links.map(link => (
        <LinksItem key={link.href}>
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            to={link.href}
          >
            {link.title}
          </Link>
        </LinksItem>
      ))}
    </Links>
  </Container>
)

export default Header
