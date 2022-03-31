import React, { Fragment } from 'react';
// 
import Container from "react-bootstrap/Container";
// 
import AnalyticsHeader from './AnalyticsHeader';
import AnalyticsCard from './AnalyticsCard';
import AnalyticsNav from "./AnalyticsNav";

const Analytics = () => {    
    
    const data: Array<object> = [
        {
            "month": 'Jan', 
            "count": 23
        },
        {
            "month": 'Feb', 
            "count": 34
        },
        {
            "month": 'Mar', 
            "count": 43
        },
        {
            "month": 'Apr', 
            "count": 23
        },
        {
            "month": 'May', 
            "count": 45
        },
        {
            "month": 'Jun', 
            "count": 32
        },
        {
            "month": 'Jul', 
            "count": 54
        },
        {
            "month": 'Aug', 
            "count": 12
        },
        {
            "month": 'Sep', 
            "count": 33
        },
        {
            "month": 'Oct', 
            "count": 51
        },
        {
            "month": 'Nov', 
            "count": 24
        },
        {
            "month": 'Dec', 
            "count": 40
        }
    ]
    // 
    return (
        <Fragment>
            <AnalyticsNav/>
            <AnalyticsHeader/>
            <section className='pb-3'>
                <Container fluid className="app-container">
                    <AnalyticsCard data={data}/>
                    <AnalyticsCard data={data}/>
                    <AnalyticsCard data={data}/>
                    <AnalyticsCard data={data}/>
                </Container>
            </section>
        </Fragment>
    )
}

export default Analytics;
