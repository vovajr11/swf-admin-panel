import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import { BtnGreen } from '../../components/Global/Styled';
import { BtnWrapp } from './Styled';
import { Notification, notificationTypes } from '../../components/Notification';

export const TextEditor = props => {
    const { addArticle, articleName, moduleDetails, isEmptyChapterName } =
        props;

    const [state, setState] = useState({ value: null });
    const [isOpen, setIsOpen] = useState(false);

    const { value } = state;

    const handleChange = value => {
        setState({ value });
    };

    const createArticle = () => {
        addArticle(moduleDetails.id, {
            chapterName: articleName,
            chapterContent: value,
        });
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
                    value={value}
                    onChange={handleChange}
                    placeholder={'Шось розказуй...'}
                    modules={modules}
                    formats={formats}
                    style={{ width: '1100px', height: '700px' }}
                />
                {isOpen ? (
                    <ReactQuill
                        modules={{ toolbar: null }}
                        value={value}
                        style={{ margin: '1em', flex: '1' }}
                        readOnly={true}
                    />
                ) : null}
            </div>
        </>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
