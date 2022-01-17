import styled from 'styled-components';

export const FlexDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const CourseContentWrapp = styled.ul`
    /* border: 1px solid red; */
`;

export const ItemWrapp = styled.ul`
    padding-left: 20px;
    margin-top: 10px;
`;

export const CourseItem = styled.li`
    margin-bottom: 15px;

    h3 {
        margin-left: 10px;
        font-size: 22px;
        color: #313131;
        cursor: pointer;
    }
`;

export const ModuleItem = styled.li`
    margin-bottom: 15px;

    h4 {
        margin-left: 10px;
        font-size: 18px;
        cursor: pointer;
    }
`;

export const ChapterItem = styled.li`
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    h5 {
        margin-left: 10px;
        font-size: 16px;
    }
`;

// export const  = styled.li``;
