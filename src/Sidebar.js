import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2> Sahil Angral</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        sahil_28
                    </h3>   
                </div>
                <CreateIcon />
            </div>    
        </div>
    )
}

export default Sidebar
