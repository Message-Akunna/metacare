import { Dispatch } from 'react';
import * as types from '../types';

const data: Array<object> = [
    {
        "month": 'Jan', 
        "replies": 23
    },
    {
        "month": 'Feb', 
        "replies": 34
    },
    {
        "month": 'Mar', 
        "replies": 43
    },
    {
        "month": 'Apr', 
        "replies": 23
    },
    {
        "month": 'May', 
        "replies": 45
    },
    {
        "month": 'Jun', 
        "replies": 32
    },
    {
        "month": 'Jul', 
        "replies": 54
    },
    {
        "month": 'Aug', 
        "replies": 12
    },
    {
        "month": 'Sep', 
        "replies": 33
    },
    {
        "month": 'Oct', 
        "replies": 51
    },
    {
        "month": 'Nov', 
        "replies": 24
    },
    {
        "month": 'Dec', 
        "replies": 40
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