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
          <li>
            <Link to="/home/profile/bidsWon">
              Bids Won
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'fixed',
  }
}

export default MenuTabs;
