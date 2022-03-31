import React, { FC, Fragment, useContext, MouseEvent } from 'react';
// layout components
import Header from "./Header";
import Sidebar from "./Sidebar";
// 
import  {  SidebarToggleContext  }  from  "../../../context/SidebarToggleContext";


interface Props {
    children?: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ 
    children, 
    ...props}) => {
    // 
    const { toggle, toggleSidebar } = useContext(SidebarToggleContext);

    const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        toggleSidebar && toggleSidebar();
    };
    
    return (
        <Fragment>
            <main className={`app-main d-flex flex-column flex-lg-row vh-100 h-100 ${toggle? "show-sidebar" : ""}`}>
                <div onClick={handleOnClick} className={`app-sidebar-cover ${toggle? "fadeIn" : "fadeOut"}`}></div>
                <aside className='app-sidebar border-end'>
                    <Sidebar/>
                </aside>
                <article className='app-content flex-lg-1 vh-100 w-100 overflow-y-lg-auto'>
                    <header className='app-header'>
                        <Header/>
                    </header>
                    <section className='app-section'>
                        {children}
                    </section>
                </article>
            </main>
        </Fragment>
    )
}

export default DashboardLayout