import { Dispatch } from 'react';
import * as types from '../types';

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


export const getAnalytics = () => (dispatch: Dispatch<object>) => {
    dispatch(setAnalyticsLoading());
    dispatch({
        type: types.GET_ANALYTICS,
        payload: data
    })
      
}

// 
export const setAnalyticsLoading = () => {
    return {type: types.ANALYTICS_LOADING}
}