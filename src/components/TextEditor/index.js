import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addChapter } from '../../redux/course/courseAPI';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import { BtnGreen } from '../../components/Global/Styled';
import { BtnWrapp } from './Styled';
import { Notification, notificationTypes } from '../../components/Notification';

export const TextEditor = props => {
    const { articleName, moduleDetails, isEmptyChapterName } = props;
    const dispatch = useDispatch();
    const [state, setState] = useState({ value: null });
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = value => {
        setState({ value });
    };

    const createArticle = () => {
        dispatch(
            addChapter({
                moduleId: moduleDetails.id,
                chapterName: articleName,
                chapterContent: state.value,
            }),
        );

        setState({ value: null });
        notificationTypes.notificationSuccess('Нову тему додано');
    };

    return (
        <>
            <Notification />
            <div className="text-editor">
                <BtnWrapp>
                    <BtnGreen onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? 'Сховати' : 'Показати'}
                    </BtnGreen>

                    <BtnGreen
                        onClick={() => createArticle()}
                        disabled={
                            moduleDetails.name === undefined ||
                            isEmptyChapterName
                        }
                    >
                        Створити
                    </BtnGreen>
                </BtnWrapp>

                <EditorToolbar />
                <ReactQuill
                    theme="snow"
                    value={state.value}
                    onChange={handleChange}
                    placeholder={'Шось розказуй...'}
                    modules={modules}
                    formats={formats}
                    style={{ width: '1100px', height: '700px' }}
                />
                {isOpen ? (
                    <ReactQuill
                        modules={{ toolbar: null }}
                        value={state.value}
                        style={{ margin: '1em', flex: '1' }}
                        readOnly={true}
                    />
                ) : null}
            </div>
        </>
    );
};

export default TextEditor;
