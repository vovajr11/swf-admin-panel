import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import courseAction from './courseAction';

const initialState = { items: [] };

const fetchCourse = (state, action) => {
    state.items.push(...action.payload);
};

const addCourse = (state, action) => {
    state.items.push(action.payload);
};

const addModuleToCourse = (state, action) => {
    const { courseId, resData } = action.payload;

    state.items.map(item =>
        item.id === courseId ? item.courseModules.push(resData) : item,
    );
};

const addChapterToModule = (state, action) => {
    const { moduleId, resData } = action.payload;

    state.items
        .flatMap(({ courseModules }) => courseModules)
        .map(module =>
            module._id === moduleId ? module.chapters.push(resData) : module,
        );
};

const items = createReducer(initialState, {
    [courseAction.fetchCourseSuccess]: fetchCourse,
    [courseAction.addCourseSuccess]: addCourse,
    [courseAction.addModuleSuccess]: addModuleToCourse,
    [courseAction.addChapterSuccess]: addChapterToModule,
});

export default items;
