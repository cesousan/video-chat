import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../actions';
// import queryString from 'query-string';

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    this.props.dispatch(userActions.login(e))
  };

  handleLogout() {
    this.props.dispatch(userActions.logout())
  }

  componentDidMount() {
    this.props.dispatch(userActions.identifySelf());
  }

  renderContent(loggedIn, user) {
    switch (loggedIn) {
      case null:
        return;
      case false:
        return (
            <ul className="right">
              <li>
                <button className="waves-effect waves-teal btn-flat" onClick={() => this.handleLogin('google')}>Login with google</button>
              </li>
              <li>
                <button className="waves-effect waves-teal btn-flat" onClick={() => this.handleLogin('facebook')}>Login with facebook</button>
              </li>
            </ul>
        );
      default:
        return [
          <ul key="2" className="right">
            <li>
              <button className="waves-effect waves-teal btn-flat">{`Hello, ${user.user.info.name}!`}</button>
            </li>
            <li>
              <button className="waves-effect waves-teal btn-flat" onClick={() => this.handleLogout()}>Logout</button>
            </li>
          </ul>
        ];
    }
  }

  render() {
    const { user } = this.props;
    const loggedIn = user.loggingIn
      ? null
      : user.user && user.loading === false
        ? true
        : false;
    return (
      <nav className="indigo">
        <div className="nav-wrapper">
          <Link
            to={loggedIn ? 'chat' : ''}
            className="left brand-logo"
            style={{ marginLeft: '10px' }}
          >
            Vidzter
          </Link>
          {this.renderContent(loggedIn, user)}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { authentication} = state;
  const user = authentication;
  return {
    user
  }
}

export default connect(mapStateToProps)(Header);
