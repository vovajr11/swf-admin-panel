import React from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { addCourse, addModule } from '@redux/course/courseAPI';
import { useInput } from '@components/Input/useInput';
import { Input, BtnGreen } from '@components/Global/Styled';
import { CourseEditItem } from './Styled';
import { Notification, notificationTypes } from '@components/Notification';

const CourseAndModuleEditor = ({ courseInfo }) => {
    const courseName = useInput('', { isEmpty: true, minLength: 1 });
    const courseDescription = useInput('', { isEmpty: true, minLength: 1 });
    const moduleName = useInput('', { isEmpty: true, minLength: 1 });

    const dispatch = useDispatch();

    const onAddCourse = () => {
        dispatch(
            addCourse({
                courseName: courseName.value,
                courseDescription: courseDescription.value,
            }),
        );

        notificationTypes.notificationSuccess('Курс додано');
    };

    const onAddModuleToCourse = () => {
        dispatch(
            addModule({
                courseId: courseInfo.id,
                moduleName: moduleName.value,
            }),
        );

        notificationTypes.notificationSuccess('Модуль додано');
    };

    return (
        <section>
            <Notification />
            <CourseEditItem>
                {courseName.isDirty && courseName.isEmpty && (
                    <div style={{ color: 'red' }}>Поле не може бути пустим</div>
                )}
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
                    onClick={() => onAddCourse()}
                    width="150px"
                    disabled={
                        !courseName.inputValid || !courseDescription.inputValid
                    }
                >
                    Створити курс
                </BtnGreen>
            </CourseEditItem>

            <CourseEditItem>
                {moduleName.isDirty && moduleName.isEmpty && (
                    <div style={{ color: 'red' }}>Поле не може бути пустим</div>
                )}
                <Input
                    type="text"
                    placeholder="Назва модулю"
                    value={moduleName.value}
                    onChange={e => moduleName.onChange(e)}
                    onBlur={e => moduleName.onBlur(e)}
                />

                <p>Вибраний курс: {courseInfo.courseName}</p>

                <BtnGreen
                    type="submit"
                    onClick={() => onAddModuleToCourse()}
                    width="160px"
                    disabled={
                        !moduleName.inputValid ||
                        courseInfo.courseName === undefined
                    }
                >
                    Добавити модуль
                </BtnGreen>
            </CourseEditItem>
        </section>
    );
};

export default CourseAndModuleEditor;
