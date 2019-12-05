import React, { Component } from 'react';
import data from '../data/config';
import Link from 'gatsby-link';

class Menu extends Component {
  render() {
    return (
      <ul className="navigation large">
        {data.menu.map(item => (
          <li key={item.key}>
            <Link activeClassName="activeMenuItem" to={item.href}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Menu;
