import React from "react";
import { NavLink } from 'react-router-dom';
import { SettingOutlined, TeamOutlined } from '@ant-design/icons';

const menuItems = [
    {
        title: 'Mes Clients',
        icon: TeamOutlined ,
        path: '/',
        key: 'clients',
    },
    {
        title: 'Configuration',
        icon: SettingOutlined ,
        path: '/config',
        key: 'config',
    },
]
export default function SideMenu({show}){
        return(
        <div className="w-full h-full p-3">
            {menuItems.map((item) => (
                <NavLink key={item.key} to={item.path}>
                    <div className="flex px-4 justify-around items-center">
                        <item.icon style={{fontSize: 25, color:"white",  marginTop:20}}/>
                        {show && 
                        <p className="hidden md:block text-white text-s font-sans mt-[36px] ">
                            {item.title}
                        </p>
                        }
                    </div>
                </NavLink>
            ))}
        </div>
    );
}