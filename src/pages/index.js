import React, { useState } from "react";
import { Layout as AntLayout } from 'antd';
import SideMenu from "./components/SideMenu";
import { Route, Routes } from "react-router-dom";
import SiderCollapseIcon from "./components/SiderCollapseIcon";

export default function ProtectedApp() {
    const [rotated, setRotated] = useState(false);

    return(
        <AntLayout>
            <AntLayout.Sider className="bg-primary w-20 h-[100vh]"           
            collapsible
            trigger={<SiderCollapseIcon rotate={rotated ? 180 : 0} />}
            onCollapse={setRotated}
            >
                <SideMenu show={rotated === false} />
            </AntLayout.Sider>
            <AntLayout.Content>
                <div className="scroll-y-auto h-full">
                    <AppRouting />
                </div>
            </AntLayout.Content>
        </AntLayout>
    );
}

function AppRouting() {
    return (
      <Routes>
          <Route key='/clients' path='/clients' element={<div> Clients Page</div>} />
          <Route key='/config' path='/config' element={<div>config Page</div>} />
      </Routes>
    );
  }