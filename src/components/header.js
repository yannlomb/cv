import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <header className="green">
      <img className="logo-start" src="/static/yannicklogo.svg" />
      <h1>
        Curriculum Vitae <br />
        <span className="name">Yannick Lombart</span>
      </h1>
    </header>
  </div>
)

export default Header
