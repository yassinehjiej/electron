import React from "react";
import { NavLink } from 'react-router-dom';
import { TeamOutlined } from '@ant-design/icons';

const menuItems = [
    {
        icon: TeamOutlined ,
        path: '/',
        key: 'clients',
    },
]
export default function SideMenu(){
        return(
        <div className="w-full h-full p-3">
            {menuItems.map((item) => (
                <NavLink key={item.key} to={item.path} className="py-3 mb-2 text-neutral-500 rounded-lg flex items-center px-2 md:px-3 justify-center md:justify-start" >
                    <div className="flex px-4 justify-around items-center">
                        <item.icon style={{fontSize: 25, color:"white"}}/>
                    </div>
                </NavLink>
            ))}
        </div>
    );
}