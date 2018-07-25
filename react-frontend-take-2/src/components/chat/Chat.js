
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
      // username: '',
      chats: []
    };
    this.handleTextChange = handleTextChange.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(chatActions.connect());
  };

  render(){
    console.log(this.props);
    let username = this.props.username || '';
    let text = this.props.text || '';
    let chats = this.props.chats || [];
    return (
      <div>
        <h2>Chat Room</h2>
        <ChatList chats={chats}/>
        <ChatBox  text={text}
                  username={username}
                  handleTextChange={this.handleTextChange}/>
        {/* <div className="fixed-action-btn">
          <Link to="/chat/new" className="btn-floating btn-large red">
            <i className="material-icons">+</i>
          </Link>
        </div> */}
      </div>
    );
  }
};

function handleTextChange(evt) {
  if (evt.key === 'Enter') {
    this.props.dispatch(chatActions.sendMessage(evt.target.value, this.props.socket));
    evt.target.value = '';
  } else {
    this.props.dispatch(chatActions.typeMessage(evt.target.value));
    // this.setState({ text: evt.target.value });
  }
}

function mapStateToProps(state) {
  console.log(state);
  let {
    connexion,
    chat,
    authentication,
  } = state;
  const { socket } = connexion;
  const { user } = authentication;
  // const { chats } = chat;
  // const text = chat.msg;
  const username = user ? user.info.name : 'stranger';
  return {
    socket,
    username
  };
};

export default connect(mapStateToProps)(Chat);
