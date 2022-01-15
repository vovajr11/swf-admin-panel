import { createAction } from '@reduxjs/toolkit';

const addCourseRequest = createAction('course/addRequest');
const addCourseSuccess = createAction('course/addSuccess');
const addCourseError = createAction('course/addError');

const fetchCourseRequest = createAction('course/fetchRequest');
const fetchCourseSuccess = createAction('course/fetchSuccess');
const fetchCourseError = createAction('course/fetchError');

const addModuleRequest = createAction('module/addRequest');
const addModuleSuccess = createAction('module/addSuccess');
const addModuleError = createAction('module/addError');

const addChapterRequest = createAction('chapter/addRequest');
const addChapterSuccess = createAction('chapter/addSuccess');
const addChapterError = createAction('chapter/addError');

export default {
    addCourseRequest,
    addCourseSuccess,
    addCourseError,

    fetchCourseRequest,
    fetchCourseSuccess,
    fetchCourseError,

    addModuleRequest,
    addModuleSuccess,
    addModuleError,

    addChapterRequest,
    addChapterSuccess,
    addChapterError,
};
