import React, { useEffect, useState } from "react";
import { Layout as AntLayout } from 'antd';
import SideMenu from "./components/SideMenu";
import { Route, Routes, useLocation } from "react-router-dom";
import SiderCollapseIcon from "./components/SiderCollapseIcon";
import ClientsPage from "./ClientsPage";
import './styles.scss';
import ClientDetailsPage from "./ClientDetailsPage";
import { getAllClients } from "../service/service";
import { useDispatch } from "react-redux";



export default function ProtectedApp() {
    const [rotated, setRotated] = useState(false);
    const [auth, setAuth] = useState();
    const paths = ['/', '/config', '/details'];
    const location = useLocation();
    const dispatch = useDispatch();

    
    useEffect(()=>{
        getAllClients()
        .then((response)=> {
            dispatch({type:"addClients", payload:{clients:response}}); 
            setAuth(response)})
            // eslint-disable-next-line
    },[]);
    

    return(
        <AntLayout>
            <AntLayout.Sider className="bg-primary fixed w-20"           
            collapsible
            trigger={<SiderCollapseIcon rotate={rotated ? 180 : 0} />}
            onCollapse={setRotated}
            >
                <SideMenu show={rotated === false} />
            </AntLayout.Sider>
            <AntLayout.Content>
                <div className="section-container h-full bg-[#00152900]">
                    {auth && !paths.includes(location.pathname) && <ClientsPage/>}
                    {auth && <AppRouting/>}
                </div>
            </AntLayout.Content>
        </AntLayout>
    );
}

function AppRouting() {
    return (
      <Routes>
          <Route key='/' path='/' element={<ClientsPage />} />
          <Route key='/config' path='/config' element={<div>config Page</div>} />
          <Route key='/details' path='/details' element={<ClientDetailsPage />} />
      </Routes>
    );
  }