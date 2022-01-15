import { createAction } from '@reduxjs/toolkit';

const addNewsRequest = createAction('news/addRequest');
const addNewsSuccess = createAction('news/addSuccess');
const addNewsError = createAction('news/addError');

const fetchNewsRequest = createAction('news/fetchRequest');
const fetchNewsSuccess = createAction('news/fetchSuccess');
const fetchNewsError = createAction('news/fetchError');

export default {
    addNewsRequest,
    addNewsSuccess,
    addNewsError,

    fetchNewsRequest,
    fetchNewsSuccess,
    fetchNewsError,
};
