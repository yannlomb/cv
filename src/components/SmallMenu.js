import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import data from '../data/config';
import Link from 'gatsby-link';

class SmallMenu extends Component {
  state = {
    isVisible: false
  };

  _handleClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        {this.state.isVisible ? (
          <div className="smallMenu">
            <button onClick={this._handleClick} className="closeBtn">
              x sluit
            </button>
            <ul className="navigation small">
              {data.menu.map(item => (
                <li onClick={this._handleClick} key={item.key}>
                  <Link activeClassName="activeMenuItem" to={item.href}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <button onClick={this._handleClick} className="menuBtn">
            # menu
          </button>
        )}
      </div>
    );
  }
}

export default SmallMenu;
