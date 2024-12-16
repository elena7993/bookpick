import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import DrawerLayout from "react-native-drawer-layout";
import SideMenu from "./pages/sideMenu/SideMenu";

const Layout = () => {
  const drawerRef = useRef(null);

  const openDrawer = () => drawerRef.current.openDrawer();
  const closeDrawer = () => drawerRef.current.closeDrawer();

  return (
    <DrawerLayout
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={() => <SideMenu onClose={closeDrawer} />}
    >
      {/* 메인 컨텐츠 */}
      <Outlet />
    </DrawerLayout>
  );
};

export default Layout;
