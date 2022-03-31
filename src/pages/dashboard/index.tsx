import React, { FC } from 'react';
// 
import DashboardLayout from './layout';
import Analytics from './analytics';
// 
import  {  SidebarTogglerProvider  }  from  "../../context/SidebarToggleContext";

const Dashboard : FC = ({
    ...props
}) => {
  return (
    <SidebarTogglerProvider>
      <DashboardLayout>
          <Analytics/> 
      </DashboardLayout>
    </SidebarTogglerProvider>
  )
}

export default Dashboard