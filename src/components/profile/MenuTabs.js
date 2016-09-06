import React, {Component} from 'react';
import {Link} from 'react-router';

class MenuTabs extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs nav-justified">
          <li>
            <Link to="/home/profile/myListings">
              My Listings

            </Link>
          </li>
          <li>
            <Link to="/home/profile/myBids">
              My Bids

            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuTabs;
