import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class Header extends Component {

  componentDidMount() {

    // const search = location.search;
    console.log(window.URLSearchParams);

  }

  renderContent() {
    // console.log(this.props);
    switch (this.props.auth) {
      // case null:
        // return;
      case null:
      case false:
        return (
          <ul className="right">
            <li>
              <a href={'http://localhost:5000/auth/google'}>Login With Google</a>
            </li>
            <li>
              <a href={'http://localhost:5000/auth/facebook'}>Login With Facebook</a>
            </li>
          </ul>
        );
      default:
        return [
          // <li key="3" style={{ margin: '0 10px' }}>
          //   <Link to="/blogs">My Blogs</Link>
          // </li>,
          <li key="2">
            <a href={'/auth/logout'}>Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="indigo">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/chat' : '/'}
            className="left brand-logo"
            style={{ marginLeft: '10px' }}
          >
            Vidzter
          </Link>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
