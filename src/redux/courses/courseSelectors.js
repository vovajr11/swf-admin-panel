import { createSelector } from '@reduxjs/toolkit';

const getCourseData = state => state.courses.items;

export default {
    getCourseData,
};
