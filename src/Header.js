import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import React from 'react'
import "./header.css"
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                    <Avatar className="header_avatar"
                        src = ""
                        alt = ""
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
