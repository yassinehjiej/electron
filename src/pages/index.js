import React, { useEffect, useState } from "react";
import { Layout as AntLayout } from 'antd';
import SideMenu from "./components/SideMenu";
import { Route, Routes, useLocation } from "react-router-dom";
import ClientsPage from "./ClientsPage";
import './styles.scss';
import ClientDetailsPage from "./ClientDetailsPage";
import { getAllClients } from "../service/service";
import { useDispatch } from "react-redux";



export default function ProtectedApp() {
    const [auth, setAuth] = useState();
    const [show, setShow] = useState(false);
    const paths = ['/', '/details'];
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
            <AntLayout.Sider
                style={{height: '100vh'}}
                width= '210'
                onCollapse={setShow}
                collapsible
                collapsedWidth='95'
                className="bg-primary side-menu--shadow">
                    <SideMenu show={!show}/>
            </AntLayout.Sider>
            <AntLayout>
                <AntLayout.Content style={{height: '100vh' }}>
                    <div className="section-container scroll-y-auto h-full bg-[#00152900]">
                        {auth && !paths.includes(location.pathname) && <ClientsPage/>}
                        {auth && <AppRouting/>}
                    </div>
                </AntLayout.Content>
            </AntLayout>
        </AntLayout>
    );
}

function AppRouting() {
    return (
      <Routes>
          <Route key='/' path='/' element={<ClientsPage />} />
          <Route key='/details' path='/details' element={<ClientDetailsPage />} />
      </Routes>
    );
  }