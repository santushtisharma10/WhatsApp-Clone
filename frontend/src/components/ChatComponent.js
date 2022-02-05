import { Avatar,IconButton } from '@mui/material';
import React from 'react';

import {MoreVert,  SearchOutlined} from '@mui/icons-material';



function ChatComponent() {
  return <div className='chat'>
      <div className='chat-header'>
        <Avatar />
        <div className='chat-headerInfo'>
          <h3>Contact or Group</h3>
          <p style={{color: "gray"}}>Last seen at..</p>
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
  </div>;
}

export default ChatComponent;
