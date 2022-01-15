import styled from 'styled-components';

// export const CourseEdit = styled.section`
//     display: flex;
// `;

export const CourseEditItem = styled.div`
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    margin-bottom: 10px;

    textarea {
        width: 270px;
        height: 110px;
        resize: none;
        margin: 10px auto;
        font-size: 16px;
    }
`;
