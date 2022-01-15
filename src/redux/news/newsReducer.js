import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import newsAction from './newsAction';

const addNews = (state, action) => {
    return [...state, action.payload];
};

const items = createReducer([], {
    [newsAction.fetchNewsSuccess]: (state, action) => action.payload,
    [newsAction.addNewsSuccess]: addNews,
});

export default combineReducers({
    items,
});
