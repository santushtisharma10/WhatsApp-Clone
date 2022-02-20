import { Avatar, IconButton } from '@mui/material';
import React from 'react';

import { MoreVert, SearchOutlined, InsertEmoticon, Mic,Send } from '@mui/icons-material';



function ChatComponent() {
  return <div className='chat'>
    <div className='chat-header'>
      <Avatar />
      <div className='chat-headerInfo'>
        <h3>Contact or Group</h3>
        <p style={{ color: "gray" }}>Last seen at..</p>
      </div>
      <div className='chat-headerRight'>
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>

      </div>
    </div>
    <div className='chat-body'>
      <p className='chat-msg'>
        <span className='chat-name'>Anonymous</span>
        This is a message
        <span className='chat-time'>{new Date().toUTCString()}</span>
      </p>
    </div>
    <div className='chat-footer'>
      <IconButton >
      <InsertEmoticon />
      </IconButton>
      
      <form>
        <input placeholder='Type a message' type="text"/>
        <button>Submit</button>
      </form>
      <IconButton>
      <Send />
      </IconButton>
      <IconButton>
      <Mic />
      </IconButton>
      
      
    </div>
  </div>;
}

export default ChatComponent;
