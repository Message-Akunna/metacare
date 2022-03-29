import React, { FC } from 'react';
// 
import DashboardLayout from './layout';
import Analytics from './analytics';

const Dashboard : FC = ({
    ...props
}) => {
  return (
        <DashboardLayout>
            <Analytics/> 
        </DashboardLayout>
  )
}

export default Dashboard