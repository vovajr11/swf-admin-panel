import { React, useEffect } from 'react';
import styled from 'styled-components';
import TextEditor from '../../components/TextEditor';
// import StyleBtn from './StyleBtn';

const Wrapp = styled.div`
    width: 800px;
`;

const News = () => {
    return (
        <>
            <TextEditor />
        </>
    );
};

export default News;
