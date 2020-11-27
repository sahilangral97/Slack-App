import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import React from 'react'
import "./header.css"
import { useStateValue } from './StateProvider';
function Header() {

    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                    <Avatar className="header_avatar"
                        src = {user?.photoURL}
                        alt = {user?.displayName}
                    />
                    <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search in Slack App" />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>

            
        </div>
    )
}

export default Header
