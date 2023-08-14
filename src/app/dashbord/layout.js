import React from 'react';
import Sidebar from './SideBar'


const layout = ({children}) => {
    return (
        <div className='flex'>
            <div className='sideSection'><Sidebar></Sidebar></div>
            <div className='w-full bg-[#f5f5f5]'>{children}</div>
        </div>
    );
};

export default layout;