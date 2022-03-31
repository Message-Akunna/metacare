import  React, { FC, useState, createContext }  from  "react";
// 
interface Props {
    children : JSX.Element,
}
//
interface ISidebarToggleContext {
    toggle: boolean;
    toggleSidebar?: () => void;
}

const defaultState = {
    toggle: false,
};
// Context has been created
const  SidebarToggleContext  =  createContext<ISidebarToggleContext>(defaultState);
// Provider
const  SidebarTogglerProvider : FC<Props> =  ({ children })  =>  {
    const  [toggle, setToggle]  =  useState(defaultState.toggle);
    const toggleSidebar = ()  =>  {
        setToggle(!toggle);
    };

    return  (
        <SidebarToggleContext.Provider value={{ toggle, toggleSidebar }}>
            {children}
        </SidebarToggleContext.Provider>
    );
};
export  {  SidebarToggleContext,  SidebarTogglerProvider  };