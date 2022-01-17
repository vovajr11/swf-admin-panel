import React, { useState, useEffect } from 'react';
import { useInput } from '../../../components/Input/useInput';
import { Input, BtnGreen } from '../../../components/Global/Styled';
import { CourseEditItem } from './Styled';

const CourseAndModuleEditor = props => {
    const courseName = useInput('', { isEmpty: true, minLength: 1 });
    const courseDescription = useInput('', { isEmpty: true, minLength: 1 });
    const moduleName = useInput('', { isEmpty: true, minLength: 1 });

    const addCourse = () => {
        props.addCourse({
            courseName: courseName.value,
            courseDescription: courseDescription.value,
        });
    };

    const addModuleToCourse = () => {
        props.addModule(props.courseInfo.id, {
            moduleName: moduleName.value,
        });
    };

    return (
        <section>
            <CourseEditItem>
                {/* {courseName.isDirty && courseName.isEmpty && (
                    <div style={{ color: 'red' }}>Поле не може бути пустим</div>
                )} */}

                <Input
                    type="text"
                    placeholder="Назва курсу"
                    value={courseName.value}
                    onChange={e => courseName.onChange(e)}
                    onBlur={e => courseName.onBlur(e)}
                />

                <textarea
                    value={courseDescription.value}
                    onChange={e => courseDescription.onChange(e)}
                    onBlur={e => courseDescription.onBlur(e)}
                    maxLength={150}
                    placeholder="Опис курсу"
                ></textarea>

                <BtnGreen
                    type="submit"
                    onClick={() => addCourse()}
                    width="150px"
                >
                    Створити курс
                </BtnGreen>
            </CourseEditItem>

            <CourseEditItem>
                <Input
                    type="text"
                    placeholder="Назва модулю"
                    value={moduleName.value}
                    onChange={e => moduleName.onChange(e)}
                    onBlur={e => moduleName.onBlur(e)}
                />

                <p>Вибраний курс: {props.courseInfo.courseName}</p>

                <BtnGreen
                    type="submit"
                    onClick={() => addModuleToCourse()}
                    width="160px"
                >
                    Добавити модуль
                </BtnGreen>
            </CourseEditItem>
        </section>
    );
};

export default CourseAndModuleEditor;
