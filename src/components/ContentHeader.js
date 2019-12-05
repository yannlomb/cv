import React, { Component } from 'react';
import Link from 'gatsby-link';
import config from '../data/config';

class ContentHeader extends Component {
  state = {
    menuItemsCount: config.menu.length
  };
  render() {
    const prevKey =
      this.props.currentKey - 1 === 0
        ? this.state.menuItemsCount
        : this.props.currentKey - 1;
    const nextKey =
      this.props.currentKey + 1 > this.state.menuItemsCount
        ? 1
        : this.props.currentKey + 1;

    const prevPage = config.menu.filter(page => page.key === prevKey)[0];
    const nextPage = config.menu.filter(page => page.key === nextKey)[0];
    console.log(prevPage);
    console.log(nextPage);
    return (
      <div className="content--header">
        <h1>{this.props.title}</h1>
        <div className="nextPrevNav">
          <Link className="prev" to={prevPage.href}>
            {`<< ${prevPage.nextPrevText}`}
          </Link>
          <Link className="next" to={nextPage.href}>
            {`${nextPage.nextPrevText} >>`}
          </Link>
        </div>
      </div>
    );
  }
}

export default ContentHeader;
