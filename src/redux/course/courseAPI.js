import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = 'http://localhost:5000/api';

export const fetchCourse = createAsyncThunk('course/fetchCourse', async () => {
    const res = await axios.get('/course/all-course');

    return res.data;
});

export const addCourse = createAsyncThunk('course/addCourse', async data => {
    const res = await axios.post('/course/create-course', data);
    return res.data;
});

export const addModule = createAsyncThunk('course/addModule', async data => {
    const res = await axios.put(`/course/create-module/${data.courseId}`, data);
    return res.data;
});

export const addChapter = createAsyncThunk('course/addChapter', async data => {
    const res = await axios.put(`/course/create-theory/${data.moduleId}`, data);
    return { moduleId: data.moduleId, data: res.data };
});
