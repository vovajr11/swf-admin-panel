import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourse } from '@redux/course/courseAPI';
import { useInput } from '@components/Input/useInput';
import { Input } from '@components/Global/Styled';
import TextEditor from '@components/TextEditor';
import CourseAndModuleEditor from './CourseAndModuleEditor';
import CourseContent from './CourseContent';
import { ChapterTitleWrapp } from './Styled';

const CreateCourse = () => {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses.items);

    useEffect(() => {
        dispatch(fetchCourse());
    }, []);

    const chapterName = useInput('', { isEmpty: true, minLength: 1 });
    const [courseInfo, setCourseInfo] = useState({});
    const [moduleInfo, setModuleInfo] = useState({});

    return (
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <ChapterTitleWrapp>
                    <Input
                        type="text"
                        placeholder="Тема"
                        value={chapterName.value}
                        onChange={e => chapterName.onChange(e)}
                        onBlur={e => chapterName.onBlur(e)}
                    />

                    <p>Вибраний модуль: {moduleInfo.name}</p>
                </ChapterTitleWrapp>

                <TextEditor
                    articleName={chapterName.value}
                    isEmptyChapterName={chapterName.isEmpty}
                    moduleDetails={{ id: moduleInfo.id, name: moduleInfo.name }}
                />
            </div>

            <div>
                <CourseAndModuleEditor courseInfo={courseInfo} />

                <CourseContent
                    courses={courses}
                    setCourseInfo={setCourseInfo}
                    setModuleInfo={setModuleInfo}
                />
            </div>
        </section>
    );
};

export default CreateCourse;
