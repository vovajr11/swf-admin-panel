import { createSlice } from '@reduxjs/toolkit';
import { fetchCourse, addCourse, addModule, addChapter } from './courseAPI';

export const courseSlice = createSlice({
    name: 'course',
    initialState: { items: [] },
    extraReducers: builder => {
        builder.addCase(fetchCourse.fulfilled, (state, action) => {
            state.items = action.payload;
        });

        builder.addCase(addCourse.fulfilled, (state, action) => {
            state.items.push(action.payload);
        });

        builder.addCase(addModule.fulfilled, (state, action) => {
            const { courseId, resData } = action.payload;
            state.items.map(item =>
                item.id === courseId ? item.courseModules.push(resData) : item,
            );
        });

        builder.addCase(addChapter.fulfilled, (state, action) => {
            const { moduleId, data } = action.payload;

            state.items
                .flatMap(({ courseModules }) => courseModules)
                .map(module =>
                    module._id === moduleId
                        ? module.chapters.push(data)
                        : module,
                );
        });
    },
});
