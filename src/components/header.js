import React from 'react'
import Link from 'gatsby-link'
import logo from './yannicklogo.svg'

const Header = ({ siteTitle }) => (
  <div>
    <header className="green">
      <img className="logo-start" src={logo} />
      <h1>
        Curriculum Vitae <br />
        <span className="name">Yannick Lombart</span>
      </h1>
    </header>
  </div>
)

export default Header
