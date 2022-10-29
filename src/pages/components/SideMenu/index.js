import React from "react";
import { NavLink } from 'react-router-dom';
import { TeamOutlined } from '@ant-design/icons';
import doctor from '../../../assets/doctor.png';

const menuItems = [
    {
        icon: TeamOutlined ,
        title: 'Mes clients',
        path: '/',
        key: 'clients',
    },
]
export default function SideMenu({show}){

    return(
        <div className="w-full h-full p-3">
            <div className="py-3">
                <div className="w-full flex justify-center">
                    <img
                        className="w-16"
                        src={doctor}
                        alt="Logo" />
                </div>
                { show &&
                    <div className="text-s text-white font-bold ml-2 h-5 overflow-hidden mt-2">
                        {`Dr Mohamed EL BAGHOULI`}
                    </div>
                }
            </div>
            {menuItems.map((item) => (
                <NavLink key={item.key} to={item.path} className="py-3 mb-2 text-neutral-500 rounded-lg flex items-center px-2 md:px-3 justify-center md:justify-start" >
                    <div className="flex px-4 items-center">
                        <item.icon style={{fontSize: 25, color:"white"}}/>
                            { show &&
                                <div className="text-s ml-2 h-5 overflow-hidden	">
                                    {item.title}
                                </div>
                            }
                    </div>
                </NavLink>
            ))}
        </div>
    );
}