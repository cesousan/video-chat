import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    console.log(this.props.auth)
    switch (this.props.auth) {
      // case null:
        // return;
      case null:
      case false:
      case {status: "error", error: "ANOTHORIZED_USER"} :
        return (
          <li>
            <a href={'/auth/google'}>Login With Google</a>
          </li>
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
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
