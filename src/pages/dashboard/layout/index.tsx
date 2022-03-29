import React, { FC, Fragment } from 'react';
// layout components
import Header from "./Header";
import Sidebar from "./Sidebar";
// styles
import "../../../assets/sass/dashboard/dashboard.scss"

interface Props {
    children?: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ 
    children, 
    ...props}) => {
    return (
        <Fragment>
            <main className='app-main d-flex flex-column flex-lg-row vh-100 h-100'>
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