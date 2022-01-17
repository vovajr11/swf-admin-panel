import React, { useState } from 'react';
import {
    FlexDiv,
    CourseContentWrapp,
    ItemWrapp,
    CourseItem,
    ModuleItem,
    ChapterItem,
} from './Styled';

const Chapters = ({ chapters }) => (
    <ItemWrapp>
        {chapters.length > 0 ? (
            chapters.map(({ id, chapterName }) => (
                <ChapterItem key={id}>
                    <svg width="16" height="22">
                        <use xlinkHref="/img/svg/icons-min.svg#icon-file-text"></use>
                    </svg>
                    <h5>{chapterName}</h5>
                </ChapterItem>
            ))
        ) : (
            <p>Нема нічого</p>
        )}
    </ItemWrapp>
);

const Modules = ({ modules, setModuleInfo }) => {
    const [shownCourseContent, setShownCourseContent] = useState({});

    const toggleCourseContent = id => {
        setShownCourseContent(prevShownCourseContent => ({
            ...prevShownCourseContent,
            [id]: !prevShownCourseContent[id],
        }));
    };

    return (
        <ItemWrapp>
            {modules.length > 0 ? (
                modules.map(({ _id, moduleName, chapters }) => (
                    <ModuleItem key={_id}>
                        <FlexDiv>
                            {shownCourseContent[_id] ? (
                                <svg
                                    width="16"
                                    height="22"
                                    onClick={() => toggleCourseContent(_id)}
                                >
                                    <use xlinkHref="/img/svg/icons-min.svg#icon-circle-down"></use>
                                </svg>
                            ) : (
                                <svg
                                    width="16"
                                    height="22"
                                    onClick={() => toggleCourseContent(_id)}
                                >
                                    <use xlinkHref="/img/svg/icons-min.svg#icon-circle-right"></use>
                                </svg>
                            )}
                            <h4
                                onClick={() =>
                                    setModuleInfo({
                                        id: _id,
                                        name: moduleName,
                                    })
                                }
                            >
                                {moduleName}
                            </h4>
                        </FlexDiv>

                        {shownCourseContent[_id] ? (
                            <Chapters chapters={chapters} />
                        ) : null}
                    </ModuleItem>
                ))
            ) : (
                <p>Нема нічого</p>
            )}
        </ItemWrapp>
    );
};

const CourseContent = ({ courses, setCourseInfo, setModuleInfo }) => {
    const [shownCourseContent, setShownCourseContent] = useState({});

    const toggleCourseContent = id => {
        setShownCourseContent(prevShownCourseContent => ({
            ...prevShownCourseContent,
            [id]: !prevShownCourseContent[id],
        }));
    };

    return (
        <CourseContentWrapp>
            {courses.length > 0 ? (
                courses.map(({ id, courseName, courseModules }) => (
                    <CourseItem key={id}>
                        <FlexDiv>
                            {shownCourseContent[id] ? (
                                <svg
                                    width="16"
                                    height="22"
                                    style={{ fill: '#989898' }}
                                    onClick={() => toggleCourseContent(id)}
                                >
                                    <use xlinkHref="/img/svg/icons-min.svg#icon-circle-down"></use>
                                </svg>
                            ) : (
                                <svg
                                    width="16"
                                    height="22"
                                    style={{ fill: 'gray' }}
                                    onClick={() => toggleCourseContent(id)}
                                >
                                    <use xlinkHref="/img/svg/icons-min.svg#icon-circle-right"></use>
                                </svg>
                            )}

                            <svg
                                width="16"
                                height="22"
                                style={{ marginLeft: '10px', fill: '#989898' }}
                            >
                                <use xlinkHref="/img/svg/icons-min.svg#icon-folder"></use>
                            </svg>

                            <h3
                                onClick={() =>
                                    setCourseInfo({ id, courseName })
                                }
                            >
                                {courseName}
                            </h3>
                        </FlexDiv>

                        {shownCourseContent[id] ? (
                            <Modules
                                modules={courseModules}
                                setModuleInfo={setModuleInfo}
                            />
                        ) : null}
                    </CourseItem>
                ))
            ) : (
                <p>Курсів нема</p>
            )}
        </CourseContentWrapp>
    );
};

export default CourseContent;
