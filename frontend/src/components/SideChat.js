import { Avatar } from '@mui/material';
import React from 'react';

function SideChat() {
  return <div className='sideChat'>

      <Avatar />
      <div className='sideChat-info'>
          <h3>Contact or Group</h3>
          <p>Last Message</p>
      </div>
  </div>;
}

export default SideChat;
