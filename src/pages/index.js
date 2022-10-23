import React, { useState } from "react";
import { Layout as AntLayout } from 'antd';
import SideMenu from "./components/SideMenu";
import { Route, Routes } from "react-router-dom";
import SiderCollapseIcon from "./components/SiderCollapseIcon";
import ClientsPage from "./ClientsPage";
import './styles.scss';

export default function ProtectedApp() {
    const [rotated, setRotated] = useState(false);

    return(
        <AntLayout>
            <AntLayout.Sider className="bg-primary fixed h-[100vh] w-20"           
            collapsible
            trigger={<SiderCollapseIcon rotate={rotated ? 180 : 0} />}
            onCollapse={setRotated}
            >
                <SideMenu show={rotated === false} />
            </AntLayout.Sider>
            <AntLayout.Content>
                <div className="section-container h-full bg-[#00152900]">
                    <AppRouting />
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
      </Routes>
    );
  }