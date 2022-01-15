import axios from 'axios';
import newsAction from './newsAction';

axios.defaults.baseURL = 'http://localhost:5000/api';

const addNews = newsData => (dispatch, getState) => {
    dispatch(newsAction.addNewsRequest());

    axios
        .post('/news/add-news', newsData)
        .then(response => {
            dispatch(newsAction.addNewsSuccess(response.data));
        })
        .catch(error => dispatch(newsAction.addNewsError(error)));
};

export default {
    addNews,
};
