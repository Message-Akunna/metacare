import React, { FC, Fragment, useMemo, useCallback, Suspense } from 'react';
import {connect} from 'react-redux';
// 
import Container from "react-bootstrap/Container";
// 
import AnalyticsNav from "./AnalyticsNav";
import AnalyticsCard from './AnalyticsCard';
import AnalyticsHeader from './AnalyticsHeader';
import AnalyticsLoader from './AnalyticsLoader';
// actions
import { getAnalytics } from "../../../reduxStore/actions/analyticsActions";
import { RootState } from '../../../reduxStore/store';

interface Props {
    getAnalytics: () => void;
    analytics: Array<object>;
    isAnalyticsLoading: boolean;
    isAnalyticsLoaded: boolean;
}

const Analytics: FC<Props> = ({
    getAnalytics,
    analytics,
    isAnalyticsLoading,
    isAnalyticsLoaded,
}) => {    
    // 
    const promise = useMemo(() => {
        return getAnalytics();
    }, [getAnalytics]);
    // 
    const fetchAnalytics = useCallback(() => {
        if (isAnalyticsLoading) {
            throw promise;
        }
        return analytics;
    }, [analytics, isAnalyticsLoading, promise]);
    // 
    return (
        <Fragment>
            <AnalyticsNav/>
            <AnalyticsHeader/>
            <section className='pb-3'>
                <Container fluid className="app-container">
                    <Suspense fallback={<AnalyticsLoader />}>
                        <AnalyticsCard data={fetchAnalytics()} title={"Average Response Time"} color="#F05D23"/>
                        <AnalyticsCard data={fetchAnalytics()} title={"Replies per resolution "} color="#3E68FF"/>
                        <AnalyticsCard data={fetchAnalytics()} title={"Average resolution time"} color="#FB6491"/>
                        <AnalyticsCard data={fetchAnalytics()} title={"First contact resolution rate"} color="#07C9E2"/>
                    </Suspense>
                </Container>
            </section>
        </Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    analytics: state.analytics.analytics,
    isAnalyticsLoading: state.analytics.isAnalyticsLoading,
    isAnalyticsLoaded: state.analytics.isAnalyticsLoaded,
});


export default connect(mapStateToProps, { getAnalytics })(Analytics);
