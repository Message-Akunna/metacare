import { AnyAction } from '@reduxjs/toolkit';
import * as types from '../types';

const initialState = {
	analytics: [],
	isAnalyticsLoading: false, //will be true when fetching data and back to false when the fetch is done
	isAnalyticsLoaded: false,
    analyticsErrorMessage: ""
}



//export the post reducer
const analyticsReducer = (state: any = initialState, action: AnyAction) => {
	switch (action.type) {
		case types.GET_ANALYTICS:
			return {
				...state,
				analytics: [
					...action.payload
				],
				isAnalyticsLoading: false,
				isAnalyticsLoaded: true
			}
		case types.ANALYTICS_LOADING:
			return {
				...state,
				isAnalyticsLoading: true,
				isAnalyticsLoaded: false
			}
		default:
			return state;
	}
}


export default analyticsReducer;