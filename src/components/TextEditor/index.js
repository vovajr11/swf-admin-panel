import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import axios from 'axios';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import { useLocalStorage } from './useLocalStorage';

axios.defaults.baseURL = 'http://localhost:5000/api';

export const TextEditor = props => {
    const { addArticle, articleName, moduleId } = props;

    const [state, setState] = useState({ value: null });
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = value => {
        setState({ value });
    };

    const { value } = state;

    const createArticle = () => {
        addArticle(moduleId, {
            chapterName: articleName,
            chapterContent: value,
        });
    };

    return (
        <div className="text-editor">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Сховати' : 'Показати'}
            </button>

            <button onClick={() => createArticle()}>Створити</button>

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
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
