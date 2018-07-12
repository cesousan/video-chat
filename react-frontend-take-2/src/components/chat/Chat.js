
import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ChatBox } from './ChatBox';
import { ChatList } from './ChatList';

import { chatActions } from '../../actions';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username: '',
      chats: []
    };
  }

  componentDidMount() {
    this.props.dispatch(chatActions.connect());
  };

  render(){
    return (
      <div>
        <h2>Chat Room</h2>
        <ChatList chats={this.state.chats}/>
        <ChatBox  text={this.state.text}
                  username={this.state.username} />
        <div className="fixed-action-btn">
          <Link to="/chat/new" className="btn-floating btn-large red">
            <i className="material-icons">+</i>
          </Link>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  console.log(state);
  return {state};
};

export default connect(mapStateToProps)(Chat);
