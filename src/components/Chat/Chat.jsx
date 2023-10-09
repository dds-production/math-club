import React from 'react';
import ChatList from './ChatList';
import ChatArea from './ChatArea';
// import ChatInfo from './ChatInfo';

function Chat() {
  return (
    <div className="flex">
      <ChatList />
      <ChatArea />
      {/* <ChatInfo /> */}
    </div>
  );
}

export default Chat;
