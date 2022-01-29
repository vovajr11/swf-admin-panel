import axios from 'axios';
import courseAction from './courseAction';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.baseURL = 'http://localhost:5000/api';

const fetchCourse = () => (dispatch, getState) => {
    dispatch(courseAction.fetchCourseRequest());

    axios
        .get('/course/all-course')
        .then(({ data }) => {
            dispatch(courseAction.fetchCourseSuccess(data));
        })
        .catch(error => dispatch(courseAction.fetchCourseError(error)));
};

const addCourse = courseData => (dispatch, getState) => {
    dispatch(courseAction.addCourseRequest());

    axios
        .post('/course/create-course', courseData)
        .then(res => {
            dispatch(courseAction.addCourseSuccess(res.data));
        })
        .catch(error => dispatch(courseAction.addCourseError(error)));
};

const addModule = (courseId, moduleData) => (dispatch, getState) => {
    axios
        .put(`/course/create-module/${courseId}`, moduleData)
        .then(res => {
            const resData = res.data;
            dispatch(courseAction.addModuleSuccess({ courseId, resData }));
        })
        .catch(error => dispatch(courseAction.addModuleError(error)));
};

const addChapter = (moduleId, chapterData) => (dispatch, getState) => {
    dispatch(courseAction.addChapterRequest());

    axios
        .put(`/course/create-theory/${moduleId}`, chapterData)
        .then(res => {
            const resData = res.data;
            dispatch(courseAction.addChapterSuccess({ moduleId, resData }));
        })
        .catch(error => dispatch(courseAction.addChapterError(error)));
};

export default {
    fetchCourse,
    addCourse,
    addModule,
    addChapter,
};
