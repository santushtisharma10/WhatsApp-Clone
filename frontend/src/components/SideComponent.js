import React from 'react';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeTwoToneIcon from '@mui/icons-material/DonutLargeTwoTone';
import { Avatar } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SideChat from './SideChat';

function SideComponent() {
    return <div className='side'>

        <div className='side-header'>
            <Avatar />
            <div className='side-headerRight'>

                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                <IconButton>
                    <DonutLargeTwoToneIcon />
                </IconButton>
            </div>
        </div>
        <div className='side-search'>
            <div className='side-searchContainer'>
                <SearchOutlinedIcon style={{color: "gray"}} />
                <input placeholder='Search for Contact' type="text"></input>
            </div>
        </div>
        <div className='side-chats'>
            <SideChat />
            <SideChat />
            <SideChat />
            <SideChat />
            <SideChat />
            <SideChat />
            <SideChat />
        </div>
    </div>;
}

export default SideComponent;
