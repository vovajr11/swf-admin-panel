import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
import burgerReducer from './burgerMenu/burgerReducer';
import noteReducer from './notes/noteReducer';
import { courseSlice } from './course/courseSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        courses: courseSlice.reducer,
        burger: burgerReducer,
        notes: noteReducer,
    },
});

export const persistor = persistStore(store);
