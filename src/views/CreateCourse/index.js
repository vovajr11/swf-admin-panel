import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { courseOperations, courseSelectors } from '../../redux/courses';
import { useInput } from '../../components/Input/useInput';
import { Input, Button } from '../../components/Global/Styled';
import CourseAndModuleEditor from './CourseAndModuleEditor';
import CourseContent from './CourseContent';
import TextEditor from '../../components/TextEditor';
import { ChapterTitleWrapp } from './Styled';

const CreateCourse = props => {
    const { onFetchCourses, onAddCourse, onAddModule, onAddChapter, courses } =
        props;

    useEffect(() => {
        onFetchCourses();
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
                    addArticle={onAddChapter}
                    articleName={chapterName.value}
                    moduleId={moduleInfo.id}
                />
            </div>

            <div>
                <CourseAndModuleEditor
                    addCourse={onAddCourse}
                    addModule={onAddModule}
                    allCourses={courses}
                    courseInfo={courseInfo}
                />

                <CourseContent
                    courses={courses}
                    setCourseInfo={setCourseInfo}
                    setModuleInfo={setModuleInfo}
                />
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    courses: courseSelectors.getCourseData(state),
});

const mapDispatchToProps = {
    onFetchCourses: courseOperations.fetchCourse,
    onAddCourse: courseOperations.addCourse,
    onAddModule: courseOperations.addModule,
    onAddChapter: courseOperations.addChapter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourse);
