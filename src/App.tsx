import React, { Fragment, FC } from 'react';
import { Routes, Route } from "react-router-dom";
// scss files
import "./assets/sass/app.scss";
// bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
// components
import Dashboard from './pages/dashboard';
// 
import WrongRouteState from './components/placeholder/WrongRouteState';


const App : FC = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="*" element={<WrongRouteState />} />
            </Routes>
        </Fragment>
    );
}

export default App;
